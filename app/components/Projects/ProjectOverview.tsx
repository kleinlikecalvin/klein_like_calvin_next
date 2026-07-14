import Link from "next/link";
import { projectsData } from "../../data/projects/projectsData";
import ProjectOverviewCard from "./ProjectOverviewCard";

export default function ProjectOverview() {
  return (
    <section className="ProjectOverview bg-special-two rounded-3xl p-3 lg:rounded-[38px] lg:px-10 lg:py-11">
      <div className="cards-container grid grid-cols-1 gap-10 lg:grid-cols-2">
        {projectsData.slice(0, 2).map((project) => {
          return <ProjectOverviewCard project={project} key={project.id} />;
        })}
      </div>
      {projectsData.length > 2 && (
        <Link
          href="/all-projects"
          className="button-link scale mx-auto mt-11 w-max font-bold"
        >
          view more projects
        </Link>
      )}
    </section>
  );
}
