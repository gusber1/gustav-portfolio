import Link from "next/link";
import { projects } from "@/data/projects";


export default function AdminPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">


      <div className="flex justify-between items-center mb-12">

        <h1 className="text-4xl font-medium">
          Portfolio Admin
        </h1>


        <Link
          href="/admin/projects/new"
          className="
            border
            rounded
            px-5
            py-3
            hover:bg-neutral-100
          "
        >
          + New Project
        </Link>

      </div>



      <div className="space-y-8">

        {projects.map((project) => (

          <Link
            key={project.slug}
            href={`/admin/projects/${project.slug}`}
            className="
              block
              border
              rounded-xl
              p-6
              hover:bg-neutral-50
            "
          >

            <h2 className="text-2xl font-medium">
              {project.title}
            </h2>

            <p className="text-neutral-500 mt-2">
              {project.category}
            </p>

          </Link>

        ))}

      </div>

      <footer className="mt-32 pt-8 border-t border-neutral-200 flex justify-between text-sm text-neutral-500">

  <a
    href="https://www.instagram.com/ratstyletm/"
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