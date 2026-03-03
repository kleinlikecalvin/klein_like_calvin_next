import { Project } from "@/app/types/project_types";
import pdpScreenShot from "@/public/images/projects/hanna_andersson/legacy_and_next/replatform/replatform_pdp.png";

export const haReplatform: Project = {
  id: "haReplatform",
  title: "Hanna Andersson Replatform",
  year: "2026", // 🚨 TODO: update either when leaving Hanna or when completely on SOTF
  role: "Full Stack Software Engineer",
  skills: [
    "React, Redux, Next.js, Tailwind, Vitest, Vercel, Fastly, Grafana, Checkly, APIs, LogRocket, GTM, GA, Javascript, CSS, HTML, shadcn",
  ],
  resources: [],
  preview: {
    blurb:
      "Key contributor in replatforming a legacy SFCC e-commerce site to a modern, headless Next.js architecture using a strangler pattern for incremental, low-risk rollout.",
    thumbnail: {
      src: pdpScreenShot.src,
      alt: "Screen shot of Hanna Andersson PDP on new tech stack",
      height: 728,
      width: 1119,
    },
  },
  page: {
    url: "/ha-replatform",
    duration: "2+ years",
    achievements: [
      "Led front-end architectural decisions, introduced unit testing strategies, and drove tech debt remediation to reduce regressions and improve maintainability.",
      "Designed and built high-performance, accessible UI components with React, Next.js, Tailwind, Redux, and BFF services, deployed via Vercel.",
      "Revamped core commerce flows (Product, Cart, Checkout), improving engagement, retention, and conversion rates.",
      "Authored comprehensive technical design docs, established an atomic design system, and created cross-functional documentation for long-term scalability.",
      "Championed improved engineering processes (testing, code review, documentation), increasing team velocity and onboarding efficiency.",
      "Proactively resolved performance, accessibility, and cross-browser issues using modern monitoring and debugging tools.",
      "Implemented Stripe and PayPal payment integrations to reduce checkout friction and increase mobile transaction speed.",
      "Integrated GA and GTM to enable granular, data-driven insights into user behavior.",
      "Maintained and refactored legacy jQuery/ISML MVC codebase while researching and helping guide the organization toward a superior, future-ready tech stack.",
    ],
    callouts: [
      "An ongoing huge thank you to our Principal Engineer, Derek Dorr, who oversaw the project and is an endless well of wisdom and guidance. Working with you was a pivotal period for me.",
    ],
    gitHubRepoUrl: "",
  },
  images: [
    {
      src: pdpScreenShot.src,
      alt: "Screen shot of Hanna Andersson PDP on new tech stack",
      height: 728,
      width: 1119,
    },
  ],
};
