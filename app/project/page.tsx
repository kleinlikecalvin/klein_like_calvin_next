"use client";

import { useSearchParams } from "next/navigation";
import { projectsData } from "../data/projects/projectsData";

export default function Project() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "";
  const project = projectsData.find((project) => project.id === id);

  // TODO: Not found UI
  if (!project) return;

  return (
    <main className="Project flex flex-col gap-10">
      <section className="header flex justify-between">
        <div className="details">
          <h1 className="title text-4xl">{project.title}</h1>
          <p className="year-role">
            <span>{project.year}</span> | <span>{project.role}</span>
          </p>
        </div>
        <a
          href={project.page.livePage.url}
          className="live-page w-max h-max scale"
        >
          {project.page.livePage.displayText}
        </a>
      </section>
      <p className="blurb">
        <span className="special">TLDR: </span>
        {project.preview.blurb}
      </p>
      {project.images && (
        <img src={project.images[0].src} alt={project.images[0].alt} />
      )}
      <ul className="achievements">
        {project.page.achievements.map((achievement, i) => (
          <li key={i}>{achievement}</li>
        ))}
      </ul>
      <ul className="skills">
        {project.skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
      {project.images && project.images.length > 1 && (
        <ul className="images-carousel">
          {project.images.map((image) => (
            <li className="image">
              <img src={image.src} alt={image.alt} />
            </li>
          ))}
        </ul>
      )}
      {!!project.resources && (
        <div className="resources">
          {project.resources.map((resource, i) => (
            <p key={i}>
              <a href={resource.url}>{resource.displayValue}</a>
            </p>
          ))}
        </div>
      )}
      {!!project.page.callouts && (
        <ul className="callouts">
          {project.page.callouts.map((callout, i) => (
            <li key={i}>{callout}</li>
          ))}
        </ul>
      )}
    </main>
  );
}
