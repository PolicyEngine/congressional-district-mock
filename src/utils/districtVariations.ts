import { CongressionalDistrict } from '../data/congressionalDistricts';

export interface DistrictMultipliers {
  povertyReduction: number;
  taxBurden: number;
  economicImpact: number;
  benefitRecipients: number;
}

export function calculateDistrictMultipliers(district: CongressionalDistrict): DistrictMultipliers {
  // Calculate multipliers based on district characteristics
  const urbanMultiplier = 0.9 + (district.urbanIndex * 0.3); // 0.9 to 1.2
  const incomeMultiplier = district.medianIncome < 60000 ? 1.15 :
                           district.medianIncome > 80000 ? 0.85 : 1.0;
  const seniorMultiplier = 0.9 + (district.seniorIndex * 0.4); // 0.9 to 1.3
  const familyMultiplier = 0.95 + (district.familyIndex * 0.2); // 0.95 to 1.15

  return {
    povertyReduction: urbanMultiplier * incomeMultiplier,
    taxBurden: incomeMultiplier * (2 - urbanMultiplier) / 2,
    economicImpact: urbanMultiplier * familyMultiplier,
    benefitRecipients: seniorMultiplier * incomeMultiplier
  };
}

export function applyDistrictVariation(
  baseValue: number,
  multiplier: number,
  variationRange: number = 0.1
): number {
  // Apply multiplier with some controlled randomness for realism
  const variation = 1 + (Math.random() - 0.5) * variationRange;
  return baseValue * multiplier * variation;
}

export interface ImpactData {
  povertyReduction: number;
  avgTaxChange: number;
  economicGrowth: number;
  jobsCreated: number;
  beneficiaries: number;
  budgetImpact: number;
  winners: number; // Percentage of people better off
  losers: number; // Keep for backward compatibility but won't display
}

export function generateDistrictImpact(
  district: CongressionalDistrict,
  baseImpact: ImpactData
): ImpactData {
  const multipliers = calculateDistrictMultipliers(district);

  // Scale national numbers down to district level (1/435 with variation)
  const districtScale = (1 / 435) * (0.8 + Math.random() * 0.4); // 80-120% of average

  return {
    povertyReduction: Math.round(
      baseImpact.povertyReduction * districtScale * multipliers.povertyReduction / 100
    ) * 100,
    avgTaxChange: Math.round(
      applyDistrictVariation(baseImpact.avgTaxChange, multipliers.taxBurden)
    ),
    economicGrowth: 0, // Remove GDP impact as you suggested - not relevant for microsim
    jobsCreated: Math.round(
      baseImpact.jobsCreated * districtScale * multipliers.economicImpact / 10
    ) * 10,
    beneficiaries: Math.round(
      Math.min(district.population * 0.4, baseImpact.beneficiaries * districtScale * multipliers.benefitRecipients) / 1000
    ) * 1000,
    budgetImpact: 0, // District-level budget impact not meaningful
    winners: Math.round(
      55 + (Math.random() - 0.5) * 30 * multipliers.benefitRecipients
    ),
    losers: 100 - Math.round(
      55 + (Math.random() - 0.5) * 30 * multipliers.benefitRecipients
    )
  };
}

export function generateNationalImpact(billId: string): ImpactData {
  // Generate consistent national impact data based on bill ID
  const impacts: Record<string, ImpactData> = {
    'hr1234': {
      povertyReduction: -850000,
      avgTaxChange: -1250,
      economicGrowth: 2.3,
      jobsCreated: 125000,
      beneficiaries: 145000000,
      budgetImpact: -450.5,
      winners: 72,
      losers: 28
    },
    'hr2456': {
      povertyReduction: -2100000,
      avgTaxChange: 320,
      economicGrowth: 1.8,
      jobsCreated: 85000,
      beneficiaries: 65000000,
      budgetImpact: 280.3,
      winners: 58,
      losers: 42
    },
    's789': {
      povertyReduction: -1500000,
      avgTaxChange: 450,
      economicGrowth: 0.9,
      jobsCreated: 45000,
      beneficiaries: 25000000,
      budgetImpact: 320.8,
      winners: 45,
      losers: 55
    },
    'hr3678': {
      povertyReduction: -320000,
      avgTaxChange: -890,
      economicGrowth: 1.5,
      jobsCreated: 95000,
      beneficiaries: 8500000,
      budgetImpact: -125.5,
      winners: 65,
      losers: 35
    },
    'hr4567': {
      povertyReduction: -680000,
      avgTaxChange: 280,
      economicGrowth: 2.8,
      jobsCreated: 320000,
      beneficiaries: 35000000,
      budgetImpact: 450.2,
      winners: 62,
      losers: 38
    },
    's1122': {
      povertyReduction: -450000,
      avgTaxChange: 120,
      economicGrowth: 0.6,
      jobsCreated: 35000,
      beneficiaries: 9200000,
      budgetImpact: 85.5,
      winners: 48,
      losers: 52
    },
    'hr5678': {
      povertyReduction: -550000,
      avgTaxChange: 180,
      economicGrowth: 3.2,
      jobsCreated: 450000,
      beneficiaries: 125000000,
      budgetImpact: 680.5,
      winners: 78,
      losers: 22
    },
    'hr6789': {
      povertyReduction: -1800000,
      avgTaxChange: 680,
      economicGrowth: 0.5,
      jobsCreated: 15000,
      beneficiaries: 67000000,
      budgetImpact: 450.8,
      winners: 52,
      losers: 48
    },
    's2233': {
      povertyReduction: -420000,
      avgTaxChange: -120,
      economicGrowth: 1.2,
      jobsCreated: 85000,
      beneficiaries: 12000000,
      budgetImpact: -45.5,
      winners: 55,
      losers: 45
    },
    'hr7890': {
      povertyReduction: -1200000,
      avgTaxChange: 220,
      economicGrowth: 1.1,
      jobsCreated: 65000,
      beneficiaries: 18000000,
      budgetImpact: 125.5,
      winners: 61,
      losers: 39
    }
  };

  return impacts[billId] || impacts['hr1234']; // Default to first bill if not found
}