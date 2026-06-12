import { projectsData } from "../../data/projects/projectsData";
import ProjectOverviewCard from "./ProjectOverviewCard";

export default function ProjectOverview() {
  return (
    <section className="ProjectOverview bg-special-one rounded-3xl p-3 lg:rounded-[38px] lg:p-10">
      <div className="cards-container grid grid-cols-1 gap-10 lg:grid-cols-2">
        {projectsData.slice(0, 2).map((project) => {
          return <ProjectOverviewCard project={project} key={project.id} />;
        })}
      </div>
      {projectsData.length > 2 && (
        // TODO switch this to scale like the rest of them
        <a
          href="/all-projects"
          className="bg-background text-special-one hover:bg-special-one hover:text-background mx-auto mt-11 w-max border-2 text-center text-lg font-medium"
        >
          view more projects
        </a>
      )}
    </section>
  );
}
