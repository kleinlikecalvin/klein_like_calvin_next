import Blurb from "./components/Landing/Blurb";
import ProjectOverview from "./components/Projects/ProjectOverview";
import Contact from "./components/Landing/Contact";

export default function LandingPage() {
  return (
    <main className="LandingPage grid gap-12.5 max-lg:mx-10">
      <Blurb />
      <ProjectOverview />
      <Contact />
    </main>
  );
}
