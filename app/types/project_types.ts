// Projects

import { StaticImageData } from "next/image";

type Resource = {
  displayValue: string;
  url: string;
};

type ProjectPreview = {
  tldr: string;
  thumbnail: { src: string; alt: string; height: number; width: number };
};

export type Image = StaticImageData & {
  alt: string;
};

type ProjectPage = {
  achievements: string[];
  callouts?: string[];
  livePage: {
    url: string;
    displayText: "Visit Live Site" | "Visit Repo To Play" | "Visit Repo";
  };
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
