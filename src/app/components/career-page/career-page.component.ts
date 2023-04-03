import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NavigationService } from "src/app/navigation.service";
import { DataPlayersService } from "src/app/services/data-players.service";
import { Player } from "../../interfaces/player.interface";

@Component({
  selector: "app-career-page",
  templateUrl: "./career-page.component.html",
  styleUrls: ["./career-page.component.scss"],
})
export class CareerPageComponent implements OnInit {
  player: Player = {} as Player;

  constructor(
    private router: Router,
    public navigation: NavigationService,
    private dataPlayers: DataPlayersService,
    private route: ActivatedRoute
  ) {
    this.navigation.startSaveHistory();
  }

  ngOnInit(): void {
    this.getPlayer();
  }

  goBack() {
    this.navigation.goBack();
  }
  getPlayer(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.dataPlayers
      .getPlayer(id)
      .subscribe((player) => (this.player = player));
  }
}
