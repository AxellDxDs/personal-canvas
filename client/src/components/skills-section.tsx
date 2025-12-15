import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SiJavascript, SiNodedotjs, SiPython, SiHtml5, SiCss3, SiReact, SiTypescript, SiAdobephotoshop, SiCanva, SiAdobeillustrator, SiFigma, SiGit, SiTailwindcss, SiVite } from "react-icons/si";

const programmingSkills = [
  { name: "JavaScript", level: 90, icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", level: 85, icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", level: 70, icon: SiTypescript, color: "#3178C6" },
  { name: "Python", level: 50, icon: SiPython, color: "#3776AB" },
  { name: "HTML", level: 45, icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", level: 30, icon: SiCss3, color: "#1572B6" },
  { name: "Node.js", level: 30, icon: SiNodedotjs, color: "#339933" },
  { name: "Tailwind CSS", level: 80, icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", level: 65, icon: SiGit, color: "#F05032" },
  { name: "Vite", level: 75, icon: SiVite, color: "#646CFF" },
];

const designSkills = [
  { name: "Canva", level: 95, icon: SiCanva, color: "#00C4CC" },
  { name: "Adobe Photoshop", level: 75, icon: SiAdobephotoshop, color: "#31A8FF" },
  { name: "Figma", level: 45, icon: SiFigma, color: "#F24E1E" },
  { name: "Adobe Illustrator", level: 30, icon: SiAdobeillustrator, color: "#FF9A00" },
];

interface SkillBarProps {
  skill: { name: string; level: number; icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>; color: string };
  index: number;
  isInView: boolean;
}

function SkillBar({ skill, index, isInView }: SkillBarProps) {
  const Icon = skill.icon;
  const skillId = skill.name.toLowerCase().replace(/\s/g, '-').replace(/\./g, '');
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-4"
      data-testid={`skill-bar-${skillId}`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div 
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${skill.color}20` }}
          data-testid={`skill-icon-${skillId}`}
        >
          <Icon className="w-5 h-5" style={{ color: skill.color }} />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="font-medium text-sm" data-testid={`skill-name-${skillId}`}>{skill.name}</span>
            <span className="text-xs text-muted-foreground font-mono" data-testid={`skill-level-${skillId}`}>{skill.level}%</span>
          </div>
        </div>
      </div>
      
      <div className="h-2 rounded-full bg-muted overflow-hidden" data-testid={`skill-progress-bg-${skillId}`}>
        <motion.div
          className="h-full rounded-full"
          style={{ 
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
            width: isInView ? `${skill.level}%` : '0%'
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
          data-testid={`skill-progress-fill-${skillId}`}
        />
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-4" ref={ref} data-testid="section-skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-skills">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-skills-description">
            Tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div data-testid="skills-programming-container">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl font-semibold mb-6 flex items-center gap-2"
              data-testid="heading-programming"
            >
              <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <SiJavascript className="w-4 h-4 text-blue-500" />
              </span>
              Programming
            </motion.h3>
            
            <div className="grid gap-4" data-testid="grid-programming-skills">
              {programmingSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} isInView={isInView} />
              ))}
            </div>
          </div>

          <div data-testid="skills-design-container">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl font-semibold mb-6 flex items-center gap-2"
              data-testid="heading-design"
            >
              <span className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center">
                <SiFigma className="w-4 h-4 text-pink-500" />
              </span>
              Design
            </motion.h3>
            
            <div className="grid gap-4" data-testid="grid-design-skills">
              {designSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} isInView={isInView} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
