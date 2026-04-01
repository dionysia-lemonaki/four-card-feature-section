import iconSupervisor from "./assets/images/icon-supervisor.svg";
import iconTeamBuilder from "./assets/images/icon-team-builder.svg";
import iconKarma from "./assets/images/icon-karma.svg";
import iconCalculator from "./assets/images/icon-calculator.svg";

const data = [
  {
    id: 1,
    title: "Supervisor",
    variant: "supervisor",
    description: "Monitors activity to identify project roadblocks",
    icon: iconSupervisor,
  },
  {
    id: 2,
    title: "Team Builder",
    variant: "team builder",
    description:
      "Scans our talent network to create the optimal team for your project",
    icon: iconTeamBuilder,
  },
  {
    id: 3,
    title: "Karma",
    variant: "karma",
    description: "Regularly evaluates our talent to ensure quality",
    icon: iconKarma,
  },
  {
    id: 4,
    title: "Calculator",
    variant: "calculator",
    description:
      "Uses data from past projects to provide better delivery estimates",
    icon: iconCalculator,
  },
];

export default data;
