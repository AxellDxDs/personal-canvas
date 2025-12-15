import { motion } from "framer-motion";
import { Code2, Palette, Music, Gamepad2, Coffee, Zap } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const discordBadges = [
  {
    icon: Code2,
    label: "Programmer",
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-500/10 dark:bg-blue-500/20",
  },
  {
    icon: Palette,
    label: "Designer",
    color: "from-pink-500 to-purple-400",
    bgColor: "bg-pink-500/10 dark:bg-pink-500/20",
  },
  {
    icon: Music,
    label: "Music Lover",
    color: "from-green-500 to-emerald-400",
    bgColor: "bg-green-500/10 dark:bg-green-500/20",
  },
  {
    icon: Gamepad2,
    label: "Gamer",
    color: "from-orange-500 to-yellow-400",
    bgColor: "bg-orange-500/10 dark:bg-orange-500/20",
  },
  {
    icon: Coffee,
    label: "Coffee Addict",
    color: "from-amber-600 to-orange-400",
    bgColor: "bg-amber-500/10 dark:bg-amber-500/20",
  },
  {
    icon: Zap,
    label: "Creative Mind",
    color: "from-violet-500 to-purple-400",
    bgColor: "bg-violet-500/10 dark:bg-violet-500/20",
  },
];

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4" data-testid="section-hero">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative inline-block" data-testid="avatar-container">
            <Avatar className="w-32 h-32 border-4 border-primary/30 shadow-2xl">
              <AvatarImage src="/avatar.jpg" alt="Profile" />
              <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-primary to-chart-2 text-white">
                AX
              </AvatarFallback>
            </Avatar>
            <motion.div
              className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-green-500 border-4 border-background flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              data-testid="status-online"
            >
              <div className="w-3 h-3 rounded-full bg-white" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4" data-testid="heading-hero">
            Hey, gue <span className="text-gradient">Axel</span> 
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-hero-description">
            Creative Developer & Designer yang suka explore hal-hal baru. 
            <span className="text-foreground font-medium"> Coding</span> by day, 
            <span className="text-foreground font-medium"> vibing to music</span> by night. 
            Let's create something <span className="text-gradient font-semibold">aesthetic</span> together!
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-muted-foreground text-lg mb-8 italic"
          data-testid="text-bio"
        >
          "Just a Gen Z trying to make the internet prettier, one pixel at a time."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3"
          data-testid="container-badges"
        >
          {discordBadges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="badge-pulse"
              data-testid={`badge-${badge.label.toLowerCase().replace(/\s/g, '-')}`}
            >
              <div className={`glass-card px-4 py-2 flex items-center gap-2 ${badge.bgColor}`}>
                <div className={`p-1.5 rounded-md bg-gradient-to-br ${badge.color}`}>
                  <badge.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium">{badge.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16"
        >
          <motion.a
            href="#hobbies"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            data-testid="link-scroll-down"
          >
            <span className="text-sm">Scroll to explore</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
