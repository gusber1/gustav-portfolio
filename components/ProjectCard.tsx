
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <article className="w-full">

      <Link
        href={`/projects/${project.slug}`}
        className="group block w-full"
      >

        <div className="w-full h-[300px] overflow-hidden rounded-xl">
          <Image
            src={project.thumbnail}
            alt={project.title}
            width={1600}
            height={900}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="mt-4">

          <p className="text-sm text-neutral-500">
            {project.year} — {project.category}
          </p>

          <h2 className="text-2xl font-medium mt-1">
            {project.title}
          </h2>

          <p className="mt-2 max-w-2xl text-neutral-600">
            {project.description}
          </p>

        </div>

      </Link>

    </article>
  );
}

