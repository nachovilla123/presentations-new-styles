import { motion } from 'motion/react';

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

interface DigitColumnProps {
  digit: number;
  delay: number;
}

function DigitColumn({ digit, delay }: DigitColumnProps) {
  return (
    <span style={{ display: 'inline-block', width: '0.64em', height: '1em', overflow: 'hidden', lineHeight: 1, textAlign: 'center' }}>
      <motion.span
        style={{ display: 'flex', flexDirection: 'column' }}
        initial={{ y: '0em' }}
        animate={{ y: `${-digit}em` }}
        transition={{ type: 'spring', stiffness: 38, damping: 15, delay }}
      >
        {DIGITS.map((value) => (
          <span key={value} style={{ display: 'block', height: '1em', lineHeight: 1, textAlign: 'center' }}>
            {value}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

interface OdometerProps {
  /** e.g. "12,840" or "98%": digits roll, any other character stays static. */
  value: string;
  delay?: number;
}

/** Mechanical counter: each digit is a vertical strip that springs to its number. */
export function Odometer({ value, delay = 0 }: OdometerProps) {
  return (
    <span style={{ display: 'inline-flex', lineHeight: 1 }} aria-label={value}>
      {value.split('').map((char, index) =>
        /\d/.test(char) ? (
          <DigitColumn key={index} digit={Number(char)} delay={delay + index * 0.12} />
        ) : (
          <span key={index} style={{ display: 'inline-block', height: '1em', lineHeight: 1 }}>
            {char}
          </span>
        ),
      )}
    </span>
  );
}
