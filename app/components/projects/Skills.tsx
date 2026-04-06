import { Project } from "@/app/types/project_types";
import { Fragment } from "react/jsx-runtime";
import Divider from "../Divider";

export default function Skills({ skills }: { skills: string[] }) {
  return (
    <p className="Skills">
      {skills.map((skill, i) => (
        <Fragment key={i}>
          {skill}
          {i < skills.length - 1 && <Divider />}
        </Fragment>
      ))}
    </p>
  );
}
