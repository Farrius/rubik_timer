import "../styles/style.scss";
import Timer from "./models/timer";
import { elements } from "./elements";
import * as timerView from "./views/timerView";
import * as tiempoView from "./views/tiemposView";
import * as avgView from "./views/avgView";
import * as scrambleView from "./views/scrambleView";
/* estado de la app */
const state = {};
state.listaTiempos = [];
/* Timer */
// El timer controller del "keydown" event
const timerController = () => {
  try {
    if (state.tiempo) {
      stopTimer();
    }
  } catch {}
};
// Evento que iniciara nuesto Timer
const startTimer = () => {
  try {
    if (event.keyCode === 32) {
      if (state.tiempo == undefined && state.estado == undefined) {
        timerView.deleteRenderNumero();
        state.tiempo = new Timer();
        state.tiempo.comienzo = state.tiempo.cogerTiempo();
      } else {
        delete state.estado;
      }
    }
  } catch {}
};
// Evento que para el Timer
const stopTimer = () => {
  state.estado = "on";
  if (event.keyCode !== 32) {
    delete state.estado;
  }
  state.tiempo.final = state.tiempo.cogerTiempo();
  const tiempoTotal = state.tiempo.final - state.tiempo.comienzo;
  const tiempoFormateado = timerView.formatearNumero(tiempoTotal);
  timerView.renderNumero(tiempoFormateado);
  afegirTiempoState(tiempoFormateado);
  const inmutableListaTiempos = Array.prototype.slice.call(state.listaTiempos);
  const mediaAvg = state.tiempo.hacerAvg(inmutableListaTiempos);
  avgView.renderAvg(mediaAvg);
  const scramble = state.tiempo.hacerScramble();
  scrambleView.renderScramble(scramble);
  delete state.tiempo;
};

//Añadimos los tiempos del state a la UI y al controller
const afegirTiempoState = tiempoFormat => {
  if (state.listaTiempos.length === 5) {
    state.listaTiempos.pop();
    tiempoView.deleteLiTiempos();
    state.listaTiempos.unshift(tiempoFormat);
    tiempoView.renderLiTiempos(tiempoFormat);
    return state.listaTiempos;
  } else {
    state.listaTiempos.unshift(tiempoFormat);
    tiempoView.renderLiTiempos(tiempoFormat);
    return state.listaTiempos;
  }
};

window.addEventListener("keyup", startTimer);
window.addEventListener("keydown", timerController);
