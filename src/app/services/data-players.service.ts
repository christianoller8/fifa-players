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
      puntuacion: 91,
      posicionabrv: "DEL",
      nacionalidad: "Francia",
      clubactual: "",
      nombre: "Kylian Mbappé",
      numcamiseta: 7,
      altura: "1,78 m",
      fechadenacimiento: "20/12/1998",
      edad: 24,
      caracteristicasgenerales: {
        filigranas: 5,
        piernamala: 4,
        rentimientoatq: "ALTO",
        rendimientodef: "BAJO",
        piernabuena: "DERECHA",
      },
      caracteristicasespecificas: {
        aceleracion: 97,
        velocidad: 97,
        posicion: 92,
        finalizacion: 93,
        potenciadetiro: 88,
      },
    },
    {
      id: 2,
      imagen: "../assets/img/Haaland/portada-haaland",
      imagen2: "../assets/img/Haaland/caracteristicas-haaland",
      puntuacion: 88,
      posicionabrv: "DEL",
      nacionalidad: "Noruega",
      clubactual: "",
      nombre: "Erling Haaland",
      numcamiseta: 9,
      altura: "1,95 m",
      fechadenacimiento: "21/07/2000",
      edad: 22,
      caracteristicasgenerales: {
        filigranas: 3,
        piernamala: 3,
        rentimientoatq: "ALTO",
        rendimientodef: "MEDIO",
        piernabuena: "IZQUIERDA",
      },
      caracteristicasespecificas: {
        aceleracion: 82,
        velocidad: 94,
        posicion: 89,
        finalizacion: 94,
        potenciadetiro: 94,
      },
    },
    {
      id: 3,
      imagen: "../assets/img/Vinicius/portada-vinicius",
      imagen2: "../assets/img/Vinicius/caracteristicas-vinicius",
      puntuacion: 86,
      posicionabrv: "EX IZ",
      nacionalidad: "Brasil",
      clubactual: "",
      nombre: "Vinicius Junior",
      numcamiseta: 20,
      altura: "1,76 m",
      fechadenacimiento: "12/07/2000",
      edad: 22,
      caracteristicasgenerales: {
        filigranas: 5,
        piernamala: 4,
        rentimientoatq: "ALTO",
        rendimientodef: "MEDIO",
        piernabuena: "DERECHA",
      },
      caracteristicasespecificas: {
        aceleracion: 95,
        velocidad: 95,
        posicion: 82,
        finalizacion: 84,
        potenciadetiro: 76,
      },
    },
    {
      id: 4,
      imagen: "../assets/img/Pedri/portada-pedri",
      imagen2: "../assets/img/Pedri/caracteristicas-pedri",
      puntuacion: 85,
      posicionabrv: "MED",
      nacionalidad: "España",
      clubactual: "",
      nombre: "Pedri",
      numcamiseta: 8,
      altura: "1,74 m",
      fechadenacimiento: "25/11/2002",
      edad: 20,
      caracteristicasgenerales: {
        filigranas: 4,
        piernamala: 4,
        rentimientoatq: "ALTO",
        rendimientodef: "ALTO",
        piernabuena: "DERECHA",
      },
      caracteristicasespecificas: {
        aceleracion: 82,
        velocidad: 76,
        posicion: 77,
        finalizacion: 68,
        potenciadetiro: 66,
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
