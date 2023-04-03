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
    data: {
      breadcrumb: "home",
    },
    children: [
      {
        path: "",
        component: HomePageComponent,
        data: {
          breadcrumb: null,
        },
      },
      {
        path: ":id/features-page",
        data: {
          breadcrumb: "Features",
        },
        children: [
          {
            path: "",
            component: FeaturesPageComponent,
            data: {
              breadcrumb: null,
            },
          },
          {
            path: ":id/video-page",
            data: {
              breadcrumb: "Videos",
            },
            children: [
              {
                path: "",
                component: VideoPageComponent,
                data: {
                  breadcrumb: null,
                },
              },
              {
                path: ":id/carrer-page",
                component: CareerPageComponent,
                data: {
                  breadcrumb: "Career",
                },
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
