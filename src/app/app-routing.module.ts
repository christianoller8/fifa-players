import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeaturesPageComponent } from "./components/features-page/features-page.component";
import { CareerPageComponent } from "./components/career-page/career-page.component";
import { VideoPageComponent } from "./components/video-page/video-page.component";
import { HomePageComponent } from "./components/home-page/home-page.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home-page",
    pathMatch: "full",
  },
  {
    path: "home-page",
    component: HomePageComponent,
  },
  {
    path: "features-page/:id",
    component: FeaturesPageComponent,
  },
  {
    path: "carrer-page/:id",
    component: CareerPageComponent,
  },
  {
    path: "video-page",
    component: VideoPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
