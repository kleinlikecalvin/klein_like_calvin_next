import { Project } from "../../types/project_types.ts";
import { memoryGame } from "./personal/memory_game.ts";
import { pythonSlotMachine } from "./personal/python_terminal_slot_machine.ts";
import { numberGamble } from "./personal/number_gamble.ts";

export const projectsData: Project[] = [
  memoryGame,
  pythonSlotMachine,
  numberGamble,
];
// TODO sort these by year so the newest ones are always displayed
