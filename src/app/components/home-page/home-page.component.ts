import { Component } from "@angular/core";
import { NavigationService } from "src/app/navigation.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent {
  constructor(public navigation: NavigationService) {}
}
