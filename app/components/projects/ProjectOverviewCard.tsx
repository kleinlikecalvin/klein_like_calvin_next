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
      className={`ProjectOverviewCard p-half bg-background text-foreground scale rounded-[20px] ${classes}`}
      aria-label="View full project details."
    >
      <p className="text-xs lg:hidden">tap to learn more</p>
      <p className="special">{title}</p>
      {preview.thumbnail.src && (
        <div className="image-container border-b-special-one overflow-hidden border-b lg:h-50">
          <Image
            className="mx-auto h-auto w-full"
            src={preview.thumbnail.src}
            alt={preview.thumbnail.alt}
            height={preview.thumbnail.height}
            width={preview.thumbnail.width}
            loading={position && position <= 1 ? "eager" : "lazy"}
          />
        </div>
      )}
      <div className="info pb-half border-b-special-one border-b lg:h-69">
        <div className="skills">
          <p className="special">skills</p>
          <Skills skills={skills} />
        </div>
        <div className="tldr">
          <p className="special">tldr</p>
          <p className="tldr">{preview.tldr}</p>
        </div>
      </div>
      <div className="stats flex items-start justify-evenly gap-5 text-center lg:h-20">
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
