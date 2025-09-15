import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { colors } from '../styles/colors';
import { getAllStates, getCongressionalDistricts, CongressionalDistrict, getStateInfo } from '../data/congressionalDistricts';
import DemoDropdown from './DemoDropdown';
import DemoCursor from './DemoCursor';

interface DistrictSetupProps {
  onDistrictSelect: (state: string, district: CongressionalDistrict) => void;
  isAutoDemo?: boolean;
}

const DistrictSetup: React.FC<DistrictSetupProps> = ({ onDistrictSelect, isAutoDemo = false }) => {
  const [selectedState, setSelectedState] = useState<string>('');
  const [districts, setDistricts] = useState<CongressionalDistrict[]>([]);
  const [selectedDistrict, setSelectedDistrict] = useState<CongressionalDistrict | null>(null);
  const [states] = useState(getAllStates());
  const [demoStep, setDemoStep] = useState(0);
  const [showStateDropdown, setShowStateDropdown] = useState(false);
  const [showDistrictDropdown, setShowDistrictDropdown] = useState(false);

  useEffect(() => {
    if (selectedState) {
      const districtList = getCongressionalDistricts(selectedState);
      setDistricts(districtList);
      setSelectedDistrict(null);
    }
  }, [selectedState]);

  // Auto-demo logic
  useEffect(() => {
    if (!isAutoDemo) return;

    const runDemo = async () => {
      // Wait for initial load
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Step 1: Show state dropdown
      setDemoStep(1);
      setShowStateDropdown(true);
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Step 2: Select California
      setDemoStep(2);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSelectedState('California');
      setShowStateDropdown(false);
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Step 3: Show district dropdown
      setDemoStep(3);
      setShowDistrictDropdown(true);
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Step 4: Select a district
      setDemoStep(4);
      await new Promise(resolve => setTimeout(resolve, 1000));
      const caDistricts = getCongressionalDistricts('California');
      const targetDistrict = caDistricts[11]; // CA-12
      setSelectedDistrict(targetDistrict);
      setShowDistrictDropdown(false);
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Step 5: Click View Bills
      setDemoStep(5);
      await new Promise(resolve => setTimeout(resolve, 1500));
      onDistrictSelect('California', targetDistrict);
    };

    runDemo();
  }, [isAutoDemo, onDistrictSelect]);

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value);
  };

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    // Check if it's a senator selection
    if (value.startsWith('sen-')) {
      const senatorIndex = parseInt(value.split('-')[1]);
      const senator = stateInfo?.senators[senatorIndex];
      if (senator && selectedState) {
        // Create a special "district" for the senator
        const senatorDistrict: CongressionalDistrict = {
          state: selectedState,
          stateAbbr: stateInfo.abbr,
          districtNumber: -1 - senatorIndex, // Use negative numbers for senators
          displayName: `${stateInfo.abbr} Senator`,
          representative: senator.name,
          party: senator.party,
          population: districts[0]?.population || 760000,
          medianIncome: districts[0]?.medianIncome || 65000,
          urbanIndex: 0.5,
          seniorIndex: 0.5,
          familyIndex: 0.5
        };
        setSelectedDistrict(senatorDistrict);
      }
    } else {
      // Regular district selection
      const district = districts.find(d => d.districtNumber === parseInt(value));
      setSelectedDistrict(district || null);
    }
  };

  const handleSubmit = () => {
    if (selectedState && selectedDistrict) {
      onDistrictSelect(selectedState, selectedDistrict);
    }
  };

  const getCursorPosition = () => {
    switch (demoStep) {
      case 1:
      case 2:
        return { elementId: 'state-select', offset: { x: 100, y: 15 } };
      case 3:
      case 4:
        return { elementId: 'district-select', offset: { x: 100, y: 15 } };
      case 5:
        return { elementId: 'view-bills-btn', offset: { x: 80, y: 20 } };
      default:
        return null;
    }
  };

  const stateInfo = selectedState ? getStateInfo(selectedState) : null;

  return (
    <div style={styles.container}>
      {isAutoDemo && <DemoCursor position={getCursorPosition()} />}

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={styles.content}
      >
        <div style={styles.header}>
          <h1 style={styles.title}>Congressional District Impact Analysis</h1>
          <p style={styles.subtitle}>
            Select your congressional district to see how federal legislation affects your community
          </p>
        </div>

        <div style={styles.formContainer}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>State</label>
            {isAutoDemo && showStateDropdown ? (
              <DemoDropdown
                options={states}
                selectedValue={selectedState}
                onComplete={() => setShowStateDropdown(false)}
              />
            ) : (
              <select
                id="state-select"
                value={selectedState}
                onChange={handleStateChange}
                style={styles.select}
              >
                <option value="">Select a state...</option>
                {states.map(state => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            )}
          </div>

          <AnimatePresence>
            {selectedState && districts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                style={styles.inputGroup}
              >
                <label style={styles.label}>Select Your Representative</label>
                {isAutoDemo && showDistrictDropdown ? (
                  <DemoDropdown
                    options={districts.map(d => d.displayName)}
                    selectedValue={selectedDistrict?.displayName || ''}
                    onComplete={() => setShowDistrictDropdown(false)}
                  />
                ) : (
                  <select
                    id="district-select"
                    value={selectedDistrict?.districtNumber || ''}
                    onChange={handleDistrictChange}
                    style={styles.select}
                  >
                    <option value="">Select a representative...</option>

                    {/* Senators */}
                    <optgroup label="U.S. Senators">
                      {stateInfo?.senators.map((senator, idx) => (
                        <option key={`sen-${idx}`} value={`sen-${idx}`}>
                          Sen. {senator.name} ({senator.party})
                        </option>
                      ))}
                    </optgroup>

                    {/* House Representatives */}
                    <optgroup label="U.S. House Representatives">
                      {districts.map(district => (
                        <option key={district.districtNumber} value={district.districtNumber}>
                          {district.displayName} - Rep. {district.representative} ({district.party})
                        </option>
                      ))}
                    </optgroup>
                  </select>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {selectedDistrict && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                style={styles.districtInfo}
              >
                <h3 style={styles.districtTitle}>District Information</h3>
                <div style={styles.infoGrid}>
                  <div style={styles.infoItem}>
                    <span style={styles.infoLabel}>
                      {selectedDistrict.districtNumber < 0 ? 'Senator:' : 'Representative:'}
                    </span>
                    <span style={{
                      ...styles.infoValue,
                      color: selectedDistrict.party === 'D' ? colors.party.democrat :
                             selectedDistrict.party === 'R' ? colors.party.republican :
                             colors.party.independent
                    }}>
                      {selectedDistrict.representative} ({selectedDistrict.party})
                    </span>
                  </div>
                  <div style={styles.infoItem}>
                    <span style={styles.infoLabel}>Population:</span>
                    <span style={styles.infoValue}>
                      {selectedDistrict.population.toLocaleString()}
                    </span>
                  </div>
                  <div style={styles.infoItem}>
                    <span style={styles.infoLabel}>Median Income:</span>
                    <span style={styles.infoValue}>
                      ${selectedDistrict.medianIncome.toLocaleString()}
                    </span>
                  </div>
                  {stateInfo && selectedDistrict.districtNumber >= 0 && (
                    <div style={styles.infoItem}>
                      <span style={styles.infoLabel}>Senators:</span>
                      <span style={styles.infoValue}>
                        {stateInfo.senators.map((sen, idx) => (
                          <span key={idx}>
                            {sen.name} (
                            <span style={{ color: sen.party === 'D' ? colors.party.democrat :
                                                 sen.party === 'R' ? colors.party.republican :
                                                 colors.party.independent }}>
                              {sen.party}
                            </span>
                            ){idx === 0 ? ', ' : ''}
                          </span>
                        ))}
                      </span>
                    </div>
                  )}
                  {stateInfo && selectedDistrict.districtNumber < 0 && (
                    <div style={styles.infoItem}>
                      <span style={styles.infoLabel}>Other Senator:</span>
                      <span style={styles.infoValue}>
                        {stateInfo.senators.filter((_, idx) => idx !== Math.abs(selectedDistrict.districtNumber) - 1).map((sen, idx) => (
                          <span key={idx}>
                            {sen.name} (
                            <span style={{ color: sen.party === 'D' ? colors.party.democrat :
                                                 sen.party === 'R' ? colors.party.republican :
                                                 colors.party.independent }}>
                              {sen.party}
                            </span>
                            )
                          </span>
                        ))}
                      </span>
                    </div>
                  )}
                </div>

                <button
                  id="view-bills-btn"
                  onClick={handleSubmit}
                  style={styles.submitButton}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#1E4A78';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = colors.primary;
                  }}
                >
                  View Active Federal Legislation →
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: '100vh',
    background: `linear-gradient(135deg, ${colors.background.light} 0%, ${colors.background.default} 100%)`,
    padding: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    maxWidth: '800px',
    width: '100%',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: colors.primary,
    marginBottom: '1rem',
    fontFamily: 'Roboto, sans-serif',
  },
  subtitle: {
    fontSize: '1.125rem',
    color: colors.text.secondary,
    fontFamily: 'Roboto, sans-serif',
  },
  formContainer: {
    background: colors.background.paper,
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: `0 4px 20px ${colors.shadow}`,
  },
  inputGroup: {
    marginBottom: '1.5rem',
  },
  label: {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: 500,
    color: colors.text.secondary,
    marginBottom: '0.5rem',
    fontFamily: 'Roboto, sans-serif',
  },
  select: {
    width: '100%',
    padding: '0.75rem',
    fontSize: '1rem',
    border: `1px solid ${colors.border}`,
    borderRadius: '8px',
    background: colors.background.paper,
    color: colors.text.primary,
    fontFamily: 'Roboto, sans-serif',
    cursor: 'pointer',
  },
  districtInfo: {
    marginTop: '2rem',
    padding: '1.5rem',
    background: colors.background.light,
    borderRadius: '8px',
    border: `1px solid ${colors.border}`,
  },
  districtTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: colors.text.primary,
    marginBottom: '1rem',
    fontFamily: 'Roboto, sans-serif',
  },
  infoGrid: {
    display: 'grid',
    gap: '0.75rem',
    marginBottom: '1.5rem',
  },
  infoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem 0',
    borderBottom: `1px solid ${colors.border}`,
  },
  infoLabel: {
    fontWeight: 500,
    color: colors.text.secondary,
    fontFamily: 'Roboto, sans-serif',
  },
  infoValue: {
    fontWeight: 400,
    color: colors.text.primary,
    fontFamily: 'Roboto, sans-serif',
  },
  submitButton: {
    width: '100%',
    padding: '1rem',
    fontSize: '1.125rem',
    fontWeight: 600,
    color: colors.text.white,
    backgroundColor: colors.primary,
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    fontFamily: 'Roboto, sans-serif',
  },
};

export default DistrictSetup;