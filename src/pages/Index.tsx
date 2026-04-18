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
      title: "Kinesis - Cursor for Product Management",
      description: "Kinesis is an AI native product ideation and requirements platform that turns raw ideas into executable specs. Capture voice notes or text, generate PRDs with AI, and seamlessly deliver context to coding tools like Cursor via a built in MCP server.",
      type: "github" as const,
      github: "https://github.com/sayantann7/kinesis",
      demo: "https://www.linkedin.com/posts/sayantann7_i-built-the-tool-i-always-wished-existed-activity-7445196696021626881-TrtU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEx9O6ABj5xeN9ftqMBBPZKtYeNvtqQrXME", // Placeholder demo link
      skills: ["Python", "Node.js", "Yarn", "AWS EKS", "AWS EC2", "MongoDB", "Docker"]
    },
    {
      title: "Complete CI/CD pipeline for a fullstack app",
      description: "Built an intelligent document chat system using Large Language Models and Retrieval-Augmented Generation to enable natural language queries over document collections.",
      type: "github" as const,
      github: "https://github.com/sayantann7/devops-project-yt",
      demo: "https://www.linkedin.com/posts/sayantann7_presenting-my-mega-devops-project-of-building-activity-7416216041858510848-mPxe?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEx9O6ABj5xeN9ftqMBBPZKtYeNvtqQrXME", // Placeholder demo link
      skills: ["Jenkins", "Kubernetes", "Docker", "AWS EKS", "AWS EC2", "Prometheus", "Grafana", "Trivy", "SonarQube", "OWASP", "ArgoCD"]
    },
    {
      title: "ZipHub - A Vercel clone",
      description: "Built a clone of Vercel's platform, enabling seamless deployment and hosting of web applications with a focus on simplicity with deployment in just a single GitHub repo link.",
      type: "github" as const,
      github: "https://github.com/sayantann7/vercel-clone",
      demo: "https://www.linkedin.com/posts/sayantann7_introducing-ziphub-your-very-own-vercel-activity-7327866058168573953-iLv5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEx9O6ABj5xeN9ftqMBBPZKtYeNvtqQrXME", // Placeholder demo link
      skills: ["Cloudfare R2", "VM", "Redis", "TypeScript", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Prepr – AI Interview Platform",
      description: "Developed an AI-powered interview platform that conducts realistic technical interviews and provides detailed feedback to help candidates improve their skills.",
      type: "github" as const,
      github: "https://github.com/sayantann7/prepr",
      demo: "https://www.linkedin.com/posts/sayantann7_introducing-to-you-prepr-the-ultimate-activity-7310982183089786880-aBXD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEx9O6ABj5xeN9ftqMBBPZKtYeNvtqQrXME", // Placeholder demo link
      skills: ["TypeScript", "Next.js", "React", "Node.js", "PostgreSQL","Vapi AI"]
    },
    {
      title: "Multimodal Sentiment Analysis",
      description: "Multimodal Sentiment Analysis through Video, Audio & Transcript of Clips (PyTorch, AWS SageMaker, Transformers, BERT Model, CNN) trained on 13,000+ dialogues.",
      type: "github" as const,
      github: "https://github.com/sayantann7/multimodal-sentiment-analyzer",
      demo: "https://www.linkedin.com/posts/sayantann7_created-a-multimodal-sentiment-analysis-model-activity-7409249210451120128-fOSQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEx9O6ABj5xeN9ftqMBBPZKtYeNvtqQrXME", // Placeholder demo link
      skills: ["Python", "scikit-learn", "Pandas"]
    },
    {
      title: "Facial Emotion Detector",
      description: "Developed a Facial Emotion Detector CNN using PyTorch, TorchVision, OpenCV on a dataset of 50,000+ images",
      type: "github" as const,
      github: "https://github.com/sayantann7/emotion-detector-cnn",
      demo: "https://www.linkedin.com/posts/sayantann7_created-a-facial-emotion-detector-using-pytorch-activity-7387903358281338880-V5Qr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEx9O6ABj5xeN9ftqMBBPZKtYeNvtqQrXME", // Placeholder demo link
      skills: ["TypeScript", "React", "Web3.js", "Solana"]
    },
    {
      title: "AI Document Chat App (LLM + RAG Prototype)",
      description: "Built an intelligent document chat system using Large Language Models and RAG to enable natural language queries over documents.",
      type: "github" as const,
      github: "https://github.com/sayantann7/gpt-oss-ai-document-chat",
      demo: "https://linkedin.com/in/sayantann7", // Placeholder demo link
      skills: ["TypeScript", "React", "Node.js", "HuggingFace.js", "LLM", "RAG", "Vector DB"]
    },
    {
      title: "AutoForms",
      description: "A fun version of filling forms using Natural Language Processing instead of traditional form inputs.",
      type: "github" as const,
      github: "https://github.com/sayantann7/autoforms-lovable.git",
      demo: "https://autoforms.vercel.app/", // Placeholder demo link
      skills: ["TypeScript", "React", "OpenAI API", "NLP", "Express"]
    },
  ];

  const skillCategories = {
    "AI/ML": ["Transformers", "LangChain", "LangGraph", "RAG pipelines", "AI Agents", "Scikit-Learn", "DL", "NLP"],
    "Frameworks": ["TensorFlow", "PyTorch", "React", "NextJS", "NodeJS", "Spring Boot"],
    "Cloud": ["Docker", "Kubernetes", "AWS S3", "Lambda", "EC2", "ELB", "BedRock", "DigitalOcean"],
    "Databases": ["SQL", "PostgreSQL", "MongoDB", "Pinecone"],
    "Languages": ["Java", "JavaScript", "Python"],
    "Tools": ["Git", "Linux/Unix", "Postman/Swagger", "Kafka"]
  };

  const blogPosts = [
    {
      title: "Understanding Transformers - Heart of all LLMs",
      description: "Ever wondered how models like ChatGPT, Claude, Gemini, and other Large Language Models actually work? The secret lies in Transformers, the revolutionary architecture introduced by Google in the 2017 paper “Attention Is All You Need”.",
      type: "video" as const,
      video: "https://youtu.be/e0J3EY8UETw?si=MAxh28eGQCYcJfEo"
    },
    {
      title: "Complete DevSecOps + GitOps Pipeline on AWS",
      description: "In this video, I walk through building a complete real-world DevSecOps + GitOps pipeline from scratch on AWS using Jenkins, Kubernetes, SonarQube & ArgoCD.",
      type: "video" as const,
      video: "https://www.youtube.com/watch?v=ohCizGoRByA"
    },
    {
      title: "How to build scalable applications using Docker, Kubernetes and ArgoCD",
      description: "In this article, I share a complete guide to building a complete CI/CD pipeline for a fullstack application using Docker, Kubernetes, and ArgoCD from scratch.",
      type: "article" as const,
      link: "https://medium.com/@sayantann7/how-to-build-scalable-applications-using-docker-kubernetes-and-argocd-3a70fde70846"
    },
    {
      title: "Neural Networks: Theory + Practical Guide",
      description: "Complete guide covering neural network fundamentals from mathematical foundations to hands-on implementation tutorials.",
      type: "video" as const,
      video: "https://www.youtube.com/watch?v=5KbSmguIjEY"
    },
    {
      title: "Spring Boot for Beginners",
      description: "In this video, we build a simple Spring Boot backend application from scratch using REST APIs, MVC architecture, Spring Data JPA, and MySQL.",
      type: "video" as const,
      video: "https://www.youtube.com/watch?v=GxeKz0WVK4Y"
    },
    {
      title: "AWS Deployment Tutorial for Beginners",
      description: "In this tutorial, I’ll walk you through the complete process of deploying your project from your local machine → GitHub → AWS EC2 → custom domain with HTTPS.",
      type: "video" as const,
      video: "https://youtu.be/42WUT6vFfKU?si=eBlRXc6WcqH1UEvV"
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
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              👋 Welcome to Sayantan's Space
            </h1>
            <h2 className="text-xl md:text-2xl text-notion-gray mb-6 font-medium">
              Full Stack Developer | AI Engineer | Cloud Engineer
            </h2>
            <p className="text-base md:text-lg text-notion-gray leading-relaxed mb-8 max-w-3xl">
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
              target="_blank"
              download
              className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-notion-hover transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* About Me */}
      <AnimatedSection id="about" delay={0.1} className="max-w-4xl mx-auto px-6 pb-section">
        <div />
        <h2 className="text-3xl font-bold text-foreground mb-8">About Me 🧭</h2>
        <NotionBlock>
          <p className="text-foreground leading-relaxed text-lg mb-8">
            I’m a builder at heart, passionate about creating technology that solves real problems at scale.
            <br />
            <br />
            I’m particularly interested in the intersection of AI, cloud computing, and distributed systems. From designing AI agents and RAG systems to deploying microservices on cloud platforms, I enjoy turning complex ideas into working systems.
            <br />
            <br />
            Outside of tech, I have a strong interest in filmmaking and cinema. I enjoy exploring storytelling through films, especially Christopher Nolan. I’m also deeply inspired by Elon Musk, his biography had a big impact on me when I was 14, shaping the way I think about ambition, innovation, and building at scale.
            <br />
            <br />
            Right now, I’m focused on building impactful products, learning more and continuously pushing myself toward becoming 1% better every day.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-8 auto-rows-[120px] md:auto-rows-[140px]">
            {/* Image 2: Landscape (1280x720) - Top Left (Spans 2 cols, 1 row) */}
            <div className="col-span-2 row-span-1 rounded-xl overflow-hidden shadow-sm group">
              <img src="/myphotos/2.jpeg" alt="Activities/Hackathon" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>

            {/* Image 3: Portrait (854x1280) - Middle (Spans 1 col, 2 rows) */}
            <div className="col-span-1 row-span-2 rounded-xl overflow-hidden shadow-sm group">
              <img src="/myphotos/3.jpeg" alt="More of my life" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>

            {/* Image 5: Portrait (864x1194) - Middle Right (Spans 1 col, 2 rows) */}
            <div className="col-span-1 row-span-2 rounded-xl overflow-hidden shadow-sm group">
              <img src="/myphotos/5.jpeg" alt="Speaking Event" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            
            {/* Image 6: Portrait (581x1079) - Far Right (Spans 2 cols on mobile, 1 col on desktop, 2 rows) */}
            <div className="col-span-2 md:col-span-1 row-span-2 rounded-xl overflow-hidden shadow-sm group">
              <img src="/myphotos/6.jpeg" alt="Memories" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
            </div>

            {/* Image 4: Landscape (1280x720) - Bottom Left (Spans 2 cols, 1 row) */}
            <div className="col-span-2 row-span-1 rounded-xl overflow-hidden shadow-sm group">
              <img src="/myphotos/4.jpeg" alt="Friends and Network" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          </div>
        </NotionBlock>
      </AnimatedSection>

      {/* Skills */}
      <AnimatedSection id="skills" className="max-w-4xl mx-auto px-6 pb-section">
        <div />
        <h2 className="text-3xl font-bold text-foreground mb-8">Skills 🧰</h2>
        <div className="space-y-6">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-lg font-medium text-foreground mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <SkillPill key={skill} name={skill} />
                ))}
              </div>
            </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TimelineItem
              title="AI Engineer"
              company="AIVAS"
              period="Jan 2026 - Mar 2026"
            />
            <TimelineItem
              title="App Developer"
              company="Yes Bank"
              period="June 2025 - Sep 2025"
            />
          <TimelineItem
            title="Full Stack Developer"
            company="Pluto Labs"
            period="Sep 2025 - Dec 2025"
          />
          <TimelineItem
            title="Full Stack Developer"
            company="NexVest"
            period="Aug 2025 - Nov 2025"
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
          <CertificationPill name="Supervised Machine Learning: Regression and Classification" provider="DeepLearning.AI (Apr 2026)" />
          <CertificationPill name="Generative AI Course with LangChain and HuggingFace" provider="Udemy (Oct 2025)" />
          <CertificationPill name="Complete MLOps Bootcamp" provider="Udemy (Apr 2026)" />
          <CertificationPill name="Oracle Cloud Infrastructure 2025 Certified Generative AI Professional" provider="Oracle (Sep 2025)" />
          <CertificationPill name="Machine Learning A-Z" provider="Udemy (Aug 2025)" />
          <CertificationPill name="AI Engineer Path" provider="Scrimba (Jul 2025)" />
          <CertificationPill name="Classify Images with TensorFlow on Google Cloud" provider="Google (Apr 2025)" />
          <CertificationPill name="Artificial Intelligence A-Z: Agentic AI, Gen AI, RL" provider="Udemy (Mar 2025)" />
          <CertificationPill name="Introduction to Model Context Protocol" provider="Anthropic (Aug 2025)" />
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
            {
              quote:"What impressed me most was Sayantan's work ethic and diligence. Working as a freelance engineer on a small startup team, he delivered reliably with minimal supervision and showed genuine ownership over his work. He was thorough, consistent, and proactive in identifying and solving problems. I would gladly recommend Sayantan for roles in AI/ML engineering, computer vision, or audio and speech processing. He would be a solid addition to any team working on real-world AI systems.",
              author: "JP",
              role: "CEO & Founder, AIVAS Pte. Ltd.",
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