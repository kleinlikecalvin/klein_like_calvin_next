"use client";

import { useSearchParams } from "next/navigation";
import { projectsData } from "../data/projects/projectsData";
import MultiColorContainer from "../components/MultiColorContainer";
import Skills from "../components/Projects/Skills";
import Image from "next/image";
import { Image as ImageType } from "../types/project_types";
import Divider from "../components/Divider";
import ImagesCarousel from "../components/Carousel/ImagesCarousel";
import Link from "next/link";

export default function Project() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "";
  const project = projectsData.find((project) => project.id === id);

  // TODO: Not found UI
  if (!project) return;

  const { title, year, role, images, skills, resources, page, preview } =
    project;

  return (
    <main className="Project mx-5 flex flex-col gap-10 lg:mx-0">
      <section className="header flex flex-col-reverse justify-between max-lg:gap-4 lg:flex-row">
        <div className="details">
          <h1 className="title">{title}</h1>
          <p className="year-role">
            <span>{year}</span>
            <Divider />
            <span>{role}</span>
          </p>
        </div>
        <Link
          href={page.livePage.url}
          className="live-page scale h-max w-max max-lg:text-sm max-lg:font-bold max-lg:underline max-lg:underline-offset-2"
          target="_blank"
          rel="noreferrer noopener"
        >
          {page.livePage.displayText}
        </Link>
      </section>
      {images && images.length > 1 && (
        <section>
          <h3>Gallery</h3>
          <ImagesCarousel
            label={`${project.title} image carousel`}
            images={images}
          />
        </section>
      )}
      <p className="tldr">
        <span className="special">TLDR: </span>
        {preview.tldr}
      </p>
      <MultiColorContainer>
        <section className="skills multi-color-child flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4">
          <h3>Skills</h3>
          <Skills skills={skills} />
        </section>
      </MultiColorContainer>
      <MultiColorContainer>
        <section className="multi-color-child">
          <h3>Achievements</h3>
          <ul className="achievements list-inside list-disc">
            {page.achievements.map((achievement, i) => (
              <li key={i} className="py-3">
                {achievement}
              </li>
            ))}
          </ul>
        </section>
      </MultiColorContainer>
      {!!page.callouts && (
        <section className="callouts">
          <h3>Callouts</h3>
          <ul className="list-inside list-disc">
            {page.callouts.map((callout, i) => (
              <li key={i} className="py-3">
                {callout}
              </li>
            ))}
          </ul>
        </section>
      )}
      {!!resources && (
        <section className="resources">
          <h3>Resources</h3>
          <div className="flex gap-5">
            {resources.map((resource, i) => (
              <Link href={resource.url} className="inline-block w-max" key={i}>
                {resource.displayValue}
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
