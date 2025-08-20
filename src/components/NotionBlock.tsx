import { ReactNode } from 'react';

interface NotionBlockProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const NotionBlock = ({ children, className = '', hover = true }: NotionBlockProps) => {
  return (
    <div
      className={`rounded-lg p-6 transition-all duration-150 ${hover ? 'hover:bg-[hsl(var(--notion-hover))]' : ''} ${className}`}
    >
      {children}
    </div>
  );
};