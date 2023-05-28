import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeaturesPageComponent } from "./components/features-page/features-page.component";
import { CareerPageComponent } from "./components/career-page/career-page.component";
import { VideoPageComponent } from "./components/video-page/video-page.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { BreadcrumComponent } from "./components/breadcrum/breadcrum.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/",
    pathMatch: "full",
  },
  {
    path: "",

    children: [
      {
        path: "",
        component: HomePageComponent,
      },
      {
        path: ":id/features-page",
        children: [
          {
            path: "",
            component: FeaturesPageComponent,
          },
          {
            path: ":id/video-page",
            children: [
              {
                path: "",
                component: VideoPageComponent
              },
              {
                path: ":id/carrer-page",
                component: CareerPageComponent,
                children: [
                  {
                    path: "",
                    component: BreadcrumComponent,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
