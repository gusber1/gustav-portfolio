import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";


export async function POST(
  request: Request
) {

  try {

    const updatedProject = await request.json();


    const filePath = path.join(
      process.cwd(),
      "data",
      "projects.json"
    );


    const existingProjects = JSON.parse(
      fs.readFileSync(
        filePath,
        "utf8"
      )
    );


    const updatedProjects =
      existingProjects.map(
        (project: any) =>
          project.slug === updatedProject.slug
            ? updatedProject
            : project
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


  } catch (error) {

    console.error(error);


    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );

  }

}