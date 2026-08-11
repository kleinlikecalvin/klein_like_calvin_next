import Divider from "../Divider";

export default function Skills({ skills }: { skills: string[] }) {
  return (
    <p className="Skills">
      {skills.map((skill, i) => (
        <span key={i}>
          {skill}
          {i < skills.length - 1 && <Divider />}
        </span>
      ))}
    </p>
  );
}
