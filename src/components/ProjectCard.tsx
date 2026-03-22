import { ExternalLink, Github, Video, Linkedin } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  github?: string;
  video?: string;
  demo?: string; // Add demo property for LinkedIn post
  type: 'github' | 'article' | 'video';
  skills?: string[];
}

export const ProjectCard = ({ title, description, link, github, video, demo, type, skills = [] }: ProjectCardProps) => {
  const isBlog = type === 'article' || type === 'video';
  const blogLink = video || link;

  if (isBlog && blogLink) {
    return (
      <a
        href={blogLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block group rounded-lg p-4 transition-all duration-150 border border-transparent hover:border-border hover:bg-[hsl(var(--notion-hover))]"
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-medium text-foreground transition-colors group-hover:text-notion-blue-text">
              {title}
            </h3>
            <p className="text-sm text-notion-gray mt-1 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-1.5 text-xs font-medium text-notion-gray group-hover:text-foreground transition-colors mt-auto pt-2">
          {type === 'video' ? <Video className="w-3.5 h-3.5" /> : <ExternalLink className="w-3.5 h-3.5" />}
          {type === 'video' ? 'Watch Video' : 'View Article'}
        </div>
      </a>
    );
  }

  return (
    <div
      className="group rounded-lg p-4 transition-all duration-150 border border-transparent hover:border-border hover:bg-[hsl(var(--notion-hover))]"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-medium text-foreground transition-colors">
            {title}
          </h3>
          <p className="text-sm text-notion-gray mt-1 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      {skills.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {skills.map((s) => (
            <span key={s} className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-medium bg-white/5 text-foreground/80 border border-white/10">
              {s}
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-3 mt-auto pt-2">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-notion-gray hover:text-foreground transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            GitHub Repo
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-notion-gray hover:text-foreground transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
            Demo Video
          </a>
        )}
        {video && !demo && (
          <a
            href={video}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-notion-gray hover:text-foreground transition-colors"
          >
            <Video className="w-3.5 h-3.5" />
            Watch Video
          </a>
        )}
        {link && !github && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-notion-gray hover:text-foreground transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            View Article
          </a>
        )}
      </div>
    </div>
  );
};