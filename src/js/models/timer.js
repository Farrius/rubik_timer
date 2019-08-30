export default class Timer {
  constructor() {}

  cogerTiempo() {
    const tiempoActual = new Date();
    const contar = tiempoActual.getTime();

    return contar;
  }
  // Hacemos la media de los tiempos de la lista
  hacerAvg(listaTiempos) {
    let media = 0;
    let arrayTiempos;
    if (listaTiempos.length === 5) {
      let masGrande;
      let masPetit;
      for (const cur of listaTiempos) {
        if (masGrande === undefined) {
          masGrande = parseFloat(cur);
        }
        if (masPetit === undefined) {
          masPetit = parseFloat(cur);
        } else if (parseFloat(cur) > masGrande) {
          masGrande = parseFloat(cur);
        } else if (parseFloat(cur) < masPetit) {
          masPetit = parseFloat(cur);
        }
      }
      masGrande = `${masGrande}`;
      masPetit = `${masPetit}`;
      const masPetitIndex = listaTiempos.indexOf(masPetit);
      listaTiempos.splice(masPetitIndex, 1);
      const masGrandeIndex = listaTiempos.indexOf(masGrande);
      listaTiempos.splice(masGrandeIndex, 1);
      arrayTiempos = listaTiempos;
    } else {
      arrayTiempos = listaTiempos;
    }
    for (const i of arrayTiempos) {
      media += parseFloat(i);
    }
    media /= arrayTiempos.length;
    media = `${media}`;
    return media;
  }

  hacerScramble() {
    const listaAllMoves = [
      "R",
      "U",
      "L",
      "B",
      "F",
      "D",
      "R'",
      "U'",
      "L'",
      "B'",
      "F'",
      "D'",
      "R2",
      "U2",
      "L2",
      "B2",
      "F2",
      "D2"
    ];
    let finalScramble = [];
    let listaSinLastMove = Array.prototype.slice.call(listaAllMoves);
    for (let i = 0; i < 21; i++) {
      const randomIndex = Math.floor(Math.random() * listaSinLastMove.length);
      finalScramble.push(listaSinLastMove[randomIndex]);
      const firstLetter = listaSinLastMove[randomIndex];
      let indexLetters = [];
      const listaOnlyLetters = [];
      for (const cur of listaAllMoves) {
        listaOnlyLetters.push(cur[0]);
      }
      for (const cur of listaSinLastMove) {
        if (cur[0] === firstLetter[0]) {
          for (let i = 0; i < 22; i++) {
            indexLetters.push(listaOnlyLetters.indexOf(cur[0], i));
          }
        }
      }
      let indexLettersFormat = [];
      for (const cur of indexLetters) {
        if (cur !== -1) {
          if (indexLettersFormat.includes(cur) === false) {
            indexLettersFormat.push(cur);
          }
        }
      }
      listaSinLastMove = Array.prototype.slice.call(listaAllMoves);
      indexLettersFormat.forEach((cur, index) => {
        if (index === 0) {
          listaSinLastMove.splice(cur, 1);
        } else if (index === 1) {
          listaSinLastMove.splice(cur - 1, 1);
        } else if (index === 2) {
          listaSinLastMove.splice(cur - 2, 1);
        }
      });
    }
    return finalScramble;
  }
}
