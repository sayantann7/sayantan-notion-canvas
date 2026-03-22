 

interface TimelineItemProps {
  title: string;
  company?: string;
  period: string;
  description?: string;
}

export const TimelineItem = ({ title, company, period, description }: TimelineItemProps) => {
  return (
    <div
      className="flex gap-3 p-4 rounded-lg border border-border/50 bg-card/30 transition-all duration-150 hover:border-border hover:bg-[hsl(var(--notion-hover))] h-full"
    >
      <div className="flex-shrink-0 w-1.5 h-1.5 bg-foreground rounded-full mt-2"></div>
      <div className="flex-1 flex flex-col">
        <h3 className="font-medium text-foreground">
          {title} {company && <span className="text-notion-gray text-sm md:ml-1 block md:inline">at {company}</span>}
        </h3>
        <span className="text-sm text-notion-gray mt-1">{period}</span>
        {description && (
          <p className="text-sm text-notion-gray mt-2 leading-relaxed">{description}</p>
        )}
      </div>
  </div>
  );
};