import { motion } from 'framer-motion';
import { Github, Linkedin, Youtube, Mail, Download, Twitter } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { NotionBlock } from '@/components/NotionBlock';
import { ProjectCard } from '@/components/ProjectCard';
import { TimelineItem } from '@/components/TimelineItem';
import { CertificationPill } from '@/components/CertificationPill';
import { SkillPill } from '@/components/SkillPill';

const Index = () => {
  const projects = [
    {
      title: "AI Document Chat App (LLM + RAG Prototype)",
      description: "Built an intelligent document chat system using Large Language Models and Retrieval-Augmented Generation to enable natural language queries over document collections.",
      type: "github" as const,
      github: "https://github.com/sayantann7/gpt-oss-ai-document-chat",
      skills: ["TypeScript", "React", "Node.js", "HuggingFace.js", "LLM", "RAG", "Vector DB"]
    },
    {
      title: "Prepr – AI Interview Platform",
      description: "Developed an AI-powered interview platform that conducts realistic technical interviews and provides detailed feedback to help candidates improve their skills.",
      type: "github" as const,
      github: "https://github.com/sayantann7/prepr",
      skills: ["TypeScript", "Next.js", "React", "Node.js", "PostgreSQL","Vapi AI"]
    },
    {
      title: "Tensor Protocol Newsletter",
      description: "Created a technical newsletter with 5,300+ subscribers covering the latest developments in AI/ML.",
      type: "github" as const,
      link: "https://github.com/sayantann7/exclusive-list-launchpad",
      skills: ["TypeScript", "React", "Supabase"]
    },
    {
      title: "Vercel Clone",
      description: "Built a clone of Vercel's platform, enabling seamless deployment and hosting of web applications with a focus on simplicity.",
      type: "github" as const,
      github: "https://github.com/sayantann7/vercel-clone",
      skills: ["Cloudfare R2", "VM", "Redis", "TypeScript", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Bolt Clone",
      description: "Built a clone of Bolt where users can prompt and create websites using natural language.",
      type: "github" as const,
      github: "https://github.com/sayantann7/bolt.clone",
      skills: ["TypeScript", "React", "OpenAI API", "Web Containers", "Tailwind CSS"]
    },
    {
      title: "Student Resources Hub",
      description: "Compiled a list of 150+ Free AI tools, resources, and guides to help students navigate their academic journey.",
      type: "github" as const,
      github: "https://github.com/sayantann7/student-resources",
      skills: ["TypeScript", "React", "Tailwind CSS"]
    },
    {
      title: "AutoForms",
      description: "A fun version of filling forms using natural language processing instead of traditional form inputs.",
      type: "github" as const,
      github: "https://github.com/sayantann7/autoforms-frontend",
      skills: ["TypeScript", "React", "OpenAI API", "NLP", "Express"]
    },
    {
      title: "Pacman RL Agent",
      description: "Implemented a reinforcement learning agent that masters the classic Pacman game using Q-learning and deep neural networks.",
      type: "github" as const,
      github: "https://github.com/sayantann7/DCQN_Learning_for_Pac_Man",
      skills: ["Python", "Tensorflow", "OpenAI Gym", "Reinforcement Learning"]
    },
    {
      title: "Yes Securities Sales Repository",
      description: "Developed a Android+iOS application for managing the documents of the Yes Securities Sales Team.",
      type: "github" as const,
      github: "https://github.com/sayantann7/yes-securities-repo",
      skills: ["React Native", "Expo", "AWS S3", "TypeScript"]
    },
    {
      title: "Placement Predictor",
      description: "Built a Random Forest regression model to predict student placement outcomes based on various features.",
      type: "github" as const,
      github: "https://github.com/sayantann7/placement-predictor",
      skills: ["Python", "scikit-learn", "Pandas"]
    },
    {
      title: "Web3 Wallet",
      description: "Developed a simple Web3 wallet for managing digital assets and interacting with decentralized applications.",
      type: "github" as const,
      github: "https://github.com/sayantann7/sage-web3-wallet",
      skills: ["TypeScript", "React", "Web3.js", "Solana"]
    }
  ];

  const allSkills = [
    "JavaScript","TypeScript","React","HTML","CSS","Python","Next.js","Node.js","PostgreSQL","MongoDB","Google Cloud","DigitalOcean","Firebase","TensorFlow","Terraform","Prisma","Vercel","Supabase","Figma","Canva","After Effects","Stack Overflow","Postman","Vite","C","Linux"
  ];

  const blogPosts = [
    {
      title: "Exploring GPT OSS (OpenAI's OSS Model)",
      description: "Deep dive into OpenAI's open-source models, comparing capabilities and exploring practical applications in real-world scenarios.",
      type: "video" as const,
      video: "https://youtu.be/QmvlbYnnkuI?si=m2A64p90lIoeGsQx"
    },
    {
      title: "AWS Crash Course for Beginners",
      description: "Comprehensive breakdown of AWS services (EC2, VPC, Security Groups, IAM) and their applications in cloud computing.",
      type: "video" as const,
      video: "https://youtu.be/1Dcq6dy7hRw?si=uw5sewmnrJOjWTnj"
    },
    {
      title: "Neural Networks: Theory + Practical Guide",
      description: "Complete guide covering neural network fundamentals from mathematical foundations to hands-on implementation tutorials.",
      type: "article" as const,
      link: "https://youtu.be/5KbSmguIjEY?si=SB9GYz3pKY04bFx1"
    },
    {
      title: "Google's A2A (Agent-to-Agent Protocol) Explained",
      description: "Comprehensive breakdown of Google's Agent-to-Agent communication protocol and its implications for multi-agent AI systems.",
      type: "video" as const,
      video: "https://youtu.be/srvxkAztYVU?si=RO85VObNRcTQyAgQ"
    }
  ];

  return (
    <div id="home" className="min-h-screen bg-background">
      {/* Hero Section */}
      <AnimatedSection className="max-w-4xl mx-auto px-6 pt-20 pb-section">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-bold text-foreground mb-4 leading-tight">
            👋 Welcome to Sayantan's Space
          </h1>
          <h2 className="text-2xl text-notion-gray mb-6 font-medium">
            Full Stack Developer | AI Engineer | Cloud Engineer
          </h2>
          <p className="text-lg text-notion-gray leading-relaxed mb-8 max-w-3xl">
            I build and scale production-grade websites over the weekend, AI-native apps, train intelligent agents, and create stuff that can grow humanity more than the universe.
          </p>
          
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a
              href="https://linkedin.com/in/sayantann7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-notion-hover transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com/sayantann7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-notion-hover transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://youtube.com/@sayantann7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-notion-hover transition-colors"
            >
              <Youtube className="w-4 h-4" />
              YouTube
            </a>
            <a
              href="https://twitter.com/sayantann7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-notion-hover transition-colors"
            >
              <Twitter className="w-4 h-4" />
              Twitter
            </a>
            <a
              href="/sayantan-nandi-resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-notion-hover transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* About Me */}
      <AnimatedSection id="about" delay={0.1} className="max-w-4xl mx-auto px-6 pb-section">
        <div />
        <h2 className="text-3xl font-bold text-foreground mb-8">About Me 🧭</h2>
        <NotionBlock>
          <p className="text-foreground leading-relaxed text-lg">
            A student driven by curiosity and a passion for building solutions that create real-world impact, my core focus lies in full-stack web development, where I enjoy turning ideas into scalable and user-friendly applications. Alongside this, I’m expanding my expertise in AI/ML and exploring the potential of cloud technologies such as AWS and Google Cloud to power modern, intelligent systems.
          </p>
        </NotionBlock>
      </AnimatedSection>

      {/* Skills */}
      <AnimatedSection id="skills" className="max-w-4xl mx-auto px-6 pb-section">
        <div />
        <h2 className="text-3xl font-bold text-foreground mb-8">Skills 🧰</h2>
        <div className="flex flex-wrap gap-2">
          {allSkills.map((skill) => (
            <SkillPill key={skill} name={skill} />
          ))}
        </div>
      </AnimatedSection>

      {/* Projects */}
  <AnimatedSection delay={0.2} className="max-w-4xl mx-auto px-6 pb-section">
        <div id="projects" />
        <h2 className="text-3xl font-bold text-foreground mb-8">Projects 🛠️</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {projects.map((project) => (
            <div key={project.title} className="h-full">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Experience & Education */}
      <AnimatedSection delay={0.3} className="max-w-4xl mx-auto px-6 pb-section">
        <div id="experience" />
        <h2 className="text-3xl font-bold text-foreground mb-8">Experience 🎓</h2>
        <div className="space-y-2">
          <TimelineItem
            title="Full Stack Developer"
            company="Pluto Labs"
            period="Jun 2025 – Present"
          />
          <TimelineItem
            title="Technical Executive"
            company="CodeX"
            period="Aug 2025 – Present"
          />
          <TimelineItem
            title="AI/ML Coordinator"
            company="Google Developer Students Club"
            period="Jul 2025 – Present"
          />
          <TimelineItem
            title="Blockchain CoHead"
            company="Cyber Blockchain Club"
            period="Jul 2025 – Present"
          />
          <TimelineItem
            title="Full Stack Developer"
            company="NexVest"
            period="Apr 2025 – Jun 2025"
          />
          <TimelineItem
            title="B.Tech Computer Science & Engineering"
            company="Symbiosis Institute of Technology, Pune"
            period="2024 – 2028"
          />
        </div>
      </AnimatedSection>

      {/* Certifications */}
      <AnimatedSection delay={0.4} className="max-w-4xl mx-auto px-6 pb-section">
        <div id="certifications" />
        <h2 className="text-3xl font-bold text-foreground mb-8">Certifications 💰</h2>
          <div className="flex flex-wrap gap-4">
          <CertificationPill name="AI Engineer Path" provider="Scrimba" />
          <CertificationPill name="TensorFlow on Google Cloud" provider="Google" />
          <CertificationPill name="AI A-Z: Agentic AI, Gen AI, RL" provider="Udemy" />
          <CertificationPill name="Hashgraph Developer Course" provider="Hashgraph Association" />
          <CertificationPill name="AWS APAC Solutions Architect Job Silumation" provider="AWS" />
          <CertificationPill name="Introduction to MCP" provider="Anthropic" />
        </div>
      </AnimatedSection>

      {/* Blog / Content */}
      <AnimatedSection delay={0.5} className="max-w-4xl mx-auto px-6 pb-section">
        <div id="blog" />
        <h2 className="text-3xl font-bold text-foreground mb-8">Blog 📝</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {blogPosts.map((post) => (
            <div key={post.title} className="h-full">
              <ProjectCard {...post} />
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection delay={0.55} className="max-w-4xl mx-auto px-6 pb-section">
        <div id="testimonials" />
        <h2 className="text-3xl font-bold text-foreground mb-8">Testimonials 💬</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              quote:"I really enjoyed working with Sayantan on our web development project. He wasn’t just reliable in delivering everything we asked for he actually took the initiative to suggest better ways of doing things and added new features that made the project even stronger. His creativity and dedication truly stood out, and he went beyond what was expected. I’d definitely recommend Sayantan to anyone looking for someone skilled and proactive who cares about the success of the project.",
              author: "Yashwant Sagnati",
              role: "Founder, NexVest",
            },
          ].map((t, i) => (
            <div
              key={i}
            >
              <NotionBlock className="bg-card/30 border border-border/50">
                <p className="text-sm text-notion-gray leading-relaxed">“{t.quote}”</p>
                <div className="mt-3 text-sm text-foreground/80 font-medium">
                  {t.author} · <span className="text-notion-gray">{t.role}</span>
                </div>
              </NotionBlock>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Contact */}
      <AnimatedSection delay={0.6} className="max-w-4xl mx-auto px-6 pb-20">
        <div id="contact" />
        <h2 className="text-3xl font-bold text-foreground mb-8">Contact 🚀</h2>
        <NotionBlock>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:sayantannandi13@gmail.com"
              className="flex items-center gap-2 px-4 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-notion-hover transition-colors"
            >
              <Mail className="w-4 h-4" />
              sayantannandi13@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/sayantann7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-notion-hover transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              Connect on LinkedIn
            </a>
          </div>
        </NotionBlock>
      </AnimatedSection>
    </div>
  );
};

export default Index;