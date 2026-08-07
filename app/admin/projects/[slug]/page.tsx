import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectEditor from "./ProjectEditor";


export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}



export default async function EditProjectPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {


  const { slug } = await params;


  const project = projects.find(
    (project) => project.slug === slug
  );


  if (!project) {
    notFound();
  }



  return (
    <main className="max-w-4xl mx-auto px-6 py-16">


      <h1 className="text-4xl font-medium">
        Edit: {project.title}
      </h1>


      <ProjectEditor
        project={project}
      />


    </main>
  );
}