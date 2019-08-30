import { elements } from "../elements";

export const renderScramble = scramble => {
  const scrambleFormat = scramble.map(cur => {
    return `${cur} `;
  });
  const scrambleString = scrambleFormat.join("");
  elements.scrambleDisplay.innerHTML = scrambleString;
};
