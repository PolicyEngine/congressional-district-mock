export interface FederalBill {
  id: string;
  billNumber: string;
  title: string;
  shortTitle: string;
  summary: string;
  sponsor: string;
  sponsorParty: 'D' | 'R';
  sponsorState: string;
  cosponsors: number;
  committee: string;
  status: string;
  lastAction: string;
  introducedDate: string;
  categories: string[];
}

// Generate consistent bills for demo
export function generateFederalBills(state: string, districtNumber: number): FederalBill[] {
  const baseHash = state.charCodeAt(0) * 100 + state.charCodeAt(1) + districtNumber;

  const bills: FederalBill[] = [
    {
      id: 'hr1234',
      billNumber: 'H.R. 1234',
      title: 'Working Families Tax Relief Act of 2024',
      shortTitle: 'Working Families Tax Relief',
      summary: 'Expands the Child Tax Credit to $3,600 per child, increases the Earned Income Tax Credit by 25%, and creates a new $500 dependent care credit.',
      sponsor: 'Rep. Johnson',
      sponsorParty: 'D',
      sponsorState: 'CA',
      cosponsors: 189,
      committee: 'House Ways and Means',
      status: 'In Committee',
      lastAction: 'Referred to Subcommittee on Tax Policy',
      introducedDate: '2024-02-15',
      categories: ['Tax Credits', 'Family Support', 'Child Benefits']
    },
    {
      id: 'hr2456',
      billNumber: 'H.R. 2456',
      title: 'Middle Class Tax Reduction Act',
      shortTitle: 'Middle Class Tax Act',
      summary: 'Reduces tax rates for individuals earning under $200,000, increases standard deduction by $2,000, and eliminates marriage penalty.',
      sponsor: 'Rep. Smith',
      sponsorParty: 'R',
      sponsorState: 'TX',
      cosponsors: 127,
      committee: 'House Ways and Means',
      status: 'Passed House',
      lastAction: 'Received in Senate, referred to Committee',
      introducedDate: '2024-01-20',
      categories: ['Income Tax', 'Tax Rates', 'Standard Deduction']
    },
    {
      id: 's789',
      billNumber: 'S. 789',
      title: 'Universal Basic Income Pilot Program Act',
      shortTitle: 'UBI Pilot Act',
      summary: 'Establishes a 3-year pilot program providing $1,000 monthly payments to adults in selected districts, funded by carbon tax.',
      sponsor: 'Sen. Yang',
      sponsorParty: 'D',
      sponsorState: 'NY',
      cosponsors: 42,
      committee: 'Senate Finance',
      status: 'In Committee',
      lastAction: 'Hearing held on provisions',
      introducedDate: '2024-03-01',
      categories: ['Basic Income', 'Cash Transfers', 'Pilot Programs']
    },
    {
      id: 'hr3678',
      billNumber: 'H.R. 3678',
      title: 'SNAP Benefits Enhancement Act',
      shortTitle: 'SNAP Enhancement',
      summary: 'Increases SNAP benefits by 15%, removes asset limits, and expands eligibility to college students and legal immigrants.',
      sponsor: 'Rep. Garcia',
      sponsorParty: 'D',
      sponsorState: 'IL',
      cosponsors: 156,
      committee: 'House Agriculture',
      status: 'Markup Scheduled',
      lastAction: 'Committee markup scheduled for next week',
      introducedDate: '2024-02-28',
      categories: ['Food Assistance', 'SNAP', 'Nutrition']
    },
    {
      id: 'hr4567',
      billNumber: 'H.R. 4567',
      title: 'Social Security 2100 Act',
      shortTitle: 'Social Security 2100',
      summary: 'Increases Social Security benefits by 2%, sets new minimum benefit at 125% of poverty line, and extends solvency by raising cap on taxable wages.',
      sponsor: 'Rep. Larson',
      sponsorParty: 'D',
      sponsorState: 'CT',
      cosponsors: 195,
      committee: 'House Ways and Means',
      status: 'Subcommittee Review',
      lastAction: 'Referred to Subcommittee on Social Security',
      introducedDate: '2024-01-15',
      categories: ['Social Security', 'Retirement', 'Senior Benefits']
    },
    {
      id: 's1122',
      billNumber: 'S. 1122',
      title: 'Disability Benefits Improvement Act',
      shortTitle: 'Disability Benefits Act',
      summary: 'Increases SSDI benefits, eliminates 5-month waiting period, and updates medical eligibility criteria for disabilities.',
      sponsor: 'Sen. Casey',
      sponsorParty: 'D',
      sponsorState: 'PA',
      cosponsors: 67,
      committee: 'Senate Finance',
      status: 'Reported Favorably',
      lastAction: 'Reported out of committee with amendments',
      introducedDate: '2024-02-10',
      categories: ['Disability', 'SSDI', 'Healthcare']
    },
    {
      id: 'hr5678',
      billNumber: 'H.R. 5678',
      title: 'Tax Fairness and Simplification Act',
      shortTitle: 'Tax Fairness Act',
      summary: 'Creates new tax brackets for incomes over $1 million, eliminates carried interest loophole, and simplifies filing for low-income taxpayers.',
      sponsor: 'Rep. Warren',
      sponsorParty: 'D',
      sponsorState: 'MA',
      cosponsors: 178,
      committee: 'House Ways and Means',
      status: 'Floor Vote Pending',
      lastAction: 'Placed on House calendar for vote',
      introducedDate: '2024-03-10',
      categories: ['Tax Reform', 'Progressive Taxation', 'Tax Filing']
    },
    {
      id: 'hr6789',
      billNumber: 'H.R. 6789',
      title: 'Child Care for Working Families Act',
      shortTitle: 'Child Care Act',
      summary: 'Provides refundable tax credit covering 50% of child care costs up to $8,000 per child, phases out at $400,000 income.',
      sponsor: 'Rep. Murray',
      sponsorParty: 'D',
      sponsorState: 'WA',
      cosponsors: 145,
      committee: 'House Ways and Means',
      status: 'In Committee',
      lastAction: 'Subcommittee hearing scheduled',
      introducedDate: '2024-03-05',
      categories: ['Child Care', 'Tax Credits', 'Working Families']
    },
    {
      id: 's2233',
      billNumber: 'S. 2233',
      title: 'Retirement Security Act of 2024',
      shortTitle: 'Retirement Security',
      summary: 'Expands retirement savings tax credit, auto-enrolls workers in IRAs, and provides catch-up contributions for low-income savers.',
      sponsor: 'Sen. Collins',
      sponsorParty: 'R',
      sponsorState: 'ME',
      cosponsors: 38,
      committee: 'Senate Finance',
      status: 'In Committee',
      lastAction: 'Committee debate ongoing',
      introducedDate: '2024-02-25',
      categories: ['Retirement', 'Savings', 'Tax Incentives']
    },
    {
      id: 'hr7890',
      billNumber: 'H.R. 7890',
      title: 'Housing Assistance Reform Act',
      shortTitle: 'Housing Assistance',
      summary: 'Increases housing voucher funding by 30%, expands eligibility to 50% AMI, and creates new renter tax credit up to $1,500.',
      sponsor: 'Rep. Waters',
      sponsorParty: 'D',
      sponsorState: 'CA',
      cosponsors: 167,
      committee: 'House Financial Services',
      status: 'Markup Complete',
      lastAction: 'Ordered to be reported with amendments',
      introducedDate: '2024-03-15',
      categories: ['Housing', 'Rental Assistance', 'Tax Credits']
    }
  ];

  // Shuffle bills based on district to vary the order
  const shuffled = [...bills];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = (baseHash + i) % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Update sponsor info to sometimes be from the selected state
  shuffled.forEach((bill, index) => {
    if ((baseHash + index) % 3 === 0) {
      const stateInfo = state.substring(0, 2).toUpperCase();
      bill.sponsorState = stateInfo.length >= 2 ? stateInfo : bill.sponsorState;
    }
  });

  return shuffled.slice(0, 8); // Return 8 bills
}