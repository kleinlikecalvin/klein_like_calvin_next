import Link from "next/link";
import { projectsData } from "../../data/projects/projects_data";
import ProjectOverviewCard from "./ProjectOverviewCard";

export default function ProjectOverview() {
  return (
    <section className="ProjectOverview bg-special-one flex flex-col gap-5 rounded-3xl p-5 lg:gap-11 lg:rounded-[38px] lg:p-10">
      <h2 className="text-background m-0 text-center">I've got projects.</h2>
      <div className="cards-container grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10">
        {projectsData.slice(0, 2).map((project) => {
          return <ProjectOverviewCard project={project} key={project.id} />;
        })}
      </div>
      {projectsData.length > 2 && (
        <Link
          href="/all-projects"
          className="scale bg-accent-two mx-auto w-max"
        >
          view more projects
        </Link>
      )}
    </section>
  );
}
