 

interface TimelineItemProps {
  title: string;
  company?: string;
  period: string;
  description?: string;
}

export const TimelineItem = ({ title, company, period, description }: TimelineItemProps) => {
  return (
    <div
      className="flex gap-4 p-4 rounded-lg transition-all duration-150 hover:bg-[hsl(var(--notion-hover))]"
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
  </div>
  );
};