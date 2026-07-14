import { Project } from "@/app/types/project_types";
import Image from "next/image";
import Skills from "./Skills";
import Link from "next/link";

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
    <Link
      href={`/project?id=${id}`}
      className={`ProjectOverviewCard p-half bg-background text-foreground scale rounded-[20px] ${classes}`}
      aria-label="View full project details."
    >
      <p className="text-xs lg:hidden">tap to learn more</p>
      <p className="special">{title}</p>
      {preview.thumbnail.src && (
        <div className="image-container border-special-one overflow-hidden border lg:h-50">
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
      <div className="info pb-half border-b-special-one border-b">
        <div className="skills lg:h-36">
          <p className="special">skills</p>
          <Skills skills={skills} />
        </div>
        <div className="tldr lg:h-42">
          <p className="special">tldr</p>
          <p className="tldr">{preview.tldr}</p>
        </div>
      </div>
      <div className="stats flex items-start justify-evenly gap-5 lg:h-20 lg:flex-row lg:text-center">
        <div className="year">
          <p className="special">year</p>
          <p className="text-sm">{year}</p>
        </div>
        <div className="role max-lg:flex-1">
          <p className="special">role</p>
          <p className="text-sm">{role}</p>
        </div>
      </div>
    </Link>
  );
}
