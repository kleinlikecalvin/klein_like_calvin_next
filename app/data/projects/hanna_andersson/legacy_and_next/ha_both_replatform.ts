import { Project } from "@/app/types/project_types";
import pdpScreenShot from "@/public/images/projects/hanna_andersson/legacy_and_next/replatform/replatform_pdp.png";

export const haReplatform: Project = {
  id: "haReplatform",
  title: "Hanna Andersson Replatform",
  year: "2026", // 🚨 TODO: update either when leaving Hanna or when completely on SOTF
  role: "Full Stack Software Engineer",
  skills: [
    "React",
    "Redux",
    "Next.js",
    "Tailwind",
    "Typescript",
    "Vitest",
    "Vercel",
    "Fastly",
    "Grafana",
    "Checkly",
    "APIs",
    "BFFs",
    "Tech Design/Architecture",
    "LogRocket",
    "GTM",
    "GA",
    "Javascript",
    "CSS",
    "HTML",
    "shadcn",
    "SFCC",
    "Stripe",
  ],
  preview: {
    blurb:
      "Key contributor in a large-scale replatform from a legacy SFCC e-commerce site to a modern headless architecture using Next.js, Typescript, BFFs and strangler pattern for an incremental, low-risk rollout.",
    thumbnail: {
      src: pdpScreenShot.src,
      alt: "Screen shot of Hanna Andersson PDP on new tech stack",
      height: 1278,
      width: 1945,
    },
  },
  page: {
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
      "An ongoing huge thank you to Derek Dorr, who oversaw the project as our Principal Engineer and is an endless well of wisdom and guidance.",
    ],
    livePage: {
      url: "https://www.hannaandersson.com/",
      displayText: "Visit Hanna Andersson Site",
    },
  },
  images: [
    {
      src: pdpScreenShot.src,
      alt: "Screen shot of Hanna Andersson PDP on new tech stack",
      height: 1278,
      width: 1945,
    },
  ],
};
