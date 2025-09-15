import React from 'react';
import { colors } from '../styles/colors';

const DemoModeBanner: React.FC = () => {
  return (
    <>
      <div style={styles.banner}>
        <span style={styles.badge}>DEMO MODE</span>
        <span style={styles.text}>
          This is a demonstration using simulated data. Not connected to live PolicyEngine API.
        </span>
      </div>
      <div style={styles.watermark}>DEMO DATA</div>
    </>
  );
};

const styles: Record<string, React.CSSProperties> = {
  banner: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.warning,
    color: colors.text.primary,
    padding: '0.5rem 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    zIndex: 1000,
    boxShadow: `0 2px 8px ${colors.shadow}`,
  },
  badge: {
    backgroundColor: colors.text.primary,
    color: colors.warning,
    padding: '0.25rem 0.5rem',
    borderRadius: '4px',
    fontWeight: 700,
    fontSize: '0.75rem',
    fontFamily: 'Roboto, sans-serif',
  },
  text: {
    fontSize: '0.875rem',
    fontFamily: 'Roboto, sans-serif',
  },
  watermark: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) rotate(-45deg)',
    fontSize: '8rem',
    fontWeight: 700,
    color: colors.border,
    opacity: 0.1,
    pointerEvents: 'none',
    zIndex: 0,
    fontFamily: 'Roboto, sans-serif',
  },
};

export default DemoModeBanner;