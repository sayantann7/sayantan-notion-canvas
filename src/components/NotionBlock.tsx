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
      whileHover={hover ? { backgroundColor: 'hsl(var(--notion-hover))' } : {}}
      transition={{ duration: 0.15 }}
      className={`rounded-lg p-6 transition-all duration-150 ${className}`}
    >
      {children}
    </motion.div>
  );
};