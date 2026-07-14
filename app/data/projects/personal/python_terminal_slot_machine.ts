import { Project } from "@/app/types/project_types";
import winnerScreenShot from "@/public/images/projects/personal/python_terminal_slot_machine/winner.png";

export const pythonSlotMachine: Project = {
  id: "pythonSlotMachine",
  title: "Python Slot Machine Game",
  year: "2025",
  role: "Full Stack Software Engineer",
  skills: ["Python"],
  preview: {
    tldr: "A Vegas-style slot machine game in 100% Python, complete with ASCII art messages and interactive terminal gameplay. It handles betting, spins, payouts, and real-time balance tracking to deliver a fun, retro casino experience that celebrates every win.",
    thumbnail: {
      src: winnerScreenShot.src,
      alt: "Screenshot of slot machine winning spin",
      height: 1164,
      width: 2024,
    },
  },
  page: {
    achievements: [
      "Built a complete, interactive game using only Python — demonstrating rapid learning, self-direction, and the ability to turn an idea into a working product.",
      "Implemented real game logic, including betting, spinning, winning conditions, and payouts, showing a solid grasp of control flow, functions, and program structure.",
      "Created a functioning state-management system to track player balance, validate bets, and handle game progression — a core concept in real software systems.",
      "Designed a fully text-based user interface with clear prompts and ASCII visuals, proving the ability to think about user experience even without GUI frameworks.",
      "Applied randomness and probability concepts to simulate slot machine behavior, illustrating practical use of Python’s standard libraries.",
      "Handled user input safely and cleanly, including error handling and input validation — a fundamental skill for any interactive application.",
      "Organized code into reusable, readable functions, showing mastery of clean-code principles.",
      "Debugged and iterated on the game to ensure smooth play, reflecting strong problem-solving and resilience for a beginner.",
    ],
    livePage: {
      url: "https://github.com/kleinlikecalvin/python_p1--slot-machine",
      displayText: "Visit Repo",
    },
  },
  images: [
    {
      src: winnerScreenShot.src,
      alt: "Screen shot of winner UX from game play",
      height: 962,
      width: 440,
    },
  ],
};
