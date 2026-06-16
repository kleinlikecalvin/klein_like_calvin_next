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
    <main className="LandingPage mx-5 grid gap-12.5 lg:mx-0 lg:gap-20">
      <Blurb />
      {/* TODO figure out why the bg-color is slightly different in dark mode. Also spacing is off */}
      <section className="skills flex flex-col gap-4 lg:flex-row lg:items-center">
        <h3 className="m-0">skills</h3>
        <Skills skills={allSkills} />
      </section>
      <ProjectOverview />
      <Contact />
    </main>
  );
}
