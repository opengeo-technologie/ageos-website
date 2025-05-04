import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { VisionMissionComponent } from "./vision-mission/vision-mission.component";
import { InfoGeneralComponent } from "./info-general/info-general.component";
import { OrganigrammeComponent } from "./organigramme/organigramme.component";
import { ServiceContentComponent } from "./service-content/service-content.component";
import { ProjectContentComponent } from "./project-content/project-content.component";
import { NewsDetailComponent } from "./news-detail/news-detail.component";
import { NewsComponent } from "./news/news.component";
import { AreaCompetenceComponent } from "./area-competence/area-competence.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ContactComponent } from "./contact/contact.component";
import { OurServicesComponent } from "./our-services/our-services.component";
import { OurServiceContentDetailsComponent } from "./our-service-content-details/our-service-content-details.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    // canActivate:[AuthGuard],
    children: [
      { path: "", component: MainPageComponent },
      { path: "ageos-en-bref", component: VisionMissionComponent },
      { path: "mot-du-dg", component: InfoGeneralComponent },
      { path: "organigramme", component: OrganigrammeComponent },
      {
        path: "services",
        component: ServiceContentComponent,
        runGuardsAndResolvers: "paramsChange",
      },
      {
        path: "projets",
        component: ProjectsComponent,
        runGuardsAndResolvers: "paramsChange",
      },
      {
        path: "project/:slug",
        component: ProjectContentComponent,
        runGuardsAndResolvers: "paramsChange",
      },
      {
        path: "actualite",
        component: NewsDetailComponent,
        runGuardsAndResolvers: "paramsChange",
      },
      { path: "actualites", component: NewsComponent },
      { path: "domaines-de-competence", component: AreaCompetenceComponent },
      { path: "contact", component: ContactComponent },
      { path: "service/:slug", component: OurServicesComponent },
      {
        path: "service-content/:slug/:slug",
        component: OurServiceContentDetailsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
