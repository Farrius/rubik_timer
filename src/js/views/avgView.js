import { elements } from "../elements";

export const renderAvg = media => {
  const arrayMedia = media.split(".");
  const parteEntera = arrayMedia[0];
  const parteDecimal = arrayMedia[1];
  if (parteDecimal.length > 2) {
    const arrayParteDecimal = parteDecimal.split("");
    const arrayParteDecimalFormat = arrayParteDecimal.slice(0, 2);
    const parteDecimalFormat = arrayParteDecimalFormat.join("");
    const numeroFormat = `${parteEntera}.${parteDecimalFormat}`;
    elements.mediaAvgDisplay.innerHTML = numeroFormat;
  } else {
    elements.mediaAvgDisplay.innerHTML = media;
  }
};
