// Projects

import { StaticImageData } from "next/image";

type Resource = {
  displayValue: string;
  url: string;
};

type ProjectPreview = {
  blurb: string;
  thumbnail: { src: string; alt: string; height: number; width: number };
};

type Image = StaticImageData & {
  alt: string;
};

type ProjectPage = {
  url: string;
  images?: {
    landingBanner: string;
    mobile: string[];
  };
  duration: string;
  achievements: string[];
  callouts?: string[];
  gitHubRepoUrl?: string;
};

export type Project = {
  id: string;
  title: string;
  year: string;
  role: string;
  skills: string[];
  resources?: Resource[];
  preview: ProjectPreview;
  page: ProjectPage;
  images?: Image[];
};
