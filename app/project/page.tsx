"use client";

import { useSearchParams } from "next/navigation";
import { projectsData } from "../data/projects/projectsData";
import MultiColorContainer from "../components/MultiColorContainer";
import Skills from "../components/projects/Skills";
import Image from "next/image";
import { Image as ImageType } from "../types/project_types";
import Divider from "../components/Divider";

export default function Project() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "";
  const project = projectsData.find((project) => project.id === id);

  // TODO: Not found UI
  if (!project) return;

  const { title, year, role, images, skills, resources, page, preview } =
    project;

  return (
    <main className="Project flex flex-col gap-10">
      <section className="header flex justify-between">
        <div className="details">
          <h1 className="title">{title}</h1>
          <p className="year-role">
            <span>{year}</span>
            <Divider />
            <span>{role}</span>
          </p>
        </div>
        <a href={page.livePage.url} className="live-page w-max h-max scale">
          {page.livePage.displayText}
        </a>
      </section>
      <MultiColorContainer>
        <p className="blurb multi-color-child">
          <span className="special">TLDR: </span>
          {preview.blurb}
        </p>
      </MultiColorContainer>
      {images && (
        <Image
          src={images[0].src}
          alt={images[0].alt}
          height={images[0].height}
          width={images[0].width}
          className="w-auto h-full max-h-125 m-auto"
        />
      )}
      <MultiColorContainer>
        <section className="skills multi-color-child flex items-center gap-4">
          <h3>Skills</h3>
          <Skills skills={skills} />
        </section>
      </MultiColorContainer>
      <section>
        <h3>Achievements</h3>
        <ul className="achievements list-inside list-disc">
          {page.achievements.map((achievement, i) => (
            <li key={i} className="py-1">
              {achievement}
            </li>
          ))}
        </ul>
      </section>
      {images && images.length > 1 && (
        <ul className="images-carousel">
          {images.map((image: ImageType, i: number) => (
            <li className="image" key={i}>
              <Image
                src={image.src}
                alt={image.alt}
                height={images[0].height}
                width={images[0].width}
              />
            </li>
          ))}
        </ul>
      )}
      {!!page.callouts && (
        <MultiColorContainer>
          <section className="callouts multi-color-child">
            <h3>Callouts</h3>
            <ul className="list-inside list-disc">
              {page.callouts.map((callout, i) => (
                <li key={i} className="py-1">
                  {callout}
                </li>
              ))}
            </ul>
          </section>
        </MultiColorContainer>
      )}
      {!!resources && (
        <section className="resources">
          <h3>Resources</h3>
          {resources.map((resource, i) => (
            <a href={resource.url} className="w-max inline-block" key={i}>
              {resource.displayValue}
            </a>
          ))}
        </section>
      )}
    </main>
  );
}
