import { ACTUAL_LEGISLATORS, STATE_NAMES } from './actualLegislators';

// Using 'Constituency' instead of 'District' for Congressional terminology
export interface CongressionalConstituency {
  state: string;
  stateAbbr: string;
  districtNumber: number;
  displayName: string;
  representative: string;
  party: 'D' | 'R' | 'I';
  population: number;
  medianIncome: number;
  urbanIndex: number; // 0-1 scale
  seniorIndex: number; // 0-1 scale
  familyIndex: number; // 0-1 scale
}

// Get states data from actual legislators
function buildStatesData() {
  const statesData: Record<string, {
    name: string;
    abbr: string;
    districts: number;
    senators: { name: string; party: 'D' | 'R' | 'I' }[];
  }> = {};

  Object.keys(STATE_NAMES).forEach(abbr => {
    const fullName = STATE_NAMES[abbr];
    const legislatorData = ACTUAL_LEGISLATORS[abbr];

    if (legislatorData && legislatorData.representatives.length > 0) {
      statesData[fullName] = {
        name: fullName,
        abbr: abbr,
        districts: legislatorData.representatives.length,
        senators: legislatorData.senators.map(s => ({
          name: s.name,
          party: s.party
        })) || []
      };
    }
  });

  return statesData;
}

export const STATES_DATA = buildStatesData();

// Old hardcoded data (keeping as backup)
const OLD_STATES_DATA: Record<string, {
  name: string;
  abbr: string;
  districts: number;
  senators: { name: string; party: 'D' | 'R' }[];
}> = {
  'Alabama': { name: 'Alabama', abbr: 'AL', districts: 7, senators: [{ name: 'Tommy Tuberville', party: 'R' }, { name: 'Katie Britt', party: 'R' }] },
  'Alaska': { name: 'Alaska', abbr: 'AK', districts: 1, senators: [{ name: 'Lisa Murkowski', party: 'R' }, { name: 'Dan Sullivan', party: 'R' }] },
  'Arizona': { name: 'Arizona', abbr: 'AZ', districts: 9, senators: [{ name: 'Kyrsten Sinema', party: 'D' }, { name: 'Mark Kelly', party: 'D' }] },
  'Arkansas': { name: 'Arkansas', abbr: 'AR', districts: 4, senators: [{ name: 'John Boozman', party: 'R' }, { name: 'Tom Cotton', party: 'R' }] },
  'California': { name: 'California', abbr: 'CA', districts: 52, senators: [{ name: 'Alex Padilla', party: 'D' }, { name: 'Laphonza Butler', party: 'D' }] },
  'Colorado': { name: 'Colorado', abbr: 'CO', districts: 8, senators: [{ name: 'Michael Bennet', party: 'D' }, { name: 'John Hickenlooper', party: 'D' }] },
  'Connecticut': { name: 'Connecticut', abbr: 'CT', districts: 5, senators: [{ name: 'Richard Blumenthal', party: 'D' }, { name: 'Chris Murphy', party: 'D' }] },
  'Delaware': { name: 'Delaware', abbr: 'DE', districts: 1, senators: [{ name: 'Tom Carper', party: 'D' }, { name: 'Chris Coons', party: 'D' }] },
  'Florida': { name: 'Florida', abbr: 'FL', districts: 28, senators: [{ name: 'Marco Rubio', party: 'R' }, { name: 'Rick Scott', party: 'R' }] },
  'Georgia': { name: 'Georgia', abbr: 'GA', districts: 14, senators: [{ name: 'Jon Ossoff', party: 'D' }, { name: 'Raphael Warnock', party: 'D' }] },
  'Hawaii': { name: 'Hawaii', abbr: 'HI', districts: 2, senators: [{ name: 'Brian Schatz', party: 'D' }, { name: 'Mazie Hirono', party: 'D' }] },
  'Idaho': { name: 'Idaho', abbr: 'ID', districts: 2, senators: [{ name: 'Mike Crapo', party: 'R' }, { name: 'Jim Risch', party: 'R' }] },
  'Illinois': { name: 'Illinois', abbr: 'IL', districts: 17, senators: [{ name: 'Dick Durbin', party: 'D' }, { name: 'Tammy Duckworth', party: 'D' }] },
  'Indiana': { name: 'Indiana', abbr: 'IN', districts: 9, senators: [{ name: 'Todd Young', party: 'R' }, { name: 'Mike Braun', party: 'R' }] },
  'Iowa': { name: 'Iowa', abbr: 'IA', districts: 4, senators: [{ name: 'Chuck Grassley', party: 'R' }, { name: 'Joni Ernst', party: 'R' }] },
  'Kansas': { name: 'Kansas', abbr: 'KS', districts: 4, senators: [{ name: 'Jerry Moran', party: 'R' }, { name: 'Roger Marshall', party: 'R' }] },
  'Kentucky': { name: 'Kentucky', abbr: 'KY', districts: 6, senators: [{ name: 'Mitch McConnell', party: 'R' }, { name: 'Rand Paul', party: 'R' }] },
  'Louisiana': { name: 'Louisiana', abbr: 'LA', districts: 6, senators: [{ name: 'Bill Cassidy', party: 'R' }, { name: 'John Kennedy', party: 'R' }] },
  'Maine': { name: 'Maine', abbr: 'ME', districts: 2, senators: [{ name: 'Susan Collins', party: 'R' }, { name: 'Angus King', party: 'D' }] },
  'Maryland': { name: 'Maryland', abbr: 'MD', districts: 8, senators: [{ name: 'Ben Cardin', party: 'D' }, { name: 'Chris Van Hollen', party: 'D' }] },
  'Massachusetts': { name: 'Massachusetts', abbr: 'MA', districts: 9, senators: [{ name: 'Elizabeth Warren', party: 'D' }, { name: 'Ed Markey', party: 'D' }] },
  'Michigan': { name: 'Michigan', abbr: 'MI', districts: 13, senators: [{ name: 'Debbie Stabenow', party: 'D' }, { name: 'Gary Peters', party: 'D' }] },
  'Minnesota': { name: 'Minnesota', abbr: 'MN', districts: 8, senators: [{ name: 'Amy Klobuchar', party: 'D' }, { name: 'Tina Smith', party: 'D' }] },
  'Mississippi': { name: 'Mississippi', abbr: 'MS', districts: 4, senators: [{ name: 'Roger Wicker', party: 'R' }, { name: 'Cindy Hyde-Smith', party: 'R' }] },
  'Missouri': { name: 'Missouri', abbr: 'MO', districts: 8, senators: [{ name: 'Josh Hawley', party: 'R' }, { name: 'Eric Schmitt', party: 'R' }] },
  'Montana': { name: 'Montana', abbr: 'MT', districts: 2, senators: [{ name: 'Jon Tester', party: 'D' }, { name: 'Steve Daines', party: 'R' }] },
  'Nebraska': { name: 'Nebraska', abbr: 'NE', districts: 3, senators: [{ name: 'Deb Fischer', party: 'R' }, { name: 'Pete Ricketts', party: 'R' }] },
  'Nevada': { name: 'Nevada', abbr: 'NV', districts: 4, senators: [{ name: 'Catherine Cortez Masto', party: 'D' }, { name: 'Jacky Rosen', party: 'D' }] },
  'New Hampshire': { name: 'New Hampshire', abbr: 'NH', districts: 2, senators: [{ name: 'Jeanne Shaheen', party: 'D' }, { name: 'Maggie Hassan', party: 'D' }] },
  'New Jersey': { name: 'New Jersey', abbr: 'NJ', districts: 12, senators: [{ name: 'Bob Menendez', party: 'D' }, { name: 'Cory Booker', party: 'D' }] },
  'New Mexico': { name: 'New Mexico', abbr: 'NM', districts: 3, senators: [{ name: 'Martin Heinrich', party: 'D' }, { name: 'Ben Ray Luján', party: 'D' }] },
  'New York': { name: 'New York', abbr: 'NY', districts: 26, senators: [{ name: 'Chuck Schumer', party: 'D' }, { name: 'Kirsten Gillibrand', party: 'D' }] },
  'North Carolina': { name: 'North Carolina', abbr: 'NC', districts: 14, senators: [{ name: 'Thom Tillis', party: 'R' }, { name: 'Ted Budd', party: 'R' }] },
  'North Dakota': { name: 'North Dakota', abbr: 'ND', districts: 1, senators: [{ name: 'John Hoeven', party: 'R' }, { name: 'Kevin Cramer', party: 'R' }] },
  'Ohio': { name: 'Ohio', abbr: 'OH', districts: 15, senators: [{ name: 'Sherrod Brown', party: 'D' }, { name: 'J.D. Vance', party: 'R' }] },
  'Oklahoma': { name: 'Oklahoma', abbr: 'OK', districts: 5, senators: [{ name: 'James Lankford', party: 'R' }, { name: 'Markwayne Mullin', party: 'R' }] },
  'Oregon': { name: 'Oregon', abbr: 'OR', districts: 6, senators: [{ name: 'Ron Wyden', party: 'D' }, { name: 'Jeff Merkley', party: 'D' }] },
  'Pennsylvania': { name: 'Pennsylvania', abbr: 'PA', districts: 17, senators: [{ name: 'Bob Casey Jr.', party: 'D' }, { name: 'John Fetterman', party: 'D' }] },
  'Rhode Island': { name: 'Rhode Island', abbr: 'RI', districts: 2, senators: [{ name: 'Jack Reed', party: 'D' }, { name: 'Sheldon Whitehouse', party: 'D' }] },
  'South Carolina': { name: 'South Carolina', abbr: 'SC', districts: 7, senators: [{ name: 'Lindsey Graham', party: 'R' }, { name: 'Tim Scott', party: 'R' }] },
  'South Dakota': { name: 'South Dakota', abbr: 'SD', districts: 1, senators: [{ name: 'John Thune', party: 'R' }, { name: 'Mike Rounds', party: 'R' }] },
  'Tennessee': { name: 'Tennessee', abbr: 'TN', districts: 9, senators: [{ name: 'Marsha Blackburn', party: 'R' }, { name: 'Bill Hagerty', party: 'R' }] },
  'Texas': { name: 'Texas', abbr: 'TX', districts: 38, senators: [{ name: 'John Cornyn', party: 'R' }, { name: 'Ted Cruz', party: 'R' }] },
  'Utah': { name: 'Utah', abbr: 'UT', districts: 4, senators: [{ name: 'Mike Lee', party: 'R' }, { name: 'Mitt Romney', party: 'R' }] },
  'Vermont': { name: 'Vermont', abbr: 'VT', districts: 1, senators: [{ name: 'Bernie Sanders', party: 'D' }, { name: 'Peter Welch', party: 'D' }] },
  'Virginia': { name: 'Virginia', abbr: 'VA', districts: 11, senators: [{ name: 'Mark Warner', party: 'D' }, { name: 'Tim Kaine', party: 'D' }] },
  'Washington': { name: 'Washington', abbr: 'WA', districts: 10, senators: [{ name: 'Patty Murray', party: 'D' }, { name: 'Maria Cantwell', party: 'D' }] },
  'West Virginia': { name: 'West Virginia', abbr: 'WV', districts: 2, senators: [{ name: 'Joe Manchin', party: 'D' }, { name: 'Shelley Moore Capito', party: 'R' }] },
  'Wisconsin': { name: 'Wisconsin', abbr: 'WI', districts: 8, senators: [{ name: 'Ron Johnson', party: 'R' }, { name: 'Tammy Baldwin', party: 'D' }] },
  'Wyoming': { name: 'Wyoming', abbr: 'WY', districts: 1, senators: [{ name: 'John Barrasso', party: 'R' }, { name: 'Cynthia Lummis', party: 'R' }] }
};

// Get actual representative for a district
function getActualRepresentative(state: string, districtNumber: number): { name: string; party: 'D' | 'R' | 'I' } {
  const stateAbbr = Object.keys(STATE_NAMES).find(abbr => STATE_NAMES[abbr] === state);
  if (!stateAbbr) return { name: 'Unknown Representative', party: 'I' };

  const legislators = ACTUAL_LEGISLATORS[stateAbbr];
  if (!legislators) return { name: 'Unknown Representative', party: 'I' };

  const rep = legislators.representatives.find(r => r.district === districtNumber);
  if (!rep) {
    // For at-large districts (district = 0 or 1 for single-district states)
    const atLargeRep = legislators.representatives[0];
    if (atLargeRep) return { name: atLargeRep.name, party: atLargeRep.party };
    return { name: 'Unknown Representative', party: 'I' };
  }

  return { name: rep.name, party: rep.party };
}

export function getCongressionalConstituencies(state: string): CongressionalConstituency[] {
  const stateData = STATES_DATA[state];
  if (!stateData) return [];

  const constituencies: CongressionalConstituency[] = [];

  for (let i = 1; i <= stateData.districts; i++) {
    const rep = getActualRepresentative(state, i);
    const stateHash = state.charCodeAt(0) + state.charCodeAt(1);
    const districtHash = (stateHash * 10 + i) % 100;

    // Generate demographic indices based on district number
    const urbanIndex = (Math.sin(districtHash / 10) + 1) / 2;
    const seniorIndex = (Math.cos(districtHash / 12) + 1) / 2;
    const familyIndex = (Math.sin(districtHash / 15) + 1) / 2;

    // Generate population and income with variation
    const basePopulation = 760000;
    const populationVariation = Math.sin(districtHash / 8) * 50000;
    const population = Math.round(basePopulation + populationVariation);

    const baseIncome = 65000;
    const incomeVariation = Math.cos(districtHash / 6) * 20000;
    const medianIncome = Math.round(baseIncome + incomeVariation);

    constituencies.push({
      state,
      stateAbbr: stateData.abbr,
      districtNumber: i,
      displayName: stateData.districts === 1 ? `${stateData.abbr} At-Large` : `${stateData.abbr}-${i}`,
      representative: rep.name,
      party: rep.party,
      population,
      medianIncome,
      urbanIndex,
      seniorIndex,
      familyIndex
    });
  }

  return constituencies;
}

export function getAllStates(): string[] {
  return Object.keys(STATES_DATA).sort();
}

export function getStateInfo(state: string) {
  return STATES_DATA[state];
}

// Alias for backward compatibility
export const getCongressionalDistricts = getCongressionalConstituencies;
export type CongressionalDistrict = CongressionalConstituency;