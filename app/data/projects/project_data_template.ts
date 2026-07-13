import { Project } from "@/app/types/project_types";

export const projectName: Project = {
  id: "",
  title: "",
  year: "",
  role: "",
  skills: [""],
  resources: [
    {
      displayValue: "",
      url: "",
    },
  ],
  preview: {
    tldr: "",
    thumbnail: {
      src: "",
      alt: "",
      height: 0,
      width: 0,
    },
  },
  page: {
    achievements: [""],
    callouts: [""],
    // livePage: {
    //   url: "",
    //   displayText: undefined,
    // },
  },
  images: [
    {
      src: "",
      alt: "",
      height: 0,
      width: 0,
    },
  ],
};
