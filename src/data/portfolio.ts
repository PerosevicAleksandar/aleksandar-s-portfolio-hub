/**
 * Sample portfolio data (no backend — everything here is static sample data).
 */

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export const SKILL_GROUPS = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Vue", "Angular"],
  },
  {
    title: "Styling",
    skills: ["Tailwind CSS", "Bootstrap 5", "Responsive Design"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub"],
  },
  {
    title: "Other",
    skills: ["Basic API Integration"],
  },
] as const;

export type Project = {
  name: string;
  description: string;
  tech: string[];
  url: string;
};

export const PROJECTS: Project[] = [
  {
    name: "eCommerce Product Page",
    description:
      "A responsive product details page featuring a product image, price, description and Add to Cart functionality.",
    tech: ["React", "CSS", "JavaScript"],
    url: "#",
  },
  {
    name: "To Do App",
    description:
      "A simple task management application where users can add new tasks, mark tasks as completed and delete tasks.",
    tech: ["React", "useState", "CSS"],
    url: "#",
  },
  {
    name: "Weather Dashboard",
    description:
      "A responsive weather dashboard that displays weather information using sample API data.",
    tech: ["JavaScript", "API", "Responsive Design"],
    url: "#",
  },
];

export const CONTACT = {
  email: "perosevica02@gmail.com",
  github: "https://github.com/PerosevicAleksandar",
  linkedin: "/",
};
