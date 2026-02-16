import { Project } from "@/app/types/project_types";
import Image from "next/image";

export default function ProjectOverviewCard({ project }: { project: Project }) {
  return (
    <a
      href={project.page.url}
      className="ProjectOverviewCard rounded-[20px] p-half bg-background text-foreground"
    >
      <div className="image-container max-h-50 overflow-hidden border-b-special-one border-b">
        <Image
          className="w-full h-auto m-0 mx-auto"
          src={project.preview.thumbnail.src}
          alt={project.preview.thumbnail.alt}
          height={project.preview.thumbnail.height}
          width={project.preview.thumbnail.width}
        />
      </div>
      <div className="info pb-half border-b border-b-special-one">
        <div className="skills">
          <p className="special">skills</p>
          {project.skills.map((skill) => {
            return (
              <span className="skill" key={skill}>
                {skill}
              </span>
            );
          })}
        </div>
        <div className="blurb">
          <p className="special">blurb</p>
          <p className="blurb">{project.preview.blurb}</p>
        </div>
      </div>
      <div className="stats flex gap-5 items-start justify-evenly text-center">
        <div className="year stat">
          <p className="special">year</p>
          <p className="text-sm">{project.year}</p>
        </div>
        <div className="role stat">
          <p className="special">role</p>
          <p>{project.role}</p>
        </div>
      </div>
    </a>
  );
}
