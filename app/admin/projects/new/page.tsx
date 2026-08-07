import Link from "next/link";
import { projects } from "@/data/projects";


export default function ProjectsAdminPage() {


  return (

    <main className="max-w-4xl mx-auto px-6 py-16">


      <h1 className="text-4xl font-medium mb-12">
        Projects
      </h1>



      <div className="space-y-4">


        {projects.map((project) => (

          <Link

            key={project.slug}

            href={`/admin/projects/${project.slug}`}

            className="
              block
              border
              rounded-lg
              p-6
              hover:bg-neutral-50
            "

          >

            <h2 className="text-xl">
              {project.title}
            </h2>

            <p className="text-neutral-500">
              {project.year}
            </p>


          </Link>

        ))}



      </div>





      <Link

        href="/admin/projects/new"

        className="
          inline-block
          mt-12
          bg-black
          text-white
          px-6
          py-3
          rounded-lg
        "

      >

        + New project

      </Link>



    </main>

  );

}