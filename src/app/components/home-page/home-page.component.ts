import { Component, OnInit } from "@angular/core";
import { NavigationService } from "src/app/navigation.service";
import { Router } from "@angular/router";
import { DataPlayersService } from "src/app/services/data-players.service";
import { Player } from "src/app/interfaces/player.interface";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  players: Player[] = [];

  constructor(
    private dataPlayers: DataPlayersService,
    private router: Router,
    public navigation: NavigationService
  ) {
    this.navigation.startSaveHistory();
  }

  ngOnInit() {
    this.players = this.dataPlayers.getPlayers();
  }

  mostrarImagen(id: number) {
    this.router.navigate(["../../assets/img/Mbappe/portada-mbappe", id]);
  }
}
