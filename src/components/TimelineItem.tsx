import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  company?: string;
  period: string;
  description?: string;
}

export const TimelineItem = ({ title, company, period, description }: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      whileHover={{ backgroundColor: 'hsl(var(--notion-hover))' }}
      className="flex gap-4 p-4 rounded-lg transition-all duration-150"
    >
      <div className="flex-shrink-0 w-2 h-2 bg-foreground rounded-full mt-2"></div>
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <h3 className="font-medium text-foreground">
            {title} {company && <span className="text-notion-gray">at {company}</span>}
          </h3>
          <span className="text-sm text-notion-gray">{period}</span>
        </div>
        {description && (
          <p className="text-sm text-notion-gray mt-1 leading-relaxed">{description}</p>
        )}
      </div>
    </motion.div>
  );
};