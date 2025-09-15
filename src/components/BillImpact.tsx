import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Plot from 'react-plotly.js';
import {
  BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { colors } from '../styles/colors';
import { CongressionalDistrict } from '../data/congressionalDistricts';
import { FederalBill } from '../data/federalBills';
import { generateDistrictImpact, generateNationalImpact, ImpactData } from '../utils/districtVariations';
import DemoCursor from './DemoCursor';

interface BillImpactProps {
  district: CongressionalDistrict;
  bill: FederalBill;
  onBack: () => void;
  onRestart: () => void;
  isAutoDemo?: boolean;
}

const BillImpact: React.FC<BillImpactProps> = ({ district, bill, onBack, onRestart, isAutoDemo = false }) => {
  const [viewMode, setViewMode] = useState<'national' | 'district'>('district');
  const [nationalImpact, setNationalImpact] = useState<ImpactData | null>(null);
  const [districtImpact, setDistrictImpact] = useState<ImpactData | null>(null);
  const [demoStep, setDemoStep] = useState(0);

  useEffect(() => {
    const national = generateNationalImpact(bill.id);
    const districtData = generateDistrictImpact(district, national);
    setNationalImpact(national);
    setDistrictImpact(districtData);
  }, [district, bill]);

  // Auto-demo logic
  useEffect(() => {
    if (!isAutoDemo) return;

    const runDemo = async () => {
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Toggle to national view
      setDemoStep(1);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setViewMode('national');
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Toggle back to district view
      setDemoStep(2);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setViewMode('district');
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Click restart
      setDemoStep(3);
      await new Promise(resolve => setTimeout(resolve, 1500));
      onRestart();
    };

    runDemo();
  }, [isAutoDemo, onRestart]);

  const getCursorPosition = () => {
    switch (demoStep) {
      case 1:
        return { elementId: 'toggle-national', offset: { x: 40, y: 20 } };
      case 2:
        return { elementId: 'toggle-district', offset: { x: 40, y: 20 } };
      case 3:
        return { elementId: 'restart-btn', offset: { x: 80, y: 20 } };
      default:
        return null;
    }
  };

  const currentImpact = viewMode === 'national' ? nationalImpact : districtImpact;

  if (!currentImpact) return null;

  // Income distribution chart data
  const incomeDistributionData = {
    data: [{
      x: ['<$25k', '$25-50k', '$50-75k', '$75-100k', '$100-150k', '>$150k'],
      y: viewMode === 'national'
        ? [-850, -620, -450, -280, 150, 480]
        : [-920, -680, -490, -310, 120, 420],
      type: 'bar' as const,
      marker: {
        color: ['#4CAF50', '#4CAF50', '#4CAF50', '#4CAF50', '#EF5350', '#EF5350']
      }
    }],
    layout: {
      title: {
        text: 'Average Tax Change by Income'
      },
      xaxis: { title: 'Income Range' },
      yaxis: { title: 'Tax Change ($)' },
      paper_bgcolor: 'transparent',
      plot_bgcolor: 'transparent',
      font: { family: 'Roboto, sans-serif' }
    } as any
  };

  // Winners pie chart - show winners vs no impact/losers
  const winnersData = [
    { name: 'Better off', value: currentImpact.winners, color: colors.chart.positive },
    { name: 'Worse off or no change', value: 100 - currentImpact.winners, color: colors.chart.neutral },
  ];

  // Key metrics for bar chart (show different metrics based on view)
  const keyMetrics = viewMode === 'district' ? [
    { metric: 'Poverty Reduction', value: Math.abs(currentImpact.povertyReduction) / 1000, unit: 'k' },
    { metric: 'Beneficiaries', value: currentImpact.beneficiaries / 1000, unit: 'k' },
    { metric: 'Winners', value: currentImpact.winners, unit: '%' },
  ] : [
    { metric: 'Poverty Reduction', value: Math.abs(currentImpact.povertyReduction) / 1000000, unit: 'M' },
    { metric: 'Beneficiaries', value: currentImpact.beneficiaries / 1000000, unit: 'M' },
    { metric: 'Budget Impact', value: Math.abs(currentImpact.budgetImpact), unit: '$B' },
  ];

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
            ← Back to Bills
          </button>
          <button onClick={onRestart} id="restart-btn" style={styles.restartButton}>
            Start Over
          </button>
        </div>

        <div style={styles.billInfo}>
          <h1 style={styles.title}>{bill.shortTitle}</h1>
          <p style={styles.billNumber}>
            {bill.billNumber} • Sponsored by {bill.sponsor} ({bill.sponsorParty}-{bill.sponsorState})
          </p>
        </div>

        <div style={styles.toggleContainer}>
          <button
            id="toggle-district"
            onClick={() => setViewMode('district')}
            style={{
              ...styles.toggleButton,
              backgroundColor: viewMode === 'district' ? colors.primary : colors.background.paper,
              color: viewMode === 'district' ? colors.text.white : colors.text.primary,
            }}
          >
            {district.displayName} Impact
          </button>
          <button
            id="toggle-national"
            onClick={() => setViewMode('national')}
            style={{
              ...styles.toggleButton,
              backgroundColor: viewMode === 'national' ? colors.primary : colors.background.paper,
              color: viewMode === 'national' ? colors.text.white : colors.text.primary,
            }}
          >
            National Impact
          </button>
        </div>

        <div style={styles.metricsGrid}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={styles.metricCard}
          >
            <h3 style={styles.metricLabel}>Poverty Reduction</h3>
            <p style={styles.metricValue}>
              {Math.abs(currentImpact.povertyReduction).toLocaleString()}
            </p>
            <p style={styles.metricSubtext}>
              {currentImpact.povertyReduction < 0 ? 'Fewer in poverty' : 'More in poverty'}
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            style={styles.metricCard}
          >
            <h3 style={styles.metricLabel}>Average Tax Change</h3>
            <p style={{
              ...styles.metricValue,
              color: currentImpact.avgTaxChange < 0 ? colors.chart.positive : colors.chart.negative
            }}>
              ${Math.abs(currentImpact.avgTaxChange).toLocaleString()}
            </p>
            <p style={styles.metricSubtext}>
              {currentImpact.avgTaxChange < 0 ? 'Tax cut' : 'Tax increase'}
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            style={styles.metricCard}
          >
            <h3 style={styles.metricLabel}>Beneficiaries</h3>
            <p style={styles.metricValue}>
              {(currentImpact.beneficiaries / 1000000).toFixed(1)}M
            </p>
            <p style={styles.metricSubtext}>
              {viewMode === 'district' ? 'District residents' : 'Americans'}
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            style={styles.metricCard}
          >
            <h3 style={styles.metricLabel}>Winners</h3>
            <p style={styles.metricValue}>
              {currentImpact.winners}%
            </p>
            <p style={styles.metricSubtext}>Better off</p>
          </motion.div>
        </div>

        <div style={styles.chartsGrid}>
          <div style={styles.chartCard}>
            <h3 style={styles.chartTitle}>Income Distribution Impact</h3>
            <Plot
              data={incomeDistributionData.data}
              layout={incomeDistributionData.layout}
              config={{ displayModeBar: false }}
              style={{ width: '100%', height: '300px' }}
            />
          </div>

          <div style={styles.chartCard}>
            <h3 style={styles.chartTitle}>Impact Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={winnersData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => `${entry.name}: ${entry.value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {winnersData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div style={styles.chartCard}>
            <h3 style={styles.chartTitle}>Key Metrics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={keyMetrics}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="metric" />
                <YAxis />
                <Tooltip formatter={(value: any, name: any) => [`${value}${keyMetrics[0].unit}`, name]} />
                <Bar dataKey="value" fill={colors.primary} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div style={styles.summary}>
          <h3 style={styles.summaryTitle}>Analysis Summary</h3>
          <p style={styles.summaryText}>
            {viewMode === 'district'
              ? `In ${district.displayName}, this bill would affect approximately ${(currentImpact.beneficiaries / 1000).toFixed(0)}k residents. The average household would see a tax change of $${Math.abs(currentImpact.avgTaxChange).toLocaleString()} ${currentImpact.avgTaxChange < 0 ? '(reduction)' : '(increase)'}. About ${currentImpact.winners}% of constituents would be better off. An estimated ${Math.abs(currentImpact.povertyReduction).toLocaleString()} ${currentImpact.povertyReduction < 0 ? 'fewer' : 'more'} district residents would be in poverty.`
              : `Nationally, this bill would impact ${(currentImpact.beneficiaries / 1000000).toFixed(1)} million Americans. The federal budget impact would be $${Math.abs(currentImpact.budgetImpact).toFixed(1)} billion ${currentImpact.budgetImpact < 0 ? '(cost)' : '(revenue)'}. About ${currentImpact.winners}% of Americans would be better off. The bill would lift ${Math.abs(currentImpact.povertyReduction / 1000000).toFixed(1)} million ${currentImpact.povertyReduction < 0 ? 'out of' : 'into'} poverty.`
            }
          </p>
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
    paddingTop: '3rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '2rem',
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
  },
  restartButton: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    background: colors.secondary,
    border: 'none',
    borderRadius: '8px',
    color: colors.text.white,
    cursor: 'pointer',
    fontFamily: 'Roboto, sans-serif',
  },
  billInfo: {
    marginBottom: '2rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 700,
    color: colors.text.primary,
    marginBottom: '0.5rem',
    fontFamily: 'Roboto, sans-serif',
  },
  billNumber: {
    fontSize: '1rem',
    color: colors.text.secondary,
    fontFamily: 'Roboto, sans-serif',
  },
  toggleContainer: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem',
  },
  toggleButton: {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    border: `1px solid ${colors.border}`,
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: 'Roboto, sans-serif',
  },
  metricsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  metricCard: {
    background: colors.background.paper,
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: `0 2px 8px ${colors.shadow}`,
    textAlign: 'center',
  },
  metricLabel: {
    fontSize: '0.875rem',
    color: colors.text.secondary,
    marginBottom: '0.5rem',
    fontFamily: 'Roboto, sans-serif',
  },
  metricValue: {
    fontSize: '2rem',
    fontWeight: 700,
    color: colors.primary,
    marginBottom: '0.25rem',
    fontFamily: 'Roboto, sans-serif',
  },
  metricSubtext: {
    fontSize: '0.75rem',
    color: colors.text.secondary,
    fontFamily: 'Roboto, sans-serif',
  },
  chartsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  chartCard: {
    background: colors.background.paper,
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: `0 2px 8px ${colors.shadow}`,
  },
  chartTitle: {
    fontSize: '1.125rem',
    fontWeight: 600,
    color: colors.text.primary,
    marginBottom: '1rem',
    fontFamily: 'Roboto, sans-serif',
  },
  summary: {
    background: colors.background.paper,
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: `0 2px 8px ${colors.shadow}`,
    marginBottom: '2rem',
  },
  summaryTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: colors.text.primary,
    marginBottom: '1rem',
    fontFamily: 'Roboto, sans-serif',
  },
  summaryText: {
    fontSize: '1rem',
    lineHeight: 1.6,
    color: colors.text.secondary,
    fontFamily: 'Roboto, sans-serif',
  },
};

export default BillImpact;