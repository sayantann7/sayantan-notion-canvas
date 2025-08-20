import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number; // ignored now; kept for API compatibility
}

export const AnimatedSection = ({ children, className = '' }: AnimatedSectionProps) => {
  return <div className={className}>{children}</div>;
};