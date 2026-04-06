import { Project } from "@/app/types/project_types";
import memoryDefault from "@/public/images/projects/personal/memory_game/memory_game_default.png";
import memoryBeastMode from "@/public/images/projects/personal/memory_game/memory_game_beast_mode.png";

export const memoryGame: Project = {
  id: "memoryGame",
  title: "CashApp Interview Challenge - Memory Game",
  year: "2023",
  role: "Junior Front End Software Engineer",
  skills: ["React", "Javascript", "CSS", "HTML"],
  resources: [
    {
      displayValue: "Nathan Walston",
      url: "https://github.com/walston",
    },
  ],
  preview: {
    blurb:
      "A React-based memory card game inspired by a Cash App interview challenge, using a reducer pattern to manage complex, event-driven game state. The project features card flipping, matching logic, and a clean, responsive UI designed to deliver a smooth and engaging gameplay experience.",
    thumbnail: {
      src: memoryDefault.src,
      alt: "Memory Game",
      height: 604,
      width: 460,
    },
  },
  page: {
    achievements: [
      "Taking an interview prompt from Cash App, I rebuilt the memory game on my own time and used it as a way to deepen my understanding of state management in React.",
      "Implemented shuffling logic, card-flipping behavior, and match detection while managing all gameplay transitions with a reducer pattern, allowing me to practice structuring complex, event-driven state in a clean, scalable way.",
      "Designed a simple, responsive UI and focused on how the game feels to play, ensuring that interactions were intuitive and transitions made sense.",
      "Treated this project as an opportunity to grow — both in React fundamentals and in more advanced patterns like reducers — while turning an interview challenge into a polished, functioning game.",
    ],
    callouts: [
      "Huge thank you to Cash App for the opportunity to interview, it's stuck with me ever since.",
    ],
    livePage: {
      url: "https://github.com/kleinlikecalvin/memory-game-interview-challenge",
      displayText: "See repo and play the game",
    },
  },
  images: [
    {
      src: memoryDefault.src,
      alt: "Memory Game: default game play",
      height: 604,
      width: 460,
    },
    {
      src: memoryBeastMode.src,
      alt: "Memory Game: beast mode game play",
      height: 604,
      width: 460,
    },
  ],
};
