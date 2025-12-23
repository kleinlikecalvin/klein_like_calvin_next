import { Project } from "@/app/types/project_types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a className="ProjectCard" href={project.page.url}>
      <div className="image-container">
        <img
          src={project.preview.thumbnail.src}
          alt={project.preview.thumbnail.alt}
          height={project.preview.thumbnail.height}
          width={project.preview.thumbnail.width}
        />
      </div>
      <div className="skills">
        <p className="special">skills</p>
        {project.skills.map((skill) => {
          return <span className="skill">{skill}</span>;
        })}
      </div>
      <div className="blurb">
        <p className="special">blurb</p>
        <p className="blurb">{project.preview.blurb}</p>
      </div>
      <div className="stats">
        <div className="year stat">
          <p className="special">year</p>
          <p>{project.year}</p>
        </div>
        <div className="role stat">
          <p className="special">role</p>
          <p>{project.role}</p>
        </div>
      </div>
    </a>
  );
}
