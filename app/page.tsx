import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";


export default function Home() {

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">


      <header className="mb-12">

        <h1 className="text-5xl font-medium">
          Gustav Bergholt
        </h1>


        <p className="mt-6 max-w-xl text-lg text-neutral-600 whitespace-pre-line">
  Gothenburg based designer exploring the relationship between materials,
  functionality and human interaction.
 <br />
  <br />
  Currently at HDK-Valand, University of Gothenburg, studying Bachelor of fine arts in design, with a focus on product and furniture design.
</p>

      </header>



      <section className="space-y-12">

        {projects.map((project) => (

          <ProjectCard
            key={project.title}
            project={project}
          />

        ))}

      </section>

      <footer className="mt-32 pt-8 border-t border-neutral-200 flex justify-between text-sm text-neutral-500">

  <a
    href="https://www.instagram.com/gustavbergholt.se/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-neutral-900 transition-colors"
  >
    Contact
  </a>

  <p>
    Gothenburg 2026
  </p>

</footer>


    </main>
  );
}