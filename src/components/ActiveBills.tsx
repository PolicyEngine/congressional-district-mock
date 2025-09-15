import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { colors } from '../styles/colors';
import { CongressionalDistrict } from '../data/congressionalDistricts';
import { FederalBill, generateFederalBills } from '../data/federalBills';
import DemoCursor from './DemoCursor';

interface ActiveBillsProps {
  district: CongressionalDistrict;
  onBillSelect: (bill: FederalBill) => void;
  onBack: () => void;
  isAutoDemo?: boolean;
}

const ActiveBills: React.FC<ActiveBillsProps> = ({ district, onBillSelect, onBack, isAutoDemo = false }) => {
  const [bills, setBills] = useState<FederalBill[]>([]);
  const [demoStep, setDemoStep] = useState(0);

  useEffect(() => {
    const federalBills = generateFederalBills(district.state, district.districtNumber);
    setBills(federalBills);
  }, [district]);

  // Auto-demo logic
  useEffect(() => {
    if (!isAutoDemo || bills.length === 0) return;

    const runDemo = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Hover over first bill
      setDemoStep(1);
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Hover over second bill
      setDemoStep(2);
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Select the second bill
      setDemoStep(3);
      await new Promise(resolve => setTimeout(resolve, 1000));
      onBillSelect(bills[1]);
    };

    runDemo();
  }, [isAutoDemo, bills, onBillSelect]);

  const getCursorPosition = () => {
    switch (demoStep) {
      case 1:
        return { elementId: 'bill-0', offset: { x: 200, y: 40 } };
      case 2:
      case 3:
        return { elementId: 'bill-1', offset: { x: 200, y: 40 } };
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    if (status.includes('Passed')) return colors.chart.positive;
    if (status.includes('Committee')) return colors.chart.primary;
    if (status.includes('Floor')) return colors.chart.tertiary;
    return colors.text.secondary;
  };

  const getCategoryColor = (category: string) => {
    const categoryColors: Record<string, string> = {
      'Tax Policy': colors.chart.primary,
      'Healthcare': colors.chart.positive,
      'Social Welfare': colors.chart.secondary,
      'Infrastructure': colors.chart.tertiary,
      'Environment': colors.success,
      'Education': colors.chart.quaternary,
      'Immigration': colors.warning,
    };
    return categoryColors[category] || colors.text.secondary;
  };

  return (
    <div style={styles.container}>
      {isAutoDemo && <DemoCursor position={getCursorPosition()} />}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={styles.content}
      >
        <div style={styles.header}>
          <button onClick={onBack} style={styles.backButton}>
            ← Back
          </button>
          <div>
            <h1 style={styles.title}>Active Federal Legislation</h1>
            <p style={styles.subtitle}>
              {district.displayName} • Rep. {district.representative} ({district.party})
            </p>
          </div>
        </div>

        <div style={styles.billsGrid}>
          <AnimatePresence>
            {bills.map((bill, index) => (
              <motion.div
                key={bill.id}
                id={`bill-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                style={styles.billCard}
                onClick={() => onBillSelect(bill)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = `0 8px 24px ${colors.shadow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 2px 8px ${colors.shadow}`;
                }}
              >
                <div style={styles.billHeader}>
                  <span style={styles.billNumber}>{bill.billNumber}</span>
                  <span style={{
                    ...styles.status,
                    color: getStatusColor(bill.status)
                  }}>
                    {bill.status}
                  </span>
                </div>

                <h3 style={styles.billTitle}>{bill.shortTitle}</h3>

                <p style={styles.billSummary}>{bill.summary}</p>

                <div style={styles.billMeta}>
                  <div style={styles.sponsor}>
                    <span style={styles.sponsorLabel}>Sponsor:</span>
                    <span style={{
                      ...styles.sponsorName,
                      color: bill.sponsorParty === 'D' ? colors.party.democrat : colors.party.republican
                    }}>
                      {bill.sponsor} ({bill.sponsorParty}-{bill.sponsorState})
                    </span>
                  </div>
                  <div style={styles.cosponsors}>
                    {bill.cosponsors} cosponsors
                  </div>
                </div>

                <div style={styles.categories}>
                  {bill.categories.slice(0, 3).map(category => (
                    <span
                      key={category}
                      style={{
                        ...styles.category,
                        backgroundColor: getCategoryColor(category) + '20',
                        color: getCategoryColor(category)
                      }}
                    >
                      {category}
                    </span>
                  ))}
                </div>

                <div style={styles.billFooter}>
                  <span style={styles.committee}>{bill.committee}</span>
                  <span style={styles.viewDetails}>View Impact →</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: '100vh',
    background: colors.background.default,
    padding: '2rem',
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    marginBottom: '2rem',
    paddingTop: '3rem',
  },
  backButton: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    background: colors.background.paper,
    border: `1px solid ${colors.border}`,
    borderRadius: '8px',
    color: colors.text.primary,
    cursor: 'pointer',
    fontFamily: 'Roboto, sans-serif',
    transition: 'all 0.3s ease',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 700,
    color: colors.text.primary,
    marginBottom: '0.5rem',
    fontFamily: 'Roboto, sans-serif',
  },
  subtitle: {
    fontSize: '1rem',
    color: colors.text.secondary,
    fontFamily: 'Roboto, sans-serif',
  },
  billsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '1.5rem',
  },
  billCard: {
    background: colors.background.paper,
    borderRadius: '12px',
    padding: '1.5rem',
    boxShadow: `0 2px 8px ${colors.shadow}`,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: `1px solid ${colors.border}`,
  },
  billHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  billNumber: {
    fontSize: '0.875rem',
    fontWeight: 600,
    color: colors.primary,
    fontFamily: 'Roboto, sans-serif',
  },
  status: {
    fontSize: '0.75rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    fontFamily: 'Roboto, sans-serif',
  },
  billTitle: {
    fontSize: '1.125rem',
    fontWeight: 600,
    color: colors.text.primary,
    marginBottom: '0.75rem',
    fontFamily: 'Roboto, sans-serif',
  },
  billSummary: {
    fontSize: '0.875rem',
    color: colors.text.secondary,
    lineHeight: 1.5,
    marginBottom: '1rem',
    fontFamily: 'Roboto, sans-serif',
  },
  billMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
    paddingBottom: '1rem',
    borderBottom: `1px solid ${colors.border}`,
  },
  sponsor: {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
  },
  sponsorLabel: {
    fontSize: '0.75rem',
    color: colors.text.secondary,
    fontFamily: 'Roboto, sans-serif',
  },
  sponsorName: {
    fontSize: '0.875rem',
    fontWeight: 500,
    fontFamily: 'Roboto, sans-serif',
  },
  cosponsors: {
    fontSize: '0.75rem',
    color: colors.text.secondary,
    fontFamily: 'Roboto, sans-serif',
  },
  categories: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
    marginBottom: '1rem',
  },
  category: {
    padding: '0.25rem 0.5rem',
    borderRadius: '4px',
    fontSize: '0.75rem',
    fontWeight: 500,
    fontFamily: 'Roboto, sans-serif',
  },
  billFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  committee: {
    fontSize: '0.75rem',
    color: colors.text.secondary,
    fontFamily: 'Roboto, sans-serif',
  },
  viewDetails: {
    fontSize: '0.875rem',
    color: colors.primary,
    fontWeight: 600,
    fontFamily: 'Roboto, sans-serif',
  },
};

export default ActiveBills;