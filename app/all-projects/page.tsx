import ProjectOverviewCard from "../components/projects/ProjectOverviewCard";
import { projectsData } from "../data/projects/projectsData";

export default function AllProjects() {
  return (
    <main className="AllProjects grid grid-cols-1 lg:grid-cols-2 gap-10">
      {projectsData.map((project) => {
        return (
          <div className="border border-accent-one">
            <ProjectOverviewCard project={project} key={project.id} />
          </div>
        );
      })}
    </main>
  );
}
