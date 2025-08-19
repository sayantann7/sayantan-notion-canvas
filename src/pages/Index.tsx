import { motion } from 'framer-motion';
import { Github, Linkedin, Youtube, Mail, ExternalLink } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { NotionBlock } from '@/components/NotionBlock';
import { ProjectCard } from '@/components/ProjectCard';
import { TimelineItem } from '@/components/TimelineItem';
import { CertificationPill } from '@/components/CertificationPill';

const Index = () => {
  const projects = [
    {
      title: "AI Document Chat App (LLM + RAG Prototype)",
      description: "Built an intelligent document chat system using Large Language Models and Retrieval-Augmented Generation to enable natural language queries over document collections.",
      type: "github" as const,
      github: "https://github.com"
    },
    {
      title: "Prepr – AI Interview Platform",
      description: "Developed an AI-powered interview platform that conducts realistic technical interviews and provides detailed feedback to help candidates improve their skills.",
      type: "github" as const,
      github: "https://github.com"
    },
    {
      title: "Tensor Protocol Newsletter",
      description: "Created a technical newsletter covering the latest developments in AI/ML, distributed to thousands of subscribers interested in cutting-edge research.",
      type: "article" as const,
      link: "https://example.com"
    },
    {
      title: "Student Resources Hub",
      description: "Built a comprehensive platform aggregating academic resources, study materials, and tools to help students succeed in their coursework.",
      type: "github" as const,
      github: "https://github.com"
    },
    {
      title: "Pacman RL Agent",
      description: "Implemented a reinforcement learning agent that masters the classic Pacman game using Q-learning and deep neural networks.",
      type: "github" as const,
      github: "https://github.com"
    },
    {
      title: "Lunar Lander RL Agent",
      description: "Trained an intelligent agent to successfully land spacecraft using reinforcement learning algorithms and physics simulation.",
      type: "github" as const,
      github: "https://github.com"
    },
    {
      title: "YSL Sales Repository",
      description: "Developed a comprehensive sales tracking and analytics system for retail operations with real-time insights and reporting.",
      type: "github" as const,
      github: "https://github.com"
    }
  ];

  const blogPosts = [
    {
      title: "Exploring GPT OSS (OpenAI's OSS Model)",
      description: "Deep dive into OpenAI's open-source models, comparing capabilities and exploring practical applications in real-world scenarios.",
      type: "video" as const,
      video: "https://youtube.com"
    },
    {
      title: "Google's A2A (Agent-to-Agent Protocol) Explained",
      description: "Comprehensive breakdown of Google's Agent-to-Agent communication protocol and its implications for multi-agent AI systems.",
      type: "video" as const,
      video: "https://youtube.com"
    },
    {
      title: "Neural Networks: Theory + Practical Guide",
      description: "Complete guide covering neural network fundamentals from mathematical foundations to hands-on implementation tutorials.",
      type: "article" as const,
      link: "https://example.com"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Hero Section */}
      <AnimatedSection className="max-w-4xl mx-auto px-6 pt-20 pb-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-bold text-foreground mb-4 leading-tight">
            Sayantan Nandi
          </h1>
          <h2 className="text-2xl text-notion-gray mb-6 font-medium">
            AI/ML Engineer | Full Stack Developer | AI-Native Builder
          </h2>
          <p className="text-lg text-notion-gray leading-relaxed mb-8 max-w-2xl">
            I build AI-native apps, train intelligent agents, and create tools that bridge research and real-world impact.
          </p>
          
          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-notion-hover transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-notion-hover transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-notion-hover transition-colors"
            >
              <Youtube className="w-4 h-4" />
              YouTube
            </motion.a>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* About Me */}
      <AnimatedSection delay={0.1} className="max-w-4xl mx-auto px-6 pb-section">
        <h2 className="text-3xl font-bold text-foreground mb-8">About Me</h2>
        <NotionBlock>
          <p className="text-foreground leading-relaxed text-lg">
            I'm an AI/ML Engineer and Full Stack Developer passionate about building AI-native applications. From reinforcement learning agents mastering Pacman to large-scale RAG pipelines and AI interview platforms, I love experimenting with cutting-edge AI systems. My goal is to reimagine how humans and AI collaborate — through conversational search, multi-agent systems, and AI-native developer experiences.
          </p>
        </NotionBlock>
      </AnimatedSection>

      {/* Projects */}
      <AnimatedSection delay={0.2} className="max-w-4xl mx-auto px-6 pb-section">
        <h2 className="text-3xl font-bold text-foreground mb-8">Projects</h2>
        <div className="space-y-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Experience & Education */}
      <AnimatedSection delay={0.3} className="max-w-4xl mx-auto px-6 pb-section">
        <h2 className="text-3xl font-bold text-foreground mb-8">Experience & Education</h2>
        <div className="space-y-2">
          <TimelineItem
            title="Full Stack Developer"
            company="Pluto Labs"
            period="Jun 2025 – Present"
          />
          <TimelineItem
            title="Full Stack Developer"
            company="NexVest"
            period="Apr 2025 – Jun 2025"
          />
          <TimelineItem
            title="B.Tech Computer Science & Engineering"
            company="Symbiosis Institute of Technology"
            period="2024 – 2028"
          />
        </div>
      </AnimatedSection>

      {/* Certifications */}
      <AnimatedSection delay={0.4} className="max-w-4xl mx-auto px-6 pb-section">
        <h2 className="text-3xl font-bold text-foreground mb-8">Certifications</h2>
        <div className="flex flex-wrap gap-3">
          <CertificationPill name="AI Engineer Path" provider="Scrimba" />
          <CertificationPill name="TensorFlow on Google Cloud" provider="Google" />
          <CertificationPill name="AI A-Z: Agentic AI, Gen AI, RL" provider="Udemy" />
          <CertificationPill name="MCP (Intro + Advanced)" provider="Anthropic" />
        </div>
      </AnimatedSection>

      {/* Blog / Content */}
      <AnimatedSection delay={0.5} className="max-w-4xl mx-auto px-6 pb-section">
        <h2 className="text-3xl font-bold text-foreground mb-8">Blog / Content</h2>
        <div className="space-y-2">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...post} />
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Contact */}
      <AnimatedSection delay={0.6} className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-foreground mb-8">Contact</h2>
        <NotionBlock>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:sayantan@example.com"
              className="flex items-center gap-2 px-4 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-notion-hover transition-colors"
            >
              <Mail className="w-4 h-4" />
              sayantan@example.com
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-notion-hover transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              Connect on LinkedIn
            </motion.a>
          </div>
        </NotionBlock>
      </AnimatedSection>
    </div>
  );
};

export default Index;