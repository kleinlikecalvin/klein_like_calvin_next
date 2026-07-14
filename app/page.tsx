import Blurb from "./components/Landing/Blurb";
import ProjectOverview from "./components/Projects/ProjectOverview";
import Contact from "./components/Landing/Contact";
import Skills from "./components/Projects/Skills";
import { projectsData } from "./data/projects/projectsData";
import WavyDivider from "./components/WavyDivider";

export default function LandingPage() {
  const allSkills = [
    ...new Set(projectsData.flatMap((project) => project.skills)),
  ];

  return (
    <main className="LandingPage grid gap-12.5">
      <Blurb />
      <WavyDivider />
      <section className="skills-container text-center">
        <h3>I've got skills.</h3>
        <Skills skills={allSkills} />
      </section>
      <WavyDivider />
      <ProjectOverview />
      <Contact />
    </main>
  );
}
