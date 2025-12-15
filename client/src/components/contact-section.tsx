import { motion } from "framer-motion";
import { Mail, Send, Github } from "lucide-react";
import { SiWhatsapp, SiInstagram, SiGithub } from "react-icons/si";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    name: "WhatsApp",
    handle: "+6288289338073",
    description: "Chat langsung sama gue!",
    icon: SiWhatsapp,
    url: "https://wa.me/6288289338073",
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10 dark:bg-green-500/20",
  },
  {
    name: "Instagram",
    handle: "@aelxansea_",
    description: "Follow for daily vibes & updates",
    icon: SiInstagram,
    url: "https://instagram.com/aelxansea_",
    gradient: "from-pink-500 via-purple-500 to-orange-400",
    bgColor: "bg-pink-500/10 dark:bg-pink-500/20",
  },
  {
    name: "GitHub",
    handle: "AxellDxDs",
    description: "Check out my code repos",
    icon: SiGithub,
    url: "https://github.com/AxellDxDs",
    gradient: "from-gray-600 to-gray-800",
    bgColor: "bg-gray-500/10 dark:bg-gray-500/20",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4" data-testid="section-contact">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-contact">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-contact-description">
            Have a project in mind or just want to say hi? Hit me up! I'm always down to chat about tech, design, or music.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16" data-testid="grid-contact-links">
          {contactLinks.map((contact, index) => {
            const contactId = contact.name.toLowerCase();
            return (
              <motion.a
                key={contact.name}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`glass-card p-6 text-center group cursor-pointer ${contact.bgColor}`}
                data-testid={`link-contact-${contactId}`}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold mb-1" data-testid={`text-contact-name-${contactId}`}>{contact.name}</h3>
                <p className="text-primary font-medium text-sm mb-2" data-testid={`text-contact-handle-${contactId}`}>{contact.handle}</p>
                <p className="text-muted-foreground text-xs" data-testid={`text-contact-desc-${contactId}`}>{contact.description}</p>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 text-center"
          data-testid="card-cta"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-10 h-10 text-white" />
          </div>
          
          <h3 className="text-2xl font-bold mb-4" data-testid="heading-cta">Got a Project Idea?</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto" data-testid="text-cta-description">
            I'm always excited to work on new and interesting projects. Whether it's a website, app, or design work - let's make it happen!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              className="bg-gradient-to-r from-primary to-chart-2 text-white"
              onClick={() => window.open('https://wa.me/6288289338073', '_blank')}
              data-testid="button-get-in-touch"
            >
              <Send className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              className="glass-button"
              onClick={() => window.open('https://github.com/AxellDxDs', '_blank')}
              data-testid="button-view-github"
            >
              <Github className="w-4 h-4 mr-2" />
              View GitHub
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
