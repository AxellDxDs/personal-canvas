import { type User, type InsertUser, type BlogPost, type InsertBlogPost, type Project, type InsertProject } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  getProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
}

const gradients = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-violet-500",
  "from-pink-500 to-rose-500",
  "from-green-500 to-emerald-500",
  "from-orange-500 to-yellow-500",
];

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private blogPosts: Map<number, BlogPost>;
  private projects: Map<number, Project>;
  private blogPostId: number = 1;
  private projectId: number = 1;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    this.projects = new Map();
    this.initializeSampleData();
  }

  private initializeSampleData() {
    const sampleBlogPosts: Omit<BlogPost, "id">[] = [
      {
        title: "Getting Started with React and TypeScript",
        excerpt: "A beginner-friendly guide to setting up your first React project with TypeScript. Learn the basics and start building type-safe applications.",
        content: "Full content here...",
        category: "Development",
        date: "Dec 10, 2025",
        readTime: "5 min read",
        gradient: "from-blue-500 to-cyan-500",
      },
      {
        title: "My Journey as a Self-Taught Developer",
        excerpt: "From zero to building cool projects - here's my story of learning to code, the challenges I faced, and what kept me going.",
        content: "Full content here...",
        category: "Personal",
        date: "Dec 5, 2025",
        readTime: "8 min read",
        gradient: "from-purple-500 to-violet-500",
      },
      {
        title: "Design Tips for Developers",
        excerpt: "You don't need to be a designer to create beautiful interfaces. Here are practical tips to level up your UI game as a developer.",
        content: "Full content here...",
        category: "Design",
        date: "Nov 28, 2025",
        readTime: "6 min read",
        gradient: "from-pink-500 to-rose-500",
      },
      {
        title: "Why Indie Music Hits Different",
        excerpt: "Exploring the magic of indie music and why it resonates with so many people. From Wave to Earth to Rex Orange County.",
        content: "Full content here...",
        category: "Music",
        date: "Nov 20, 2025",
        readTime: "4 min read",
        gradient: "from-green-500 to-emerald-500",
      },
    ];

    sampleBlogPosts.forEach((post) => {
      this.blogPosts.set(this.blogPostId, { ...post, id: this.blogPostId });
      this.blogPostId++;
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort((a, b) => b.id - a.id);
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const id = this.blogPostId++;
    const gradient = gradients[id % gradients.length];
    const now = new Date();
    const date = now.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    const readTime = `${Math.ceil(post.content.split(" ").length / 200)} min read`;
    
    const blogPost: BlogPost = {
      id,
      ...post,
      date,
      readTime,
      gradient,
    };
    
    this.blogPosts.set(id, blogPost);
    return blogPost;
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(project: InsertProject): Promise<Project> {
    const id = this.projectId++;
    const gradient = gradients[id % gradients.length];
    
    const newProject: Project = {
      id,
      ...project,
      gradient,
    };
    
    this.projects.set(id, newProject);
    return newProject;
  }
}

export const storage = new MemStorage();
