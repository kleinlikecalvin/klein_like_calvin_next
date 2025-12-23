import "../../styles/components/landing/_ProjectOverview.scss";
import { projectsData } from "../../data/projects/projectsData.ts";
import ProjectCard from "../projects/ProjectOverviewCard.tsx";

export default function ProjectOverview() {
  return (
    <section className="ProjectOverview">
      <div className="cards-container">
        {projectsData.slice(0, 2).map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
      {projectsData.length > 2 && (
        <div className="button-container">
          <a href="/all-projects">more projects</a>
        </div>
      )}
    </section>
  );
}
