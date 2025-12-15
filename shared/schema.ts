import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  gradient: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  type: "development" | "design";
  status?: string;
  github?: string;
  gradient: string;
}

export const insertBlogPostSchema = z.object({
  title: z.string().min(1),
  excerpt: z.string().min(1),
  content: z.string().min(1),
  category: z.string().min(1),
});

export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;

export const insertProjectSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  tags: z.array(z.string()),
  type: z.enum(["development", "design"]),
  status: z.string().optional(),
  github: z.string().optional(),
});

export type InsertProject = z.infer<typeof insertProjectSchema>;
