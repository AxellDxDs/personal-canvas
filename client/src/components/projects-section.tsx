import { motion } from "framer-motion";
import { ExternalLink, Github, MessageSquare, Wallet, User, Image, Layout, Palette, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const devProjects = [
  {
    title: "WhatsApp Bot",
    description: "A powerful WhatsApp automation bot built with Node.js. Features include auto-reply, group management, sticker creation, and custom commands. Making chat automation easy and fun!",
    tags: ["Node.js", "WhatsApp API", "JavaScript", "Automation"],
    icon: MessageSquare,
    gradient: "from-green-500 to-emerald-500",
    status: "Active",
    github: "https://github.com/AxellDxDs",
  },
  {
    title: "Dana Lite",
    description: "A lightweight e-wallet management app prototype. Track your balance, transactions, and manage your digital wallet with a clean and intuitive interface.",
    tags: ["React", "Finance", "UI/UX", "Mobile-First"],
    icon: Wallet,
    gradient: "from-blue-500 to-cyan-500",
    status: "In Progress",
    github: "https://github.com/AxellDxDs",
  },
  {
    title: "Personal Profile",
    description: "This very website you're looking at! Built with React, Framer Motion, and lots of love. Featuring glassmorphism design and smooth animations.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Portfolio"],
    icon: User,
    gradient: "from-purple-500 to-violet-500",
    status: "Live",
    github: "https://github.com/AxellDxDs",
  },
];

const designProjects = [
  {
    title: "Social Media Banners",
    description: "Collection of eye-catching banners for various social media platforms. Clean designs with modern typography and vibrant colors.",
    tags: ["Canva", "Social Media", "Marketing"],
    icon: Image,
    gradient: "from-pink-500 to-rose-500",
    type: "Banner Design",
  },
  {
    title: "YouTube Thumbnails",
    description: "Attention-grabbing thumbnails designed to boost click-through rates. Bold text, engaging visuals, and consistent branding.",
    tags: ["Photoshop", "YouTube", "Branding"],
    icon: Layout,
    gradient: "from-red-500 to-orange-500",
    type: "Thumbnail Design",
  },
  {
    title: "Logo Collection",
    description: "Minimalist and modern logo designs for various brands and personal projects. From wordmarks to icon-based logos.",
    tags: ["Illustrator", "Branding", "Logo"],
    icon: Palette,
    gradient: "from-amber-500 to-yellow-500",
    type: "Logo Design",
  },
  {
    title: "UI Mockups",
    description: "App and website UI mockups designed in Figma. Clean interfaces with attention to user experience and modern aesthetics.",
    tags: ["Figma", "UI/UX", "Mobile App"],
    icon: Code,
    gradient: "from-indigo-500 to-blue-500",
    type: "UI Design",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4" data-testid="section-projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-projects">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-projects-description">
            Check out what I've been building and creating
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-8 flex items-center gap-3"
            data-testid="heading-dev-projects"
          >
            <span className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Code className="w-5 h-5 text-blue-500" />
            </span>
            Development Projects
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="grid-dev-projects">
            {devProjects.map((project, index) => {
              const projectId = project.title.toLowerCase().replace(/\s/g, '-');
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass-card overflow-hidden group"
                  data-testid={`card-project-${projectId}`}
                >
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={`text-xs ${
                          project.status === 'Live' ? 'bg-green-500/20 text-green-600 dark:text-green-400' :
                          project.status === 'Active' ? 'bg-blue-500/20 text-blue-600 dark:text-blue-400' :
                          'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400'
                        }`}
                        data-testid={`badge-status-${projectId}`}
                      >
                        {project.status}
                      </Badge>
                    </div>

                    <h4 className="text-lg font-semibold mb-2" data-testid={`text-project-title-${projectId}`}>{project.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3" data-testid={`text-project-desc-${projectId}`}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4" data-testid={`container-tags-${projectId}`}>
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs" data-testid={`badge-tag-${tag.toLowerCase().replace(/\s/g, '-')}`}>
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full glass-button"
                      onClick={() => window.open(project.github, '_blank')}
                      data-testid={`button-github-${projectId}`}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-8 flex items-center gap-3"
            data-testid="heading-design-projects"
          >
            <span className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
              <Palette className="w-5 h-5 text-pink-500" />
            </span>
            Design Projects
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-testid="grid-design-projects">
            {designProjects.map((project, index) => {
              const projectId = project.title.toLowerCase().replace(/\s/g, '-');
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-card overflow-hidden group cursor-pointer"
                  data-testid={`card-design-${projectId}`}
                >
                  <div className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <project.icon className="w-12 h-12 text-white/80" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <Badge variant="secondary" className="text-xs mb-2" data-testid={`badge-type-${projectId}`}>
                      {project.type}
                    </Badge>
                    <h4 className="font-semibold mb-1" data-testid={`text-design-title-${projectId}`}>{project.title}</h4>
                    <p className="text-xs text-muted-foreground line-clamp-2" data-testid={`text-design-desc-${projectId}`}>
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
