import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DemoCursorProps {
  position: {
    elementId: string;
    offset?: { x: number; y: number };
  } | null;
}

const DemoCursor: React.FC<DemoCursorProps> = ({ position }) => {
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!position) {
      setCoords(null);
      return;
    }

    const updatePosition = () => {
      const element = document.getElementById(position.elementId);
      if (element) {
        const rect = element.getBoundingClientRect();
        const x = rect.left + (position.offset?.x || rect.width / 2);
        const y = rect.top + (position.offset?.y || rect.height / 2);
        setCoords({ x, y });
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition);
    };
  }, [position]);

  return (
    <AnimatePresence>
      {coords && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            ...styles.cursor,
            left: coords.x,
            top: coords.y,
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 3L19 12L12 13L8 21L5 3Z"
              fill="#FFA726"
              stroke="#FF6F00"
              strokeWidth="2"
            />
          </svg>
          <motion.div
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            style={styles.clickIndicator}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const styles: Record<string, React.CSSProperties> = {
  cursor: {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 10000,
    transform: 'translate(-12px, -12px)',
  },
  clickIndicator: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    border: '2px solid #FFA726',
    opacity: 0.5,
  },
};

export default DemoCursor;