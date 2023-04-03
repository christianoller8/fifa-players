import { Injectable } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { Player } from "../interfaces/player.interface";

@Injectable({
  providedIn: "root",
})
export class DataPlayersService {
  private players: Player[] = [
    {
      id: 1,
      imagen: "../assets/img/Mbappe/portada-mbappe",
      imagen2: "../assets/img/Mbappe/caracteristicas-mbappe",
      videos: {
        video1: "2__7lebV8ZM",
        video2: "7hNoyJ7whHg",
        video3: "QOytHcQOn0U",
        video4: "XA9qswecYw4",
      },
      puntuacion: 91,
      posicionAbrv: "DEL",
      nacionalidad: "Francia",
      clubActual: "",
      nombre: "Kylian Mbappé",
      numCamiseta: 7,
      altura: "1,78 m",
      fechaDeNacimiento: "20/12/1998",
      edad: 24,
      caracteristicasGenerales: {
        filigranas: 5,
        piernaMala: 4,
        rendimientoAtq: "ALTO",
        rendimientoDef: "BAJO",
        piernaBuena: "DERECHA",
      },
      caracteristicasEspecificas: {
        aceleracion: 97,
        velocidad: 97,
        posicion: 92,
        finalizacion: 93,
        potenciaDeTiro: 88,
      },
    },
    {
      id: 2,
      imagen: "../assets/img/Haaland/portada-haaland",
      imagen2: "../assets/img/Haaland/caracteristicas-haaland",
      videos: {
        video1: "https://www.youtube.com/watch?v=Udm-YGrRV7k&ab_channel=CNSHD",
        video2:
          "https://www.youtube.com/watch?v=gUx4KQi40M0&ab_channel=Ronnie7M",
        video3: "https://www.youtube.com/watch?v=ZaOYdeytctk&ab_channel=Dezu7",
        video4:
          "https://www.youtube.com/watch?v=SK_44pTfc30&ab_channel=TEC97_Xmax",
      },
      puntuacion: 88,
      posicionAbrv: "DEL",
      nacionalidad: "Noruega",
      clubActual: "",
      nombre: "Erling Haaland",
      numCamiseta: 9,
      altura: "1,95 m",
      fechaDeNacimiento: "21/07/2000",
      edad: 22,
      caracteristicasGenerales: {
        filigranas: 3,
        piernaMala: 3,
        rendimientoAtq: "ALTO",
        rendimientoDef: "MEDIO",
        piernaBuena: "IZQUIERDA",
      },
      caracteristicasEspecificas: {
        aceleracion: 82,
        velocidad: 94,
        posicion: 89,
        finalizacion: 94,
        potenciaDeTiro: 94,
      },
    },
    {
      id: 3,
      imagen: "../assets/img/Vinicius/portada-vinicius",
      imagen2: "../assets/img/Vinicius/caracteristicas-vinicius",
      videos: {
        video1: "https://www.youtube.com/watch?v=Udm-YGrRV7k&ab_channel=CNSHD",
        video2:
          "https://www.youtube.com/watch?v=gUx4KQi40M0&ab_channel=Ronnie7M",
        video3: "https://www.youtube.com/watch?v=ZaOYdeytctk&ab_channel=Dezu7",
        video4:
          "https://www.youtube.com/watch?v=SK_44pTfc30&ab_channel=TEC97_Xmax",
      },
      puntuacion: 86,
      posicionAbrv: "EX IZ",
      nacionalidad: "Brasil",
      clubActual: "",
      nombre: "Vinicius Junior",
      numCamiseta: 20,
      altura: "1,76 m",
      fechaDeNacimiento: "12/07/2000",
      edad: 22,
      caracteristicasGenerales: {
        filigranas: 5,
        piernaMala: 4,
        rendimientoAtq: "ALTO",
        rendimientoDef: "MEDIO",
        piernaBuena: "DERECHA",
      },
      caracteristicasEspecificas: {
        aceleracion: 95,
        velocidad: 95,
        posicion: 82,
        finalizacion: 84,
        potenciaDeTiro: 76,
      },
    },
    {
      id: 4,
      imagen: "../assets/img/Pedri/portada-pedri",
      imagen2: "../assets/img/Pedri/caracteristicas-pedri",
      videos: {
        video1: "2__7lebV8ZM",
        video2:
          "https://www.youtube.com/watch?v=gUx4KQi40M0&ab_channel=Ronnie7M",
        video3: "https://www.youtube.com/watch?v=ZaOYdeytctk&ab_channel=Dezu7",
        video4:
          "https://www.youtube.com/watch?v=SK_44pTfc30&ab_channel=TEC97_Xmax",
      },
      puntuacion: 85,
      posicionAbrv: "MED",
      nacionalidad: "España",
      clubActual: "",
      nombre: "Pedri",
      numCamiseta: 8,
      altura: "1,74 m",
      fechaDeNacimiento: "25/11/2002",
      edad: 20,
      caracteristicasGenerales: {
        filigranas: 4,
        piernaMala: 4,
        rendimientoAtq: "ALTO",
        rendimientoDef: "ALTO",
        piernaBuena: "DERECHA",
      },
      caracteristicasEspecificas: {
        aceleracion: 82,
        velocidad: 76,
        posicion: 77,
        finalizacion: 68,
        potenciaDeTiro: 66,
      },
    },
  ];

  getPlayers(): Player[] {
    return this.players;
  }
  getPlayer(id: number): Observable<Player> {
    const player = this.players.find((h) => h.id === id)!;
    return of(player);
  }
}
