import Blurb from "./components/landing/Blurb";
import ProjectOverview from "./components/landing/ProjectOverview";
import Contact from "./components/landing/Contact";

export default function LandingPage() {
  return (
    <div className="LandingPage grid gap-12.5">
      <Blurb />
      <ProjectOverview />
      <Contact />
    </div>
  );
}
