import { motion } from 'framer-motion';
import { ExternalLink, Github, Video } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  github?: string;
  video?: string;
  type: 'github' | 'article' | 'video';
}

export const ProjectCard = ({ title, description, link, github, video, type }: ProjectCardProps) => {
  const getIcon = () => {
    switch (type) {
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'video':
        return <Video className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  const getLink = () => {
    if (type === 'github' && github) return github;
    if (type === 'video' && video) return video;
    return link;
  };

  return (
    <motion.div
      whileHover={{ backgroundColor: 'hsl(var(--notion-hover))' }}
      className="group rounded-lg p-4 transition-all duration-150 cursor-pointer border border-transparent hover:border-border"
      onClick={() => getLink() && window.open(getLink(), '_blank')}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-medium text-foreground group-hover:text-notion-blue-text transition-colors">
            {title}
          </h3>
          <p className="text-sm text-notion-gray mt-1 leading-relaxed">
            {description}
          </p>
        </div>
        <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
          {getIcon()}
        </div>
      </div>
    </motion.div>
  );
};