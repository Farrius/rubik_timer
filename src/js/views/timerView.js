import { elements } from "../elements";

export const formatearNumero = numero => {
  const numeroFormat = numero / 1000;
  const numeroFormatArray = numeroFormat.toString().split(".");
  const numeroSinDecimal = numeroFormatArray[0];
  const numeroDecimal = numeroFormatArray[1];
  const decimalFormatSinMili = numeroDecimal.slice(0, 2);
  const decimalFormatArray = decimalFormatSinMili.split("");
  const decimalFormatArrayConPunto = decimalFormatArray.map((e, index) => {
    if (index == 0) {
      return `.${e}`;
    } else {
      return e;
    }
  });
  const decimalFormat = decimalFormatArrayConPunto.join("");
  if (numeroSinDecimal >= 60) {
    let segundos;
    let minutos;
    minutos = `${Math.floor(numeroSinDecimal / 60)}:`;
    segundos = `${numeroSinDecimal % 60}`;
    const numeroSinDecimalFormat = `${minutos}${segundos}`;
    const numeroFinal = `${numeroSinDecimalFormat}${decimalFormat}`;
    return numeroFinal;
  } else {
    const numeroFinal = `${numeroSinDecimal}${decimalFormat}`;
    return numeroFinal;
  }
};

export const renderNumero = numero => {
  elements.timerDisplay.innerHTML = numero;
};

export const deleteRenderNumero = () => {
  elements.timerDisplay.innerHTML = "";
};
