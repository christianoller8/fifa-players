import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeaturesPageComponent } from "./components/features-page/features-page.component";
import { CareerPageComponent } from "./components/career-page/career-page.component";
import { VideoPageComponent } from "./components/video-page/video-page.component";

const routes: Routes = [
  {
    path: "features-page",
    component: FeaturesPageComponent,
  },
  {
    path: "carrer-page",
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
