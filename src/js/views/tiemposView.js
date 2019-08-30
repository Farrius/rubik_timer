import { elements } from "../elements";

export const renderLiTiempos = liDeTiempos => {
  const markup = `
  <li class="ao5_time_element">${liDeTiempos}</li>
  `;
  elements.listaTiemposDisplay.insertAdjacentHTML("afterbegin", markup);
};

export const deleteLiTiempos = () => {
  for (let i = 0; i < 3; i++) {
    elements.listaTiemposDisplay.removeChild(
      elements.listaTiemposDisplay.childNodes[12]
    );
  }
};
