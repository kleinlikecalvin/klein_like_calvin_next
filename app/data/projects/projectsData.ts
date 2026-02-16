import { Project } from "../../types/project_types";
import { memoryGame } from "./personal/memory_game";
import { pythonSlotMachine } from "./personal/python_terminal_slot_machine";
import { numberGamble } from "./personal/number_gamble";
import { haReplatform } from "./hanna_andersson/legacy_and_next/ha_both_replatform";
import { haTurnToReviews } from "./hanna_andersson/next/ha_next_turnto_reviews_api";
import { ticTacToeAI } from "./personal/tic_tac_toe_ai";

export const projectsData: Project[] = [
  memoryGame,
  pythonSlotMachine,
  numberGamble,
  haReplatform,
  haTurnToReviews,
  ticTacToeAI,
].sort((a, b) => b.year - a.year);
