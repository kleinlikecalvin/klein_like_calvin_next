import { Project } from "@/app/types/project_types";
import oWinsUI from "@/public/images/projects/personal/tic_tac_toe_ai/tic_tac_o_wins.png";
import tieUI from "@/public/images/projects/personal/tic_tac_toe_ai/tic_tac_tie.png";
import xWinsUI from "@/public/images/projects/personal/tic_tac_toe_ai/tic_tac_x_wins.png";

export const ticTacToeAI: Project = {
  id: "ticTacToeAI",
  title: "Tic Tac Toe AI",
  year: "2023",
  role: "Junior Front End Software Engineer",
  skills: ["Typescript, React, CSS, HTML"],
  preview: {
    blurb:
      "A browser-based Tic-Tac-Toe game built with React, TypeScript, and useReducer, featuring an AI opponent that blocks player wins and pursues its own — falling back to random play when no immediate threat or opportunity exists.",
    thumbnail: {
      src: oWinsUI.src,
      alt: "Screenshot of a Tic Tac Toe app with a simple opponent where O has won",
      height: 1468,
      width: 1346,
    },
  },
  page: {
    achievements: [
      "Built a fully playable Tic-Tac-Toe game using React and TypeScript",
      "Implemented game state management with useReducer and a custom useAppState hook",
      "Developed an AI opponent with greedy move selection — prioritizing winning moves, then blocking the player, then playing randomly",
      "Highlighted winning squares on game end using derived state from the reducer",
      "Handled draw detection and dynamic UI messaging based on game state",
      "Simulated opponent 'thinking' with a 500ms async delay using a Promise-based wait utility",
      "Enforced turn-based access control by disabling the board during the opponent's turn and after game over",
    ],
    callouts: [
      "Thanks for my mentor, Nate Walston, for helping me figure out how to create an opponent to play against",
    ],
    gitHubRepoUrl: "https://github.com/kleinlikecalvin/tic-tac-toe",
  },
  images: [
    {
      src: oWinsUI.src,
      alt: "Screenshot of a Tic Tac Toe app with a simple opponent where O has won",
      height: 1468,
      width: 1346,
    },
    {
      src: tieUI.src,
      alt: "Screenshot of a Tic Tac Toe app with a simple opponent where there is a tie",
      height: 1444,
      width: 1410,
    },
    {
      src: xWinsUI.src,
      alt: "Screenshot of a Tic Tac Toe app with a simple opponent where X has won",
      height: 1382,
      width: 1384,
    },
  ],
};
