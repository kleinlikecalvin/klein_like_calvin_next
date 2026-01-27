import { projectsData } from "../../data/projects/projectsData";
import ProjectOverviewCard from "../projects/ProjectOverviewCard";

export default function ProjectOverview() {
  return (
    <section className="ProjectOverview bg-accent-two rounded-[38px] p-10">
      <div className="cards-container grid-cols-1 lg:grid-cols-2 gap-10 grid">
        {projectsData.slice(0, 2).map((project, i) => {
          return <ProjectOverviewCard project={project} key={i} />;
        })}
      </div>
      {projectsData.length > 2 && (
        <div className="button-container mt-10 text-lg font-medium text-center hover:scale-[1.05]">
          <a href="/all-projects">more projects</a>
        </div>
      )}
    </section>
  );
}
