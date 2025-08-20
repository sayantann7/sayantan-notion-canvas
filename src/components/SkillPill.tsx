interface SkillPillProps {
  name: string;
}

export const SkillPill = ({ name }: SkillPillProps) => {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 text-foreground/90 border border-white/10">
      {name}
    </span>
  );
};
