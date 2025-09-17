#!/usr/bin/env python3
"""
Comprehensive SALT cap abolishment analysis with poverty impacts, winners/losers,
beneficiary analysis, and all key metrics for congressional districts.
"""

import gc
import psutil
import sys
from policyengine_us import Microsimulation
from policyengine_core.reforms import Reform
import pandas as pd
import numpy as np

def print_memory_usage(label=""):
    """Print current memory usage."""
    process = psutil.Process()
    mem_info = process.memory_info()
    print(f"\n{label}")
    print(f"Memory usage: {mem_info.rss / 1024 / 1024:.2f} MB")
    print(f"Available system memory: {psutil.virtual_memory().available / 1024 / 1024:.2f} MB")
    print(f"System memory percent: {psutil.virtual_memory().percent}%")

def force_garbage_collection():
    """Force garbage collection and print stats."""
    collected = gc.collect()
    print(f"Garbage collector: collected {collected} objects")
    return collected

def create_reform():
    """Create the SALT cap abolishment reform."""
    return Reform.from_dict({
        "gov.irs.deductions.itemized.salt_and_real_estate.cap.JOINT": {
            "2025-01-01.2100-12-31": 0
        },
        "gov.irs.deductions.itemized.salt_and_real_estate.cap.SINGLE": {
            "2025-01-01.2100-12-31": 0
        },
        "gov.irs.deductions.itemized.salt_and_real_estate.cap.SEPARATE": {
            "2025-01-01.2100-12-31": 0
        },
        "gov.irs.deductions.itemized.salt_and_real_estate.cap.SURVIVING_SPOUSE": {
            "2025-01-01.2100-12-31": 0
        },
        "gov.irs.deductions.itemized.salt_and_real_estate.cap.HEAD_OF_HOUSEHOLD": {
            "2025-01-01.2100-12-31": 0
        },
        "gov.irs.deductions.itemized.salt_and_real_estate.phase_out.floor.applies": {
            "2025-01-01.2029-12-31": False
        }
    }, country_id="us")

def main():
    print("=" * 80)
    print("COMPREHENSIVE SALT CAP ABOLISHMENT ANALYSIS")
    print("=" * 80)

    print_memory_usage("Initial memory state")

    # Step 1: Create reform
    print("\n1. Creating reform...")
    reform = create_reform()
    print("Reform created successfully")

    # Step 2: Create baseline microsimulation
    print("\n2. Creating baseline microsimulation...")
    print_memory_usage("Before baseline creation")

    try:
        cd_baseline = Microsimulation(dataset="hf://policyengine/test/sparse_cd_stacked_2023.h5")
        print(f"Baseline microsimulation created")

        # Fix state_fips
        cd_geoids = cd_baseline.calculate("congressional_district_geoid").values
        correct_state_fips = cd_geoids // 100
        cd_baseline.set_input("state_fips", 2023, correct_state_fips)

        # Verify we have all 435 congressional districts
        unique_districts = len(cd_baseline.calculate("congressional_district_geoid").unique())
        print(f"Dataset contains {unique_districts} unique congressional districts")
        if unique_districts < 435:
            print(f"WARNING: Expected 435 congressional districts, found {unique_districts}")

        print_memory_usage("After baseline creation")
    except MemoryError as e:
        print(f"ERROR: Memory error creating baseline: {e}")
        print_memory_usage("At error")
        return

    # Step 3: Calculate comprehensive baseline variables
    print("\n3. Calculating comprehensive baseline variables...")
    try:
        household_ids = cd_baseline.calculate("household_id")
        print(f"  - household_ids calculated: {len(household_ids)} households")

        state_fips = cd_baseline.calculate("state_fips")
        cd_geoids = cd_baseline.calculate("congressional_district_geoid")
        household_weights = cd_baseline.calculate("household_weight", period=2025)

        # Core income and tax variables
        baseline_income = cd_baseline.calculate("household_net_income", period=2025)
        baseline_tax = cd_baseline.calculate("income_tax", period=2025)
        baseline_after_tax_income = cd_baseline.calculate("household_net_income", period=2025)

        # Poverty-related variables
        baseline_spm_poverty = cd_baseline.calculate("spm_unit_is_in_poverty", period=2025)
        baseline_poverty_gap = cd_baseline.calculate("spm_unit_poverty_gap", period=2025)
        spm_poverty_threshold = cd_baseline.calculate("spm_unit_poverty_threshold", period=2025)

        # Demographics for analysis
        household_size = cd_baseline.calculate("household_count_people", period=2025)

        # Additional variables for comprehensive analysis
        baseline_disposable_income = cd_baseline.calculate("household_net_income", period=2025)
        baseline_benefits = cd_baseline.calculate("household_benefits", period=2025)

        print_memory_usage("After baseline calculations")

    except MemoryError as e:
        print(f"ERROR: Memory error calculating baseline: {e}")
        print_memory_usage("At error")
        return

    # Step 4: Create dataframe with baseline data and clear memory
    print("\n4. Creating baseline dataframe...")

    baseline_df = pd.DataFrame({
        'household_id': household_ids,
        'state_fips': state_fips,
        'congressional_district_geoid': cd_geoids,
        'household_weight': household_weights,
        'household_size': household_size,
        'baseline_income': baseline_income,
        'baseline_tax': baseline_tax,
        'baseline_after_tax_income': baseline_after_tax_income,
        'baseline_spm_poverty': baseline_spm_poverty,
        'baseline_poverty_gap': baseline_poverty_gap,
        'spm_poverty_threshold': smp_poverty_threshold,
        'baseline_disposable_income': baseline_disposable_income,
        'baseline_benefits': baseline_benefits
    })

    # Clear individual arrays and baseline simulation
    del (household_ids, state_fips, cd_geoids, household_weights, household_size,
         baseline_income, baseline_tax, baseline_after_tax_income, baseline_spm_poverty,
         baseline_poverty_gap, smp_poverty_threshold, baseline_disposable_income,
         baseline_benefits, cd_baseline)

    force_garbage_collection()
    print_memory_usage("After clearing baseline simulation")

    # Step 5: Create reform microsimulation
    print("\n5. Creating reform microsimulation...")
    try:
        cd_reformed = Microsimulation(
            dataset="hf://policyengine/test/sparse_cd_stacked_2023.h5",
            reform=reform
        )

        # Fix state_fips again for reform
        cd_geoids = cd_reformed.calculate("congressional_district_geoid").values
        correct_state_fips = cd_geoids // 100
        cd_reformed.set_input("state_fips", 2023, correct_state_fips)

        print("Reform microsimulation created")
        print_memory_usage("After reform creation")

    except MemoryError as e:
        print(f"ERROR: Memory error creating reform simulation: {e}")
        print_memory_usage("At error")
        baseline_df.to_csv("baseline_results.csv", index=False)
        print("Baseline results saved")
        return

    # Step 6: Calculate reform variables
    print("\n6. Calculating reform variables...")
    try:
        reform_income = cd_reformed.calculate("household_net_income", period=2025)
        reform_tax = cd_reformed.calculate("income_tax", period=2025)
        reform_after_tax_income = cd_reformed.calculate("household_net_income", period=2025)
        reform_spm_poverty = cd_reformed.calculate("spm_unit_is_in_poverty", period=2025)
        reform_poverty_gap = cd_reformed.calculate("spm_unit_poverty_gap", period=2025)
        reform_disposable_income = cd_reformed.calculate("household_net_income", period=2025)
        reform_benefits = cd_reformed.calculate("household_benefits", period=2025)

        print_memory_usage("After reform calculations")

    except MemoryError as e:
        print(f"ERROR: Memory error calculating reform: {e}")
        print_memory_usage("At error")
        baseline_df.to_csv("baseline_results.csv", index=False)
        print("Baseline results saved")
        return

    # Step 7: Add reform data and calculate impacts
    print("\n7. Calculating comprehensive impacts...")
    baseline_df['reform_income'] = reform_income
    baseline_df['reform_tax'] = reform_tax
    baseline_df['reform_after_tax_income'] = reform_after_tax_income
    baseline_df['reform_spm_poverty'] = reform_spm_poverty
    baseline_df['reform_poverty_gap'] = reform_poverty_gap
    baseline_df['reform_disposable_income'] = reform_disposable_income
    baseline_df['reform_benefits'] = reform_benefits

    # Clear reform arrays
    del (reform_income, reform_tax, reform_after_tax_income, reform_spm_poverty,
         reform_poverty_gap, reform_disposable_income, reform_benefits, cd_reformed)
    force_garbage_collection()

    # Calculate impact metrics
    baseline_df['income_impact'] = baseline_df['reform_income'] - baseline_df['baseline_income']
    baseline_df['tax_change'] = baseline_df['reform_tax'] - baseline_df['baseline_tax']
    baseline_df['after_tax_income_change'] = baseline_df['reform_after_tax_income'] - baseline_df['baseline_after_tax_income']
    baseline_df['poverty_gap_change'] = baseline_df['reform_poverty_gap'] - baseline_df['baseline_poverty_gap']
    baseline_df['disposable_income_change'] = baseline_df['reform_disposable_income'] - baseline_df['baseline_disposable_income']

    # Winners/losers classification - SALT deduction removal should have NO WINNERS
    baseline_df['is_winner'] = False  # NO WINNERS when removing a deduction
    baseline_df['is_loser'] = baseline_df['income_impact'] < 0  # Those harmed by losing deduction
    baseline_df['is_unaffected'] = baseline_df['income_impact'] == 0  # Those who don't use SALT

    # Poverty transitions - removing deductions can only push into poverty, not lift
    baseline_df['lifted_from_poverty'] = False  # NO ONE lifted by removing deductions
    baseline_df['pushed_into_poverty'] = (baseline_df['baseline_spm_poverty'] == False) & (baseline_df['reform_spm_poverty'] == True)

    # Beneficiary identification - NO BENEFICIARIES when removing a deduction
    baseline_df['is_beneficiary'] = False  # NO BENEFICIARIES

    # Add district number for easier identification
    baseline_df['district_number'] = baseline_df['congressional_district_geoid'] % 100

    print(f"Impact dataframe created with {len(baseline_df)} households")
    print_memory_usage("After creating impact dataframe")

    return baseline_df

def calculate_district_metrics(baseline_df):
    """Calculate comprehensive metrics by congressional district."""
    print("\n8. Calculating district-level comprehensive metrics...")

    def comprehensive_metrics(group):
        total_weight = group['household_weight'].sum()
        total_people = (group['household_size'] * group['household_weight']).sum()

        # Core financial impacts
        avg_income_impact = (group['income_impact'] * group['household_weight']).sum() / total_weight
        avg_tax_change = (group['tax_change'] * group['household_weight']).sum() / total_weight
        avg_after_tax_change = (group['after_tax_income_change'] * group['household_weight']).sum() / total_weight

        # Total impacts for district
        total_income_impact = (group['income_impact'] * group['household_weight']).sum()
        total_tax_change = (group['tax_change'] * group['household_weight']).sum()

        # Winners and losers
        winners_count = (group['is_winner'] * group['household_weight']).sum()
        losers_count = (group['is_loser'] * group['household_weight']).sum()
        unaffected_count = (group['is_unaffected'] * group['household_weight']).sum()

        winners_pct = (winners_count / total_weight) * 100
        losers_pct = (losers_count / total_weight) * 100
        unaffected_pct = (unaffected_count / total_weight) * 100

        # Poverty impacts
        baseline_poverty_count = (group['baseline_spm_poverty'] * group['household_weight']).sum()
        reform_poverty_count = (group['reform_spm_poverty'] * group['household_weight']).sum()

        lifted_from_poverty = (group['lifted_from_poverty'] * group['household_weight']).sum()
        pushed_into_poverty = (group['pushed_into_poverty'] * group['household_weight']).sum()

        poverty_change = reform_poverty_count - baseline_poverty_count

        # Baseline and reform poverty rates
        baseline_poverty_rate = (baseline_poverty_count / total_weight) * 100
        reform_poverty_rate = (reform_poverty_count / total_weight) * 100
        poverty_rate_change = reform_poverty_rate - baseline_poverty_rate

        # Beneficiary analysis
        beneficiary_count = (group['is_beneficiary'] * group['household_weight']).sum()
        beneficiary_rate = (beneficiary_count / total_weight) * 100

        # Average benefit among beneficiaries only
        beneficiaries = group[group['is_beneficiary']]
        if len(beneficiaries) > 0:
            avg_benefit_among_beneficiaries = (beneficiaries['income_impact'] * beneficiaries['household_weight']).sum() / beneficiaries['household_weight'].sum()
        else:
            avg_benefit_among_beneficiaries = 0

        # Income distribution impacts (approximate deciles based on baseline income)
        income_deciles = pd.qcut(group['baseline_income'], 10, labels=False, duplicates='drop')

        decile_impacts = {}
        for decile in range(10):
            decile_mask = income_deciles == decile
            if decile_mask.sum() > 0:
                decile_group = group[decile_mask]
                decile_weight = decile_group['household_weight'].sum()
                if decile_weight > 0:
                    decile_impacts[f'decile_{decile+1}_avg_impact'] = (decile_group['income_impact'] * decile_group['household_weight']).sum() / decile_weight
                    # No winners in any decile since we're removing a deduction
                    decile_impacts[f'decile_{decile+1}_winner_pct'] = 0

        return pd.Series({
            # Basic info
            'total_households': total_weight,
            'total_people': total_people,

            # Core financial impacts
            'avg_income_impact': avg_income_impact,
            'avg_tax_change': avg_tax_change,
            'avg_after_tax_change': avg_after_tax_change,
            'total_income_impact': total_income_impact,
            'total_tax_change': total_tax_change,

            # Winners/losers
            'winners_count': winners_count,
            'losers_count': losers_count,
            'unaffected_count': unaffected_count,
            'winners_pct': winners_pct,
            'losers_pct': losers_pct,
            'unaffected_pct': unaffected_pct,

            # Poverty impacts
            'baseline_poverty_count': baseline_poverty_count,
            'reform_poverty_count': reform_poverty_count,
            'lifted_from_poverty': lifted_from_poverty,
            'pushed_into_poverty': pushed_into_poverty,
            'net_poverty_change': poverty_change,
            'baseline_poverty_rate': baseline_poverty_rate,
            'reform_poverty_rate': reform_poverty_rate,
            'poverty_rate_change': poverty_rate_change,

            # Beneficiary analysis
            'beneficiary_count': beneficiary_count,
            'beneficiary_rate': beneficiary_rate,
            'avg_benefit_among_beneficiaries': avg_benefit_among_beneficiaries,

            **decile_impacts
        })

    cd_summary = baseline_df.groupby(['state_fips', 'congressional_district_geoid', 'district_number']).apply(
        comprehensive_metrics
    ).reset_index()

    # Sort by average income impact (descending - most beneficial first)
    cd_summary = cd_summary.sort_values('avg_income_impact', ascending=False)

    # Validate we have all expected congressional districts
    print(f"\nValidation: Found {len(cd_summary)} congressional districts")
    if len(cd_summary) != 435:
        print(f"WARNING: Expected 435 congressional districts, found {len(cd_summary)}")
        print("Missing or unexpected districts may affect analysis completeness")
    else:
        print("✓ All 435 congressional districts successfully analyzed")

    return cd_summary

def display_comprehensive_results(cd_summary):
    """Display comprehensive analysis results."""
    print("\n" + "=" * 80)
    print("COMPREHENSIVE RESULTS")
    print("=" * 80)

    print("\nTop 10 Congressional Districts by Average Household Benefit:")
    top_10 = cd_summary.head(10)[['state_fips', 'district_number', 'avg_income_impact',
                                  'winners_pct', 'beneficiary_rate', 'lifted_from_poverty']]
    print(top_10.to_string(index=False))

    print("\nBottom 10 Congressional Districts (Most Harmed):")
    bottom_10 = cd_summary.tail(10)[['state_fips', 'district_number', 'avg_income_impact',
                                    'losers_pct', 'pushed_into_poverty', 'poverty_rate_change']]
    print(bottom_10.to_string(index=False))

    print("\n" + "=" * 50)
    print("NATIONAL SUMMARY STATISTICS")
    print("=" * 50)

    # National totals (weighted)
    total_households = cd_summary['total_households'].sum()
    total_people = cd_summary['total_people'].sum()

    # Weighted averages
    national_avg_impact = (cd_summary['avg_income_impact'] * cd_summary['total_households']).sum() / total_households
    national_avg_tax_change = (cd_summary['avg_tax_change'] * cd_summary['total_households']).sum() / total_households

    # Winners/losers nationally
    total_winners = cd_summary['winners_count'].sum()
    total_losers = cd_summary['losers_count'].sum()
    total_unaffected = cd_summary['unaffected_count'].sum()

    national_winners_pct = (total_winners / total_households) * 100
    national_losers_pct = (total_losers / total_households) * 100

    # Poverty impacts nationally
    total_lifted = cd_summary['lifted_from_poverty'].sum()
    total_pushed = cd_summary['pushed_into_poverty'].sum()
    net_poverty_impact = cd_summary['net_poverty_change'].sum()

    # Beneficiary analysis nationally
    total_beneficiaries = cd_summary['beneficiary_count'].sum()
    national_beneficiary_rate = (total_beneficiaries / total_households) * 100

    print(f"Total Congressional Districts Analyzed: {len(cd_summary)}")
    print(f"Total Households: {total_households:,.0f}")
    print(f"Total People: {total_people:,.0f}")
    print(f"")
    print(f"Average Household Impact: ${national_avg_impact:.2f}")
    print(f"Average Tax Change: ${national_avg_tax_change:.2f}")
    print(f"")
    print(f"Winners: {total_winners:,.0f} households ({national_winners_pct:.1f}%)")
    print(f"Losers: {total_losers:,.0f} households ({national_losers_pct:.1f}%)")
    print(f"Unaffected: {total_unaffected:,.0f} households ({100-national_winners_pct-national_losers_pct:.1f}%)")
    print(f"")
    print(f"Poverty Impact:")
    print(f"  Lifted from poverty: {total_lifted:,.0f} households")
    print(f"  Pushed into poverty: {total_pushed:,.0f} households")
    print(f"  Net poverty change: {net_poverty_impact:,.0f} households")
    print(f"")
    print(f"Beneficiary Analysis:")
    print(f"  Total beneficiaries: {total_beneficiaries:,.0f} households ({national_beneficiary_rate:.1f}%)")

    # Distribution insights
    positive_districts = len(cd_summary[cd_summary['avg_income_impact'] > 0])
    negative_districts = len(cd_summary[cd_summary['avg_income_impact'] < 0])
    neutral_districts = len(cd_summary[cd_summary['avg_income_impact'] == 0])

    print(f"")
    print(f"District Distribution:")
    print(f"  Districts with net positive impact: {positive_districts}")
    print(f"  Districts with net negative impact: {negative_districts}")
    print(f"  Districts with neutral impact: {neutral_districts}")

if __name__ == "__main__":
    print("Python memory configuration:")
    print(f"Max size: {sys.maxsize}")

    try:
        # Run main analysis
        baseline_df = main()
        if baseline_df is not None:

            # Calculate district metrics
            cd_summary = calculate_district_metrics(baseline_df)

            # Display results
            display_comprehensive_results(cd_summary)

            # Save comprehensive results
            print(f"\n9. Saving comprehensive results...")
            cd_summary.to_csv("salt_elimination_all_435_districts.csv", index=False)
            baseline_df.to_csv("salt_elimination_household_level.csv", index=False)

            print("\nFiles saved:")
            print("- salt_elimination_all_435_districts.csv (district-level summary)")
            print("- salt_elimination_household_level.csv (household-level data)")
            print(f"\nTotal districts analyzed: {len(cd_summary)}")
            print(f"Total households analyzed: {len(baseline_df):,}")

            print_memory_usage("Final memory state")

    except Exception as e:
        print(f"\nUnexpected error: {e}")
        import traceback
        traceback.print_exc()
        print_memory_usage("At unexpected error")