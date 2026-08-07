import projectsData from "./projects.json";

export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  materials?: string;
  description: string;

  thumbnail: string;
  cover: string;

  overview?: string;
  images?: string[];
};


export const projects: Project[] = projectsData;