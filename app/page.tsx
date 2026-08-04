import Blurb from "./components/Landing/Blurb";
import ProjectOverview from "./components/Projects/ProjectOverview";
import Contact from "./components/Landing/Contact";
import Skills from "./components/Projects/Skills";
import { projectsData } from "./data/projects/projects_data";
import WavyDivider from "./components/WavyDivider";

export default function LandingPage() {
  const allSkills = [
    ...new Set(projectsData.flatMap((project) => project.skills)),
  ];

  return (
    <main className="LandingPage page grid gap-12.5">
      <Blurb />
      <WavyDivider />
      <section className="skills-container text-center">
        <h2>I've got skills.</h2>
        <Skills skills={allSkills} />
      </section>
      <WavyDivider />
      <ProjectOverview />
      <Contact />
    </main>
  );
}
