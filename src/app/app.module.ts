import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { FeaturesPageComponent } from "./components/features-page/features-page.component";
import { VideoPageComponent } from "./components/video-page/video-page.component";
import { CareerPageComponent } from "./components/career-page/career-page.component";
import { NavigationService } from "./navigation.service";
import { CardPlayerComponent } from './card-player/card-player.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FeaturesPageComponent,
    VideoPageComponent,
    CareerPageComponent,
    CardPlayerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [NavigationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
