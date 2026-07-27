"use client";

import { useState } from "react";
import ProjectOverviewCard from "../components/Projects/ProjectOverviewCard";
import { projectsData } from "../data/projects/projectsData";
import { Project } from "../types/project_types";

export default function AllProjects() {
  // Start with displaying only 4 projects
  const [projects, setProjects] = useState<Project[]>(projectsData.slice(0, 4));

  function getNextFourProjects() {
    const nextBatch = projectsData.slice(projects.length, projects.length + 4);

    setProjects((prev) => [...prev, ...nextBatch]);
  }

  return (
    <main className="AllProjects">
      <div className="project-container grid grid-cols-1 gap-10 lg:grid-cols-2">
        {projects.map((project, i) => {
          return (
            <ProjectOverviewCard
              project={project}
              classes="border border-accent-one"
              key={project.id}
              position={i}
            />
          );
        })}
      </div>
      <button
        className="load-more scale mx-auto my-10"
        onClick={getNextFourProjects}
      >
        load more
      </button>
    </main>
  );
}
