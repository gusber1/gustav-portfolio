import Image from "next/image";
import { Project } from "@/data/projects";

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <article className="group">
      <div className="overflow-hidden rounded-xl">
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={800}
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-4">
        <p className="text-sm text-neutral-500">
          {project.year} — {project.category}
        </p>

        <h2 className="text-2xl font-medium mt-1">
          {project.title}
        </h2>

        <p className="mt-2 text-neutral-600">
          {project.description}
        </p>
      </div>
    </article>
  );
}