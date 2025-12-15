import { motion } from "framer-motion";
import { Code, Palette, Headphones, Gamepad2, Camera, BookOpen } from "lucide-react";

const hobbies = [
  {
    icon: Code,
    title: "Coding",
    description: "Building cool stuff with JavaScript, Python, and exploring new frameworks. Turning coffee into code since day one!",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Creating aesthetic visuals, UI/UX designs, and bringing ideas to life with Figma & Adobe tools.",
    gradient: "from-pink-500 to-purple-400",
  },
  {
    icon: Headphones,
    title: "Music",
    description: "Indie, R&B, and everything that hits different. Wave to Earth, Rex OC, and Mitski on repeat all day!",
    gradient: "from-green-500 to-emerald-400",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    description: "Casual gamer vibes. From story-driven games to competitive matches with the homies.",
    gradient: "from-orange-500 to-yellow-400",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Capturing moments and aesthetics. Street photography and moody shots are my thing.",
    gradient: "from-red-500 to-pink-400",
  },
  {
    icon: BookOpen,
    title: "Learning",
    description: "Always curious, always learning. Tech, design trends, and random interesting stuff.",
    gradient: "from-violet-500 to-indigo-400",
  },
];

export function HobbiesSection() {
  return (
    <section id="hobbies" className="py-24 px-4" data-testid="section-hobbies">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-hobbies">
            Things I <span className="text-gradient">Love</span> to Do
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-hobbies-description">
            When I'm not staring at code, here's what keeps me going
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="grid-hobbies">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 group cursor-pointer"
              data-testid={`card-hobby-${hobby.title.toLowerCase()}`}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${hobby.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <hobby.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" data-testid={`text-hobby-title-${hobby.title.toLowerCase()}`}>{hobby.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`text-hobby-desc-${hobby.title.toLowerCase()}`}>
                {hobby.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
