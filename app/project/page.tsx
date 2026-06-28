"use client";

import { useSearchParams } from "next/navigation";
import { projectsData } from "../data/projects/projectsData";
import MultiColorContainer from "../components/MultiColorContainer";
import Skills from "../components/Projects/Skills";
import Divider from "../components/Divider";
import ImagesCarousel from "../components/Carousel/ImagesCarousel";
import Link from "next/link";

export default function Project() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "";
  const project = projectsData.find((project) => project.id === id);

  // TODO: Not found UI, maybe customize the bullet points, QA all project CTA display text - there is room for more

  if (!project) return;

  const { title, year, role, images, skills, resources, page, preview } =
    project;

  return (
    <main className="Project mx-5 flex flex-col gap-12 lg:mx-0 lg:gap-20">
      <section className="header flex flex-col justify-between max-lg:gap-6 lg:flex-row">
        <div className="details">
          <h1 className="title">{title}</h1>
          <p className="year-role text-lg lg:text-2xl">
            <span>{year}</span>
            <Divider />
            <span>{role}</span>
          </p>
        </div>
        <Link
          href={page.livePage.url}
          className="live-page scale border-accent-two text-accent-two hover:bg-accent-two w-fit border-2 bg-transparent font-bold hover:text-white max-lg:underline max-lg:underline-offset-2 lg:w-max"
          target="_blank"
          rel="noreferrer noopener"
        >
          {page.livePage.displayText}
        </Link>
      </section>
      <MultiColorContainer>
        <section className="skills multi-color-child flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4">
          <h3>Skills</h3>
          <Skills skills={skills} />
        </section>
      </MultiColorContainer>
      <p className="tldr">
        <span className="special">TLDR: </span>
        {preview.tldr}
      </p>
      {images && images.length > 1 && (
        <section>
          <ImagesCarousel
            label={`${project.title} image carousel`}
            images={images}
            title="Gallery"
          />
        </section>
      )}
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
          <div className="flex flex-wrap gap-5">
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
