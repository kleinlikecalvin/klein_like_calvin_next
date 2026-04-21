import { Link } from "../types/types";

export const navData: Link[] = [
  {
    id: "home",
    displayValue: "home",
    link: "/",
  },
  {
    id: "projects",
    displayValue: "all projects",
    link: "/all-projects",
  },
  {
    id: "skills",
    displayValue: "skills",
    link: "/#skills",
  },
];
// TODO: where does skills link take user?
export default navData;
