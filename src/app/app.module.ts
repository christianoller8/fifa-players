import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { FeaturesPageComponent } from "./components/features-page/features-page.component";
import { VideoPageComponent } from "./components/video-page/video-page.component";
import { CareerPageComponent } from "./components/career-page/career-page.component";
import { NavigationService } from "./navigation.service";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { BreadcrumComponent } from "./components/breadcrum/breadcrum.component";
import { YouTubePlayerModule } from "@angular/youtube-player";
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FeaturesPageComponent,
    VideoPageComponent,
    CareerPageComponent,
    NavBarComponent,
    BreadcrumComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadcrumbModule,
    YouTubePlayerModule,
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
