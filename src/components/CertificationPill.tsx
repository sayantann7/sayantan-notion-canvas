 

interface CertificationPillProps {
  name: string;
  provider: string;
}

export const CertificationPill = ({ name, provider }: CertificationPillProps) => {
  return (
    <div
      className="inline-flex items-center gap-2 bg-notion-blue text-notion-blue-text px-3 py-2 rounded-full text-sm font-medium cursor-default max-w-full transition-transform hover:scale-[1.02]"
    >
  <span className="truncate max-w-[60vw] sm:max-w-xs md:max-w-sm lg:max-w-md">{name}</span>
  <span className="text-notion-gray whitespace-nowrap">— {provider}</span>
  </div>
  );
};