
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";


export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}


export default async function ProjectPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {

  const { slug } = await params;


  const project = projects.find(
    (project) =>
      project.slug === slug
  );


  if (!project) {
    notFound();
  }



  return (

    <main className="max-w-6xl mx-auto px-6 py-12">



      {/* HEADER */}

      <header className="mb-12">

        <p className="text-sm text-neutral-500">
          {project.year} — {project.category}
        </p>


        <h1 className="text-4xl font-medium mt-2">
          {project.title}
        </h1>


        <p className="
          mt-4
          max-w-2xl
          text-lg
          text-neutral-600
          whitespace-pre-line
        ">
          {project.description}
        </p>


      </header>






      {/* HERO IMAGE */}


      <div className="
        w-full
        aspect-[4/3]
        relative
        overflow-hidden
        rounded-xl
      ">


        <Image

          src={project.cover}

          alt={project.title}

          fill

          className="object-cover"

          priority

        />


      </div>







      {/* OVERVIEW */}



      {project.overview && (

        <section className="
          mt-16
          max-w-3xl
        ">


          <h2 className="
            text-xl
            font-medium
            mb-3
          ">

            Overview

          </h2>



          <p className="
            text-base
            leading-relaxed
            text-neutral-700
            whitespace-pre-line
          ">

            {project.overview}

          </p>



        </section>

      )}








      {/* MATERIALS */}



      {project.materials && (

        <section className="
          mt-12
          max-w-3xl
        ">


          <h2 className="
            text-xl
            font-medium
            mb-3
          ">

            Materials

          </h2>




          <p className="
            text-base
            leading-relaxed
            text-neutral-700
            whitespace-pre-line
          ">

            {project.materials}

          </p>




        </section>

      )}









      {/* GALLERY */}



      {project.images &&
        project.images.length > 0 && (


        <section className="mt-16">


          <div className="
            grid
            grid-cols-2
            gap-6
          ">



            {project.images.map(
              (image) => (


              <div
                key={image}
                className="
                  aspect-[4/3]
                  relative
                  overflow-hidden
                  rounded-xl
                "
              >


                <Image

                  src={image}

                  alt={project.title}

                  fill

                  className="object-cover"

                />


              </div>



            ))}



          </div>



        </section>

        



      )}

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

