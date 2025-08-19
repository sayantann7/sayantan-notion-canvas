import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface NotionBlockProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const NotionBlock = ({ children, className = '', hover = true }: NotionBlockProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      whileHover={hover ? { backgroundColor: 'hsl(var(--notion-hover))' } : {}}
      className={`rounded-lg p-6 transition-all duration-150 ${className}`}
    >
      {children}
    </motion.div>
  );
};