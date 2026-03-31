import { projectsData } from "../../data/projects/projectsData";
import ProjectOverviewCard from "../projects/ProjectOverviewCard";

export default function ProjectOverview() {
  return (
    <section className="ProjectOverview bg-accent-two rounded-[38px] p-10">
      <div className="cards-container grid-cols-1 lg:grid-cols-2 gap-10 grid">
        {projectsData.slice(0, 2).map((project) => {
          return <ProjectOverviewCard project={project} key={project.id} />;
        })}
      </div>
      {projectsData.length > 2 && (
        <a
          href="/all-projects"
          className="mt-11 text-lg font-medium text-center w-max mx-auto hover:bg-background border-2 hover:text-special-one"
        >
          more projects
        </a>
      )}
    </section>
  );
}
