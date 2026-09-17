#!/usr/bin/env python3
"""
Convert existing SALT analysis CSV data to comprehensive format with all metrics
needed for the congressional district mock app.
"""

import pandas as pd
import numpy as np

def load_existing_data():
    """Load the existing CSV data from the user's analysis."""
    # Data provided by user
    data = """state_fips,congressional_district_geoid,district_number,avg_income_impact,avg_tax_change,total_households
2.0,201.0,1.0,-3.5073369,510.3354,322603.78
47.0,4709.0,9.0,-13.144602,395.54288,257661.75
53.0,5304.0,4.0,-19.408136,881.70074,333011.97
12.0,1218.0,18.0,-21.7869,75.64127,395720.75
48.0,4809.0,9.0,-24.369152,431.70593,332121.4
33.0,3302.0,2.0,-26.281357,636.87915,272362.06
48.0,4828.0,28.0,-28.181192,201.36841,324055.6
48.0,4815.0,15.0,-29.244411,1702.7278,227688.67
48.0,4816.0,16.0,-30.565483,220.63855,269008.38
53.0,5302.0,2.0,-30.596777,280.33057,298708.06
33.0,3301.0,1.0,-31.110903,177.93971,303510.44
48.0,4823.0,23.0,-31.729635,344.91617,251117.9
56.0,5601.0,1.0,-32.00103,706.61993,247657.31
32.0,3204.0,4.0,-32.810295,563.6811,351449.78
48.0,4834.0,34.0,-35.18205,562.8005,223656.88
53.0,5305.0,5.0,-35.312878,772.9786,308143.75
53.0,5306.0,6.0,-36.044113,138.4128,367389.2
53.0,5310.0,10.0,-36.58714,475.96555,342006.94
48.0,4830.0,30.0,-37.31375,1630.616,267499.34
12.0,1204.0,4.0,-38.542217,359.56137,274419.1"""

    # Convert to DataFrame
    from io import StringIO
    df = pd.read_csv(StringIO(data))
    return df

def estimate_comprehensive_metrics(df):
    """Estimate additional metrics based on existing data patterns."""

    # Make a copy for comprehensive metrics
    comprehensive_df = df.copy()

    # Estimate total people (assuming ~2.5 people per household on average)
    comprehensive_df['total_people'] = comprehensive_df['total_households'] * 2.5

    # Calculate total financial impacts
    comprehensive_df['total_income_impact'] = comprehensive_df['avg_income_impact'] * comprehensive_df['total_households']
    comprehensive_df['total_tax_change'] = comprehensive_df['avg_tax_change'] * comprehensive_df['total_households']

    # Estimate winners/losers based on income impact patterns
    # Districts with negative avg impact are likely to have more losers
    # Use sigmoid-like function to estimate percentages

    # SALT cap abolishment should harm everyone - no winners since we're removing a deduction
    # The variation is only in HOW MUCH people are harmed based on their SALT usage

    # Most people will be affected negatively (losers)
    # Some people won't be affected if they don't use SALT deduction (unaffected)
    # NO ONE should benefit from removing a deduction (winners = 0)

    # Only households that itemize AND hit the SALT cap are affected
    # Most people take standard deduction and are unaffected
    # Nationally, only ~13% of taxpayers itemize, and only some of those hit SALT cap

    def estimate_affected_pct(avg_impact):
        # More negative impact districts = higher-income areas with more itemizers hitting SALT cap
        # But still a small minority of total households
        if abs(avg_impact) > 35:  # Very high impact districts
            return min(25, 15 + abs(avg_impact) * 0.2)  # Up to 25% affected
        elif abs(avg_impact) > 20:  # Moderate impact districts
            return min(15, 8 + abs(avg_impact) * 0.15)  # Up to 15% affected
        else:  # Low impact districts
            return min(10, 3 + abs(avg_impact) * 0.1)   # Up to 10% affected

    comprehensive_df['losers_pct'] = comprehensive_df['avg_income_impact'].apply(estimate_affected_pct)
    comprehensive_df['unaffected_pct'] = 100 - comprehensive_df['losers_pct']
    comprehensive_df['winners_pct'] = 0  # NO WINNERS when removing a deduction

    # Calculate counts from percentages
    comprehensive_df['winners_count'] = 0  # NO WINNERS
    comprehensive_df['losers_count'] = (comprehensive_df['losers_pct'] / 100) * comprehensive_df['total_households']
    comprehensive_df['unaffected_count'] = (comprehensive_df['unaffected_pct'] / 100) * comprehensive_df['total_households']

    # Estimate poverty impacts (SALT deduction typically affects higher-income households)
    # So poverty impacts should be relatively small
    comprehensive_df['baseline_poverty_count'] = comprehensive_df['total_households'] * np.random.uniform(0.08, 0.15, len(comprehensive_df))
    comprehensive_df['baseline_poverty_rate'] = (comprehensive_df['baseline_poverty_count'] / comprehensive_df['total_households']) * 100

    # SALT reform should push some people into poverty (higher taxes) but not lift anyone
    comprehensive_df['lifted_from_poverty'] = 0  # Removing deductions can't lift from poverty
    comprehensive_df['pushed_into_poverty'] = np.random.uniform(5, 25, len(comprehensive_df))  # Some pushed into poverty
    comprehensive_df['net_poverty_change'] = comprehensive_df['pushed_into_poverty']  # Only increases
    comprehensive_df['reform_poverty_count'] = comprehensive_df['baseline_poverty_count'] + comprehensive_df['net_poverty_change']
    comprehensive_df['reform_poverty_rate'] = (comprehensive_df['reform_poverty_count'] / comprehensive_df['total_households']) * 100
    comprehensive_df['poverty_rate_change'] = comprehensive_df['reform_poverty_rate'] - comprehensive_df['baseline_poverty_rate']

    # Beneficiary analysis - NO beneficiaries when removing a deduction
    comprehensive_df['beneficiary_count'] = 0  # NO beneficiaries
    comprehensive_df['beneficiary_rate'] = 0  # NO beneficiaries

    # Average benefit among beneficiaries - N/A since there are no beneficiaries
    comprehensive_df['avg_benefit_among_beneficiaries'] = 0

    # Estimate after-tax income change (should be roughly inverse of tax change)
    comprehensive_df['avg_after_tax_change'] = -comprehensive_df['avg_tax_change']

    # Add income decile impacts (SALT deduction removal hurts higher deciles more)
    # Generate realistic patterns where higher deciles are hurt more
    for decile in range(1, 11):
        if decile <= 6:  # Lower deciles - minimal impact (they don't use SALT much)
            comprehensive_df[f'decile_{decile}_avg_impact'] = comprehensive_df['avg_income_impact'] * np.random.uniform(0.05, 0.2, len(comprehensive_df))
            comprehensive_df[f'decile_{decile}_winner_pct'] = 0  # NO WINNERS in any decile
        else:  # Higher deciles - larger negative impacts (they use SALT more)
            multiplier = (decile - 6) * 0.4 + 0.8  # Scaling factor for higher deciles
            comprehensive_df[f'decile_{decile}_avg_impact'] = comprehensive_df['avg_income_impact'] * np.random.uniform(multiplier, multiplier + 0.5, len(comprehensive_df))
            comprehensive_df[f'decile_{decile}_winner_pct'] = 0  # NO WINNERS in any decile

    return comprehensive_df

def add_state_names(df):
    """Add state names and other identifiers."""
    # State FIPS to name mapping (partial - add more as needed)
    state_names = {
        1: 'Alabama', 2: 'Alaska', 4: 'Arizona', 5: 'Arkansas', 6: 'California',
        8: 'Colorado', 9: 'Connecticut', 10: 'Delaware', 12: 'Florida', 13: 'Georgia',
        15: 'Hawaii', 16: 'Idaho', 17: 'Illinois', 18: 'Indiana', 19: 'Iowa',
        20: 'Kansas', 21: 'Kentucky', 22: 'Louisiana', 23: 'Maine', 24: 'Maryland',
        25: 'Massachusetts', 26: 'Michigan', 27: 'Minnesota', 28: 'Mississippi', 29: 'Missouri',
        30: 'Montana', 31: 'Nebraska', 32: 'Nevada', 33: 'New Hampshire', 34: 'New Jersey',
        35: 'New Mexico', 36: 'New York', 37: 'North Carolina', 38: 'North Dakota', 39: 'Ohio',
        40: 'Oklahoma', 41: 'Oregon', 42: 'Pennsylvania', 44: 'Rhode Island', 45: 'South Carolina',
        46: 'South Dakota', 47: 'Tennessee', 48: 'Texas', 49: 'Utah', 50: 'Vermont',
        51: 'Virginia', 53: 'Washington', 54: 'West Virginia', 55: 'Wisconsin', 56: 'Wyoming'
    }

    df['state_name'] = df['state_fips'].map(state_names)
    df['reform_name'] = 'Eliminate SALT Deduction Cap'
    df['reform_description'] = 'Complete elimination of the state and local tax deduction'

    return df

def main():
    print("Converting existing SALT analysis data to comprehensive format...")

    # Load existing data
    df = load_existing_data()
    print(f"Loaded {len(df)} congressional districts")

    # Estimate comprehensive metrics
    comprehensive_df = estimate_comprehensive_metrics(df)
    print("Generated comprehensive metrics")

    # Add state names and reform info
    comprehensive_df = add_state_names(comprehensive_df)
    print("Added state names and reform information")

    # Reorder columns for better readability
    column_order = [
        'state_fips', 'state_name', 'congressional_district_geoid', 'district_number',
        'reform_name', 'reform_description',
        'total_households', 'total_people',
        'avg_income_impact', 'total_income_impact',
        'avg_tax_change', 'total_tax_change',
        'avg_after_tax_change',
        'winners_count', 'winners_pct',
        'losers_count', 'losers_pct',
        'unaffected_count', 'unaffected_pct',
        'baseline_poverty_count', 'baseline_poverty_rate',
        'reform_poverty_count', 'reform_poverty_rate',
        'poverty_rate_change', 'net_poverty_change',
        'lifted_from_poverty', 'pushed_into_poverty',
        'beneficiary_count', 'beneficiary_rate', 'avg_benefit_among_beneficiaries'
    ]

    # Add decile columns
    decile_columns = []
    for decile in range(1, 11):
        decile_columns.extend([f'decile_{decile}_avg_impact', f'decile_{decile}_winner_pct'])

    column_order.extend(decile_columns)

    # Reorder columns (only include those that exist)
    existing_columns = [col for col in column_order if col in comprehensive_df.columns]
    comprehensive_df = comprehensive_df[existing_columns]

    # Save comprehensive results
    comprehensive_df.to_csv("salt_comprehensive_analysis.csv", index=False)
    print(f"Saved comprehensive analysis to salt_comprehensive_analysis.csv")

    # Display summary statistics
    print("\n" + "="*60)
    print("SUMMARY STATISTICS")
    print("="*60)

    total_households = comprehensive_df['total_households'].sum()
    total_people = comprehensive_df['total_people'].sum()

    # Weighted averages
    national_avg_impact = (comprehensive_df['avg_income_impact'] * comprehensive_df['total_households']).sum() / total_households
    national_avg_tax_change = (comprehensive_df['avg_tax_change'] * comprehensive_df['total_households']).sum() / total_households

    total_winners = comprehensive_df['winners_count'].sum()
    total_losers = comprehensive_df['losers_count'].sum()
    total_beneficiaries = comprehensive_df['beneficiary_count'].sum()

    national_winners_pct = (total_winners / total_households) * 100
    national_losers_pct = (total_losers / total_households) * 100
    national_beneficiary_pct = (total_beneficiaries / total_households) * 100

    total_lifted = comprehensive_df['lifted_from_poverty'].sum()
    total_pushed = comprehensive_df['pushed_into_poverty'].sum()
    net_poverty_impact = comprehensive_df['net_poverty_change'].sum()

    print(f"Congressional Districts: {len(comprehensive_df)}")
    print(f"Total Households: {total_households:,.0f}")
    print(f"Total People: {total_people:,.0f}")
    print(f"")
    print(f"Average Household Impact: ${national_avg_impact:.2f}")
    print(f"Average Tax Change: ${national_avg_tax_change:.2f}")
    print(f"")
    print(f"Winners: {total_winners:,.0f} households ({national_winners_pct:.1f}%) - NO WINNERS")
    print(f"Losers: {total_losers:,.0f} households ({national_losers_pct:.1f}%)")
    print(f"Unaffected: {total_households - total_losers:,.0f} households ({((total_households - total_losers)/total_households)*100:.1f}%)")
    print(f"Beneficiaries: {total_beneficiaries:,.0f} households ({national_beneficiary_pct:.1f}%) - NO BENEFICIARIES")
    print(f"")
    print(f"Poverty Impact:")
    print(f"  Lifted from poverty: {total_lifted:,.0f} households (NONE - removing deductions can't help)")
    print(f"  Pushed into poverty: {total_pushed:,.0f} households")
    print(f"  Net change: +{net_poverty_impact:,.0f} households (increased poverty)")

    # Show top and bottom districts
    print(f"\nTop 5 Districts (Least Harmful):")
    top_5 = comprehensive_df.nsmallest(5, 'avg_income_impact')[['state_name', 'district_number', 'avg_income_impact', 'losers_pct']]
    print(top_5.to_string(index=False))

    print(f"\nBottom 5 Districts (Most Harmful):")
    bottom_5 = comprehensive_df.nlargest(5, 'avg_income_impact')[['state_name', 'district_number', 'avg_income_impact', 'losers_pct']]
    print(bottom_5.to_string(index=False))

    print(f"\nComprehensive analysis saved to: salt_comprehensive_analysis.csv")

if __name__ == "__main__":
    main()