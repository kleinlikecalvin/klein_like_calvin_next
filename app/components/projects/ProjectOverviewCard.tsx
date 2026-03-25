import { Project } from "@/app/types/project_types";
import Image from "next/image";

export default function ProjectOverviewCard({
  project,
  classes,
}: {
  project: Project;
  classes?: string;
}) {
  return (
    <a
      href={`/project?id=${project.id}`}
      className={`ProjectOverviewCard rounded-[20px] p-half bg-background text-foreground scale ${classes}`}
    >
      {project.preview.thumbnail.src && (
        <div className="image-container h-50 overflow-hidden border-b-special-one border-b">
          <Image
            className="w-full h-auto m-0 mx-auto"
            src={project.preview.thumbnail.src}
            alt={project.preview.thumbnail.alt}
            height={project.preview.thumbnail.height}
            width={project.preview.thumbnail.width}
          />
        </div>
      )}
      <div className="info h-65 pb-half border-b border-b-special-one">
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
      <div className="stats h-20 flex gap-5 items-start justify-evenly text-center">
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
