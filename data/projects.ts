export type Project = {
  title: string;
  year: string;
  category: string;
  description: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "Drömfångaren",
    year: "2026",
    category: "Interactive Object / Design",
    description:
      "En fysisk maskin som fångar, materialiserar och bevarar drömmar genom ljud, AI och taktil interaktion.",
    image: "images/dreamcatcher/cover.jpg",
  },
];