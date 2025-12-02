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

    if (legislatorData && legislatorData.representatives.length > 0 && legislatorData.senators.length === 2) {
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