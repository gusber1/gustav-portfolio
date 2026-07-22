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
          Designer and engineer exploring the relationship
          between materials, technology and human interaction.
        </p>
      </header>


      <section>
        <h2 className="text-sm uppercase tracking-wide mb-8">
          Selected projects
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </section>


      <footer className="mt-32 border-t pt-8">
        <p>
          Contact — Gustav Bergholt
        </p>
      </footer>

    </main>
  );
}