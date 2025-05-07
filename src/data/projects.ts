
export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  url: string;
  tags?: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Redesign",
    description: "A modern portfolio site with animations and smooth scrolling",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    url: "https://example.com/portfolio",
    tags: ["React", "Tailwind", "Framer Motion"],
    featured: true
  },
  {
    id: "2",
    title: "E-commerce Dashboard",
    description: "Admin dashboard for managing online store products and orders",
    imageUrl: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    url: "https://example.com/dashboard",
    tags: ["React", "TypeScript", "Recharts"]
  },
  {
    id: "3",
    title: "Fitness Tracker",
    description: "Mobile-first app for tracking workouts and nutrition",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    url: "https://example.com/fitness",
    tags: ["React Native", "Firebase"]
  },
  {
    id: "4",
    title: "Recipe Finder",
    description: "Search and discover recipes based on ingredients you have",
    imageUrl: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
    url: "https://example.com/recipes",
    tags: ["Vue", "Tailwind"]
  },
  {
    id: "5",
    title: "Weather App",
    description: "Real-time weather forecasts with beautiful visualizations",
    imageUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    url: "https://example.com/weather",
    tags: ["React", "Chart.js", "OpenWeather API"]
  },
  {
    id: "6",
    title: "Task Manager",
    description: "Simple and efficient task management application",
    url: "https://example.com/tasks",
    tags: ["React", "Redux"]
  },
  {
    id: "7",
    title: "Blog Platform",
    description: "Minimalist blogging platform with markdown support",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    url: "https://example.com/blog",
    tags: ["Next.js", "Prisma", "Tailwind"]
  },
  {
    id: "8",
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media performance",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    url: "https://example.com/social",
    tags: ["React", "D3.js"]
  }
];
