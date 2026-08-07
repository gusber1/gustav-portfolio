"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Project } from "@/data/projects";


export default function ProjectEditor({
  project,
}: {
  project: Project;
}) {


  const router = useRouter();


  const [form, setForm] = useState<Project>(project);


  const [images, setImages] = useState<string[]>(
    project.images || []
  );



  const inputClass =
    "border rounded-lg p-4 w-full text-base focus:outline-none focus:ring-1 focus:ring-black";


  const textareaClass =
    "border rounded-lg p-4 w-full text-base leading-relaxed resize-y focus:outline-none focus:ring-1 focus:ring-black";




  function updateField(
    field: keyof Project,
    value: string
  ) {

    setForm((current) => ({

      ...current,

      [field]: value,

    }));

  }





  function addImage() {

    setImages((current) => [

      ...current,

      "",

    ]);

  }





  function updateImage(
    index: number,
    value: string
  ) {

    setImages((current) => {

      const updated = [...current];

      updated[index] = value;

      return updated;

    });

  }





  async function saveProject() {


    const updatedProject = {

      ...form,

      images,

    };



    console.log(
      "Saving:",
      updatedProject
    );



    const response = await fetch(
      "/api/projects",
      {

        method: "POST",

        headers: {

          "Content-Type": "application/json",

        },

        body: JSON.stringify(
          updatedProject
        ),

      }
    );



    if(response.ok){

      alert(
        "Project saved!"
      );

      router.refresh();


    } else {


      alert(
        "Save failed"
      );


    }


  }





  return (

    <div className="mt-12 space-y-16 max-w-4xl">





      <section>


        <h2 className="text-xl font-medium mb-8">
          Project information
        </h2>



        <div className="space-y-8">



          <div>

            <label className="block text-sm mb-2">
              Title
            </label>


            <input

              className={inputClass}

              value={form.title}

              onChange={(e)=>
                updateField(
                  "title",
                  e.target.value
                )
              }

            />

          </div>





          <div>

            <label className="block text-sm mb-2">
              Slug
            </label>


            <input

              className={inputClass}

              value={form.slug}

              onChange={(e)=>
                updateField(
                  "slug",
                  e.target.value
                )
              }

            />

          </div>





          <div>

            <label className="block text-sm mb-2">
              Year
            </label>


            <input

              className={inputClass}

              value={form.year}

              onChange={(e)=>
                updateField(
                  "year",
                  e.target.value
                )
              }

            />

          </div>





          <div>

            <label className="block text-sm mb-2">
              Category
            </label>


            <input

              className={inputClass}

              value={form.category}

              onChange={(e)=>
                updateField(
                  "category",
                  e.target.value
                )
              }

            />

          </div>





          <div>

            <label className="block text-sm mb-2">
              Materials
            </label>


            <textarea

              className={textareaClass}

              rows={4}

              value={form.materials || ""}

              onChange={(e)=>
                updateField(
                  "materials",
                  e.target.value
                )
              }

            />

          </div>





          <div>

            <label className="block text-sm mb-2">
              Description
            </label>


            <textarea

              className={textareaClass}

              rows={8}

              value={form.description}

              onChange={(e)=>
                updateField(
                  "description",
                  e.target.value
                )
              }

            />

          </div>


        </div>


      </section>









      <section>


        <h2 className="text-xl font-medium mb-8">
          Images
        </h2>



        <div className="space-y-10">





          <div>

            <label className="block text-sm mb-2">
              Thumbnail
            </label>


            <input

              className={inputClass}

              value={form.thumbnail}

              onChange={(e)=>
                updateField(
                  "thumbnail",
                  e.target.value
                )
              }

            />

          </div>






          <div>

            <label className="block text-sm mb-2">
              Cover
            </label>


            <input

              className={inputClass}

              value={form.cover}

              onChange={(e)=>
                updateField(
                  "cover",
                  e.target.value
                )
              }

            />

          </div>







          <div>


            <label className="block text-sm mb-2">
              Gallery images
            </label>



            <div className="space-y-6">


              {images.map(
                (image,index)=>(


                  <input

                    key={index}

                    className={inputClass}

                    value={image}

                    placeholder="/images/project/image.jpg"

                    onChange={(e)=>
                      updateImage(
                        index,
                        e.target.value
                      )
                    }

                  />


                )
              )}



              <button

                type="button"

                onClick={addImage}

                className="
                  border
                  rounded-lg
                  px-5
                  py-3
                "

              >

                + Add image

              </button>



            </div>


          </div>



        </div>


      </section>









      <section>


        <h2 className="text-xl font-medium mb-8">
          Content
        </h2>



        <label className="block text-sm mb-2">
          Overview
        </label>



        <textarea

          className={textareaClass}

          rows={16}

          value={form.overview || ""}

          onChange={(e)=>
            updateField(
              "overview",
              e.target.value
            )
          }

        />


      </section>








      <button

        type="button"

        onClick={saveProject}

        className="
          bg-black
          text-white
          px-8
          py-4
          rounded-lg
        "

      >

        Save project

      </button>



    </div>

  );

}