import { motion } from 'framer-motion';

interface CertificationPillProps {
  name: string;
  provider: string;
}

export const CertificationPill = ({ name, provider }: CertificationPillProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="inline-flex items-center gap-2 bg-notion-blue text-notion-blue-text px-3 py-2 rounded-full text-sm font-medium cursor-default"
    >
      <span>{name}</span>
      <span className="text-notion-gray">— {provider}</span>
    </motion.div>
  );
};