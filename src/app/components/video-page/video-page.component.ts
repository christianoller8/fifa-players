import { Component, OnInit } from "@angular/core";
import {
  AfterViewInit,
  ChangeDetectorRef,
  ElementRef,
  OnDestroy,
  ViewChild,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NavigationService } from "src/app/navigation.service";
import { DataPlayersService } from "src/app/services/data-players.service";
import { Player } from "../../interfaces/player.interface";
import { YouTubePlayer } from "@angular/youtube-player";

@Component({
  selector: "app-video-page",
  templateUrl: "./video-page.component.html",
  styleUrls: ["./video-page.component.scss"],
})
export class VideoPageComponent implements OnInit, AfterViewInit, OnDestroy {
  player: Player = {} as Player;
  selectedPlayer: Player = {} as Player;
  playerService: any;
  @ViewChild("demoYouTubePlayer")
  demoYouTubePlayer!: ElementRef<HTMLDivElement>;
  videoWidth: number | undefined;
  videoHeight: number | undefined;

  constructor(
    private router: Router,
    public navigation: NavigationService,
    private dataPlayers: DataPlayersService,
    private route: ActivatedRoute,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.dataPlayers.getPlayer(id).subscribe((player) => {
      this.player = player;
      this.videoWidth = Math.min(
        this.demoYouTubePlayer.nativeElement.clientWidth,
        1200
      );
      this.videoHeight = this.videoWidth * 0.6;
      this._changeDetectorRef.detectChanges();
    });
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

  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  }

  onResize = (): void => {
    // Automatically expand the video to fit the page up to 1200px x 720px
    this.videoWidth = Math.min(
      this.demoYouTubePlayer.nativeElement.clientWidth,
      1200
    );
    this.videoHeight = this.videoWidth * 0.6;
    this._changeDetectorRef.detectChanges();
  };

  ngOnDestroy(): void {
    window.removeEventListener("resize", this.onResize);
  }
}
