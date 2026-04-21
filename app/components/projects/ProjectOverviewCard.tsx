import { Project } from "@/app/types/project_types";
import Image from "next/image";
import Skills from "./Skills";

export default function ProjectOverviewCard({
  project,
  classes,
  position,
}: {
  project: Project;
  classes?: string;
  position?: number;
}) {
  const { id, title, preview, skills, year, role } = project;

  return (
    <a
      href={`/project?id=${id}`}
      className={`ProjectOverviewCard rounded-[20px] p-half bg-background text-foreground scale ${classes}`}
    >
      <p className="special">{title}</p>
      {preview.thumbnail.src && (
        <div className="image-container h-50 overflow-hidden border-b-special-one border-b">
          <Image
            className="w-full h-auto mx-auto"
            src={preview.thumbnail.src}
            alt={preview.thumbnail.alt}
            height={preview.thumbnail.height}
            width={preview.thumbnail.width}
            loading={position && position <= 1 ? "eager" : "lazy"}
          />
        </div>
      )}
      <div className="info h-69 pb-half border-b border-b-special-one">
        <div className="skills">
          <p className="special">skills</p>
          <Skills skills={skills} />
        </div>
        <div className="blurb">
          <p className="special">blurb</p>
          <p className="blurb">{preview.blurb}</p>
        </div>
      </div>
      <div className="stats h-20 flex gap-5 items-start justify-evenly text-center">
        <div className="year stat">
          <p className="special">year</p>
          <p className="text-sm">{year}</p>
        </div>
        <div className="role stat">
          <p className="special">role</p>
          <p>{role}</p>
        </div>
      </div>
    </a>
  );
}
