export interface Player {
  id: number;
  imagen: string;
  imagen2: string;
  videos: {
    video1: string;
    video2: string;
    video3: string;
    video4: string;
  };

  puntuacion: number;
  posicionAbrv: string;
  nacionalidad: string;
  clubActual: string;
  nombre: string;
  numCamiseta: number;
  altura: string;
  fechaDeNacimiento: string;
  edad: number;
  caracteristicasGenerales: {
    filigranas: number;
    piernaMala: number;
    rendimientoAtq: string;
    rendimientoDef: string;
    piernaBuena: string;
  };
  caracteristicasEspecificas: {
    aceleracion: number;
    velocidad: number;
    posicion: number;
    finalizacion: number;
    potenciaDeTiro: number;
  };
}
