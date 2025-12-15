import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import type { BlogPost } from "@shared/schema";

const fallbackPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with React and TypeScript",
    excerpt: "A beginner-friendly guide to setting up your first React project with TypeScript. Learn the basics and start building type-safe applications.",
    content: "Full content here...",
    category: "Development",
    date: "Dec 10, 2025",
    readTime: "5 min read",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "My Journey as a Self-Taught Developer",
    excerpt: "From zero to building cool projects - here's my story of learning to code, the challenges I faced, and what kept me going.",
    content: "Full content here...",
    category: "Personal",
    date: "Dec 5, 2025",
    readTime: "8 min read",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    id: 3,
    title: "Design Tips for Developers",
    excerpt: "You don't need to be a designer to create beautiful interfaces. Here are practical tips to level up your UI game as a developer.",
    content: "Full content here...",
    category: "Design",
    date: "Nov 28, 2025",
    readTime: "6 min read",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 4,
    title: "Why Indie Music Hits Different",
    excerpt: "Exploring the magic of indie music and why it resonates with so many people. From Wave to Earth to Rex Orange County.",
    content: "Full content here...",
    category: "Music",
    date: "Nov 20, 2025",
    readTime: "4 min read",
    gradient: "from-green-500 to-emerald-500",
  },
];

export function BlogSection() {
  const { data: blogPosts, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  const posts = blogPosts && blogPosts.length > 0 ? blogPosts : fallbackPosts;

  return (
    <section id="blog" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-blog">
            Latest <span className="text-gradient">Blog</span> Posts
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-blog-description">
            Thoughts, tutorials, and random musings about tech, design, and life
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex items-center justify-center py-16" data-testid="loading-blog">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : error ? (
          <div className="text-center py-16 text-muted-foreground" data-testid="error-blog">
            Failed to load blog posts. Showing sample content.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8" data-testid="grid-blog-posts">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card overflow-hidden group cursor-pointer"
                data-testid={`card-blog-${post.id}`}
              >
                <div className={`h-2 bg-gradient-to-r ${post.gradient}`} />
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <Badge variant="secondary" className="text-xs" data-testid={`badge-category-${post.id}`}>
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1" data-testid={`text-date-${post.id}`}>
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1" data-testid={`text-readtime-${post.id}`}>
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors" data-testid={`text-title-${post.id}`}>
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4" data-testid={`text-excerpt-${post.id}`}>
                    {post.excerpt}
                  </p>

                  <button 
                    className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all"
                    data-testid={`button-read-more-${post.id}`}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" className="glass-button" data-testid="button-view-all-posts">
            <BookOpen className="w-4 h-4 mr-2" />
            View All Posts
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
