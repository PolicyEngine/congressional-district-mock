const fs = require('fs');
const csv = require('csv-parse/sync');

// Read the CSV file
const fileContent = fs.readFileSync('legislators-current.csv', 'utf-8');
const records = csv.parse(fileContent, {
  columns: true,
  skip_empty_lines: true
});

// Filter for current House members and organize by state
const houseMembers = records.filter(r => r.type === 'rep');
const senators = records.filter(r => r.type === 'sen');

// Group by state
const stateData = {};

// Process each record
records.forEach(record => {
  const state = record.state;

  if (!stateData[state]) {
    stateData[state] = {
      representatives: [],
      senators: []
    };
  }

  if (record.type === 'rep') {
    const representative = {
      name: record.full_name,
      lastName: record.last_name,
      firstName: record.first_name,
      party: record.party === 'Democrat' ? 'D' : record.party === 'Republican' ? 'R' : 'I',
      district: record.district ? parseInt(record.district) : 1, // Default to 1 for at-large
      state: state
    };
    stateData[state].representatives.push(representative);
  } else if (record.type === 'sen') {
    const senator = {
      name: record.full_name,
      lastName: record.last_name,
      firstName: record.first_name,
      party: record.party === 'Democrat' ? 'D' : record.party === 'Republican' ? 'R' : 'I',
      state: state
      // No district field for senators
    };
    stateData[state].senators.push(senator);
  }
});

// Sort representatives by district
Object.keys(stateData).forEach(state => {
  stateData[state].representatives.sort((a, b) => (a.district || 0) - (b.district || 0));
});

// Generate TypeScript file content
let tsContent = `// Auto-generated from legislators-current.csv
// Data source: https://github.com/unitedstates/congress-legislators

export interface Representative {
  name: string;
  lastName: string;
  firstName: string;
  party: 'D' | 'R' | 'I';
  district: number;
  state: string;
}

export interface Senator {
  name: string;
  lastName: string;
  firstName: string;
  party: 'D' | 'R' | 'I';
  state: string;
}

export const ACTUAL_LEGISLATORS: Record<string, {
  representatives: Representative[];
  senators: Senator[];
}> = ${JSON.stringify(stateData, null, 2)};

// State name mapping
export const STATE_NAMES: Record<string, string> = {
  'AL': 'Alabama',
  'AK': 'Alaska',
  'AZ': 'Arizona',
  'AR': 'Arkansas',
  'CA': 'California',
  'CO': 'Colorado',
  'CT': 'Connecticut',
  'DE': 'Delaware',
  'FL': 'Florida',
  'GA': 'Georgia',
  'HI': 'Hawaii',
  'ID': 'Idaho',
  'IL': 'Illinois',
  'IN': 'Indiana',
  'IA': 'Iowa',
  'KS': 'Kansas',
  'KY': 'Kentucky',
  'LA': 'Louisiana',
  'ME': 'Maine',
  'MD': 'Maryland',
  'MA': 'Massachusetts',
  'MI': 'Michigan',
  'MN': 'Minnesota',
  'MS': 'Mississippi',
  'MO': 'Missouri',
  'MT': 'Montana',
  'NE': 'Nebraska',
  'NV': 'Nevada',
  'NH': 'New Hampshire',
  'NJ': 'New Jersey',
  'NM': 'New Mexico',
  'NY': 'New York',
  'NC': 'North Carolina',
  'ND': 'North Dakota',
  'OH': 'Ohio',
  'OK': 'Oklahoma',
  'OR': 'Oregon',
  'PA': 'Pennsylvania',
  'RI': 'Rhode Island',
  'SC': 'South Carolina',
  'SD': 'South Dakota',
  'TN': 'Tennessee',
  'TX': 'Texas',
  'UT': 'Utah',
  'VT': 'Vermont',
  'VA': 'Virginia',
  'WA': 'Washington',
  'WV': 'West Virginia',
  'WI': 'Wisconsin',
  'WY': 'Wyoming',
  'DC': 'District of Columbia'
};
`;

// Write the TypeScript file
fs.writeFileSync('src/data/actualLegislators.ts', tsContent);

console.log('Generated actualLegislators.ts with data for:');
console.log(`- ${houseMembers.length} House members`);
console.log(`- ${senators.length} Senators`);
console.log(`- ${Object.keys(stateData).length} states/territories`);