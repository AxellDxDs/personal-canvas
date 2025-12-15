import { motion } from "framer-motion";
import { Heart, Coffee, Code } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border/50" data-testid="footer">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-muted-foreground text-sm" data-testid="text-footer-credit">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>and</span>
            <Coffee className="w-4 h-4 text-amber-500" />
            <span>by</span>
            <span className="font-semibold text-foreground">Axel</span>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground text-sm" data-testid="text-footer-copyright">
            <Code className="w-4 h-4" />
            <span>{currentYear} All rights reserved</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
