import { Project } from "@/app/types/project_types";
import numberGambleStep1 from "@/public/images/projects/personal/number_gamble/step_1.png";

export const numberGamble: Project = {
  id: "numberGamble",
  title: "Number Gamble Game",
  year: "2022",
  role: "Freelance Front End Web Developer",
  skills: ["Javascript", "HTML"],
  resources: [
    {
      displayValue: "Youtube",
      url: "https://www.youtube.com/watch?v=J29jeuyMJ38&t=1s",
    },
  ],
  preview: {
    blurb:
      "Built a number-guessing game to strengthen my understanding of Promises and async/await, guided by an excellent tutorial from Thu Nghiem.",
    thumbnail: {
      src: numberGambleStep1.src,
      alt: "Number Gamble game thumbnail",
      height: 962,
      width: 440,
    },
  },
  page: {
    achievements: ["Practiced handling promises."],
    callouts: [
      "Special thanks to Thu Nghiem for their awesome youtube tutorial on promises!",
    ],
    livePage: {
      url: "https://github.com/kleinlikecalvin/numberGamble",
      displayText: "Visit repo and play the game",
    },
  },
  images: [
    {
      src: numberGambleStep1.src,
      alt: "Number gamble game - step 1",
      height: 962,
      width: 440,
    },
  ],
};
