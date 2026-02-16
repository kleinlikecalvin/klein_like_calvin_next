import { projectsData } from "../../data/projects/projectsData";
import ProjectOverviewCard from "../projects/ProjectOverviewCard";

export default function ProjectOverview() {
  return (
    <section className="ProjectOverview bg-accent-two rounded-[38px] p-10">
      <div className="cards-container grid-cols-1 lg:grid-cols-2 gap-10 grid">
        {projectsData.slice(0, 2).map((project, i) => {
          return <ProjectOverviewCard project={project} key={project.id} />;
        })}
      </div>
      {projectsData.length > 2 && (
        <a
          href="/all-projects"
          // TODO - maybe should fix the scale of this button so it doesn't go past it's container
          className="mt-10 text-lg font-medium text-center rounded-[20px] bg-special-one text-background"
        >
          more projects
        </a>
      )}
    </section>
  );
}
