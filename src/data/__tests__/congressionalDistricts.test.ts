import { getCongressionalDistricts, getAllStates, getStateInfo } from '../congressionalDistricts';

describe('Congressional Districts Data', () => {
  describe('getAllStates', () => {
    it('should return all 50 states', () => {
      const states = getAllStates();
      expect(states).toContain('California');
      expect(states).toContain('Texas');
      expect(states).toContain('New York');
      expect(states).toContain('Florida');
      expect(states.length).toBeGreaterThanOrEqual(50);
    });

    it('should return states in alphabetical order', () => {
      const states = getAllStates();
      const sortedStates = [...states].sort();
      expect(states).toEqual(sortedStates);
    });
  });

  describe('getStateInfo', () => {
    it('should return correct info for California', () => {
      const info = getStateInfo('California');
      expect(info).toBeDefined();
      expect(info?.abbr).toBe('CA');
      expect(info?.districts).toBe(52); // California has 52 House districts
      expect(info?.senators).toHaveLength(2);
    });

    it('should return correct info for Wyoming', () => {
      const info = getStateInfo('Wyoming');
      expect(info).toBeDefined();
      expect(info?.abbr).toBe('WY');
      expect(info?.districts).toBe(1); // Wyoming has 1 at-large district
      expect(info?.senators).toHaveLength(2);
    });

    it('should return undefined for invalid state', () => {
      const info = getStateInfo('InvalidState');
      expect(info).toBeUndefined();
    });
  });

  describe('getCongressionalDistricts', () => {
    it('should return correct number of districts for California', () => {
      const districts = getCongressionalDistricts('California');
      expect(districts).toHaveLength(52);
    });

    it('should return 1 district for at-large states', () => {
      const wyomingDistricts = getCongressionalDistricts('Wyoming');
      expect(wyomingDistricts).toHaveLength(1);
      expect(wyomingDistricts[0].displayName).toContain('At-Large');

      const alaskaDistricts = getCongressionalDistricts('Alaska');
      expect(alaskaDistricts).toHaveLength(1);
      expect(alaskaDistricts[0].displayName).toContain('At-Large');
    });

    it('should have actual representative names from CSV data', () => {
      const districts = getCongressionalDistricts('California');
      const firstDistrict = districts[0];
      expect(firstDistrict.representative).toBeTruthy();
      expect(firstDistrict.representative).not.toBe('Unknown Representative');
      // Names should look like real names (contain space)
      expect(firstDistrict.representative).toContain(' ');
    });

    it('should have valid party affiliations', () => {
      const districts = getCongressionalDistricts('California');
      districts.forEach(district => {
        expect(['D', 'R', 'I']).toContain(district.party);
      });
    });

    it('should have reasonable population values', () => {
      const districts = getCongressionalDistricts('Texas');
      districts.forEach(district => {
        expect(district.population).toBeGreaterThan(500000);
        expect(district.population).toBeLessThan(1000000);
      });
    });

    it('should have reasonable median income values', () => {
      const districts = getCongressionalDistricts('New York');
      districts.forEach(district => {
        expect(district.medianIncome).toBeGreaterThan(30000);
        expect(district.medianIncome).toBeLessThan(150000);
      });
    });

    it('should have indices between 0 and 1', () => {
      const districts = getCongressionalDistricts('Florida');
      districts.forEach(district => {
        expect(district.urbanIndex).toBeGreaterThanOrEqual(0);
        expect(district.urbanIndex).toBeLessThanOrEqual(1);
        expect(district.seniorIndex).toBeGreaterThanOrEqual(0);
        expect(district.seniorIndex).toBeLessThanOrEqual(1);
        expect(district.familyIndex).toBeGreaterThanOrEqual(0);
        expect(district.familyIndex).toBeLessThanOrEqual(1);
      });
    });

    it('should handle empty state correctly', () => {
      const districts = getCongressionalDistricts('');
      expect(districts).toEqual([]);
    });
  });

  describe('Senator data', () => {
    it('should have 2 senators for each state', () => {
      const states = getAllStates();
      states.forEach(state => {
        const info = getStateInfo(state);
        expect(info?.senators).toHaveLength(2);
      });
    });

    it('should have actual senator names', () => {
      const caInfo = getStateInfo('California');
      expect(caInfo?.senators[0].name).toBeTruthy();
      expect(caInfo?.senators[0].name).toContain(' ');
      expect(caInfo?.senators[1].name).toBeTruthy();
      expect(caInfo?.senators[1].name).toContain(' ');
    });

    it('should have valid party affiliations for senators', () => {
      const states = getAllStates();
      states.forEach(state => {
        const info = getStateInfo(state);
        info?.senators.forEach(senator => {
          expect(['D', 'R', 'I']).toContain(senator.party);
        });
      });
    });
  });
});