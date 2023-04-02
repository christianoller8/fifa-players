export interface Player {
  id: number;
  imagen: string;
  imagen2: string;
  puntuacion: number;
  posicionabrv: string;
  nacionalidad: string;
  clubactual: string;
  nombre: string;
  numcamiseta: number;
  altura: string;
  fechadenacimiento: string;
  edad: number;
  caracteristicasgenerales: {
    filigranas: number;
    piernamala: number;
    rentimientoatq: string;
    rendimientodef: string;
    piernabuena: string;
  };
  caracteristicasespecificas: {
    aceleracion: number;
    velocidad: number;
    posicion: number;
    finalizacion: number;
    potenciadetiro: number;
  };
}
