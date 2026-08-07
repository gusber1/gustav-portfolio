
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">

      <header className="mb-24">
        <h1 className="text-5xl font-medium">
          Gustav Bergholt
        </h1>

        <p className="mt-6 max-w-xl text-lg text-neutral-600">
          Gothenburg based designer exploring the relationship between materials,
          functionality and human interaction.

          Currently at HDK-Valand, University of Gothenburg, studying Bachelor of fine arts in design, with a focus on product and furniture design.
        </p>
      </header>

      <section className="space-y-24">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
          />
        ))}
      </section>

    </main>
  );
}
