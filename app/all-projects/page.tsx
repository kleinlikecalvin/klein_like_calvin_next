import ProjectOverviewCard from "../components/Projects/ProjectOverviewCard";
import { projectsData } from "../data/projects/projectsData";
import { Project } from "../types/project_types";

// TODO: add pagination so we aren't loading a bunch of projects all at once
// TODO: maybe if they're current year projects they don't need to be in accordions but past ones are or remove accordion idea and follow through with pagination instead

export default function AllProjects() {
  const groupedProjects = projectsData.reduce<Record<string, Project[]>>(
    (acc, project) => {
      const key = project.year;

      if (!acc[key]) {
        acc[key] = [];
      }

      acc[key].push(project);

      return acc;
    },
    {},
  );

  return (
    <main className="AllProjects flex flex-col gap-10">
      {Object.entries(groupedProjects)
        .reverse()
        .map(([year, projects], i) => {
          if (year && projects) {
            return (
              <details
                key={i}
                className="bg-special-one p-full rounded-[34px]"
                open={i === 0 ? true : false}
              >
                <summary className="text-background">{year}</summary>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-full">
                  {projects.map((project) => (
                    <ProjectOverviewCard
                      project={project}
                      classes="border border-accent-one"
                      key={project.id}
                      position={i}
                    />
                  ))}
                </div>
              </details>
            );
          }
        })}
    </main>
  );
}
