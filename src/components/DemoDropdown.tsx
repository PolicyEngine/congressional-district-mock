import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { colors } from '../styles/colors';

interface DemoDropdownProps {
  options: string[];
  selectedValue: string;
  onComplete: () => void;
}

const DemoDropdown: React.FC<DemoDropdownProps> = ({ options, selectedValue, onComplete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayOptions, setDisplayOptions] = useState<string[]>([]);

  useEffect(() => {
    // Animate opening the dropdown
    setTimeout(() => setIsOpen(true), 500);

    // Show options one by one
    const showOptions = async () => {
      for (let i = 0; i <= Math.min(5, options.length); i++) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setDisplayOptions(options.slice(0, i));
      }
      // Close after showing options
      setTimeout(() => {
        setIsOpen(false);
        onComplete();
      }, 1000);
    };

    if (isOpen) {
      showOptions();
    }
  }, [isOpen, options, onComplete]);

  return (
    <div style={styles.container}>
      <div style={styles.select}>
        {selectedValue || 'Select...'}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={styles.dropdown}
          >
            {displayOptions.map((option, index) => (
              <motion.div
                key={option}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                style={styles.option}
              >
                {option}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    position: 'relative',
    width: '100%',
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
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    marginTop: '4px',
    background: colors.background.paper,
    border: `1px solid ${colors.border}`,
    borderRadius: '8px',
    boxShadow: `0 4px 12px ${colors.shadow}`,
    maxHeight: '200px',
    overflowY: 'auto',
    zIndex: 100,
  },
  option: {
    padding: '0.75rem',
    borderBottom: `1px solid ${colors.border}`,
    fontSize: '0.875rem',
    color: colors.text.primary,
    fontFamily: 'Roboto, sans-serif',
  },
};

export default DemoDropdown;