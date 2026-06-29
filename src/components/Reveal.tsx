/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Lightweight scroll-reveal wrapper. Fades + rises its children into view once,
 * the first time they enter the viewport. `className` is forwarded so it can
 * replace an existing wrapper element without adding extra nesting.
 */

import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Seconds to delay the reveal — handy for staggering sibling blocks. */
  delay?: number;
  /** Render as a section instead of a div. */
  as?: 'div' | 'section';
  id?: string;
}

export default function Reveal({ children, className, delay = 0, as = 'div', id }: RevealProps) {
  const MotionTag = as === 'section' ? motion.section : motion.div;

  return (
    <MotionTag
      id={id}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}
