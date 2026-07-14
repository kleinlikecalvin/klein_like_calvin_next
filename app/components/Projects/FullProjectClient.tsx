"use client";

import { projectsData } from "@/app/data/projects/projectsData";
import { useSearchParams } from "next/navigation";
import Divider from "../Divider";
import Link from "next/link";
import WavyDivider from "../WavyDivider";
import Skills from "./Skills";
import ImagesCarousel from "../Carousel/ImagesCarousel";
import MultiColorContainer from "../MultiColorContainer";

export default function FullProjectClient() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "";
  const project = projectsData.find((project) => project.id === id);

  // TODO: Not found UI, maybe customize the bullet points, QA all project CTA display text - there is room for more

  if (!project) return;

  const { title, year, role, images, skills, page, preview } = project;

  return (
    <main className="Project flex flex-col gap-12">
      <section className="header flex flex-col justify-between gap-6 lg:flex-row">
        <div className="details">
          <h1 className="title">{title}</h1>
          <p className="year-role text-lg lg:text-2xl">
            <span>{year}</span>
            <Divider />
            <span>{role}</span>
          </p>
        </div>
        {page?.livePage && (
          <Link
            href={page.livePage.url}
            className="live-page scale border-accent-two text-accent-two hover:bg-accent-two hover:text-background h-fit w-fit border-2 bg-transparent font-bold max-lg:underline max-lg:underline-offset-2"
            target="_blank"
            rel="noreferrer noopener"
          >
            {page.livePage.displayText}
          </Link>
        )}
      </section>
      <MultiColorContainer>
        <p className="tldr multi-color-child">
          <h3>TLDR </h3>
          {preview.tldr}
        </p>
      </MultiColorContainer>
      <WavyDivider />
      <section className="skills">
        <h3>Skills</h3>
        <Skills skills={skills} />
      </section>
      <WavyDivider />
      {images && images.length > 1 && (
        <>
          <section>
            <ImagesCarousel
              label={`${project.title} image carousel`}
              images={images}
              title="Gallery"
            />
          </section>
        </>
      )}
      <WavyDivider />
      <section>
        <h3>Achievements</h3>
        <ul className="achievements list-inside list-disc">
          {page.achievements.map((achievement, i) => (
            <li key={i} className="py-3">
              {achievement}
            </li>
          ))}
        </ul>
      </section>
      <WavyDivider />

      {!!page.callouts && (
        <>
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
          <WavyDivider />
        </>
      )}
    </main>
  );
}
