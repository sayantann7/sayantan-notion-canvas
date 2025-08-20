import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number; // ignored now; kept for API compatibility
}

export const AnimatedSection = ({ children, id, className = '' }: AnimatedSectionProps) => {
  return <div id={id} className={className}>{children}</div>;
};