import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";


export async function POST(request: Request) {


  const updatedProject = await request.json();


  const filePath = path.join(
    process.cwd(),
    "data",
    "projects.json"
  );


  const file = fs.readFileSync(
    filePath,
    "utf-8"
  );


  const projects = JSON.parse(file);



  const updatedProjects = projects.map(
    (project: any) => {


      if (project.slug === updatedProject.slug) {

        return updatedProject;

      }


      return project;


    }
  );



  fs.writeFileSync(

    filePath,

    JSON.stringify(
      updatedProjects,
      null,
      2
    )

  );



  return NextResponse.json({

    success: true,

  });


}