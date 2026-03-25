"use client";

import { useSearchParams } from "next/navigation";
import { projectsData } from "../data/projects/projectsData";

export default function Project() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "";
  const project = projectsData.find((project) => project.id === id);

  if (!project) return;

  return (
    <main className="Project">
      {/*
year – role 
title
preview.Blurb
Image 0
githuburl
achievements
skills
the rest of the imagery
resources
callouts
*/}
      <p className="year-role">
        <span>{project.year}</span> | <span>{project.role}</span>
      </p>
      <h1 className="title">{project.title}</h1>
      <p className="blurb">{project.preview.blurb}</p>
      {project.images && (
        <img src={project.images[0].src} alt={project.images?.[0].alt} />
      )}
      {project.page.gitHubRepoUrl && (
        <a href={project.page.gitHubRepoUrl} className="git-hub"></a>
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
      {/* carousel w/ CSS */}
      <div className="resources">
        {project.resources?.map((resource, i) => (
          <p key={i}>
            <a href={resource.url}>{resource.displayValue}</a>
          </p>
        ))}
      </div>
      <ul className="callouts">
        {project.page.callouts?.map((callout, i) => (
          <li key={i}>{callout}</li>
        ))}
      </ul>
    </main>
  );
}
