import Blurb from "./components/Landing/Blurb";
import ProjectOverview from "./components/Projects/ProjectOverview";
import Contact from "./components/Landing/Contact";
import Skills from "./components/Projects/Skills";
import { projectsData } from "./data/projects/projectsData";

export default function LandingPage() {
  const allSkills = [
    ...new Set(projectsData.flatMap((project) => project.skills)),
  ];

  return (
    <main className="LandingPage w-full max-lg:mx-10 lg:grid lg:gap-12.5">
      <Blurb />
      {/* TODO figure out why the bg-color is slightly different in dark mode. Also spacing is off */}
      <section className="skills multi-color-child flex items-center gap-4">
        <h3>Skills</h3>
        <Skills skills={allSkills} />
      </section>
      <ProjectOverview />
      <Contact />
    </main>
  );
}
