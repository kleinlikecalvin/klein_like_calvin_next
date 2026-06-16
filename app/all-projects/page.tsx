import ProjectOverviewCard from "../components/Projects/ProjectOverviewCard";
import { projectsData } from "../data/projects/projectsData";

// TODO: add pagination so we aren't loading a bunch of projects all at once

export default function AllProjects() {
  return (
    <main className="AllProjects mx-5 grid grid-cols-1 gap-10 lg:mx-0 lg:grid-cols-2">
      {projectsData.map((project, i) => {
        return (
          <ProjectOverviewCard
            project={project}
            classes="border border-accent-one"
            key={project.id}
            position={i}
          />
        );
      })}
    </main>
  );
}
