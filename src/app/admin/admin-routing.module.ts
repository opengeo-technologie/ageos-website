import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminLayoutComponent } from "./admin-layout/admin-layout.component";
import { RouterModule, Routes } from "@angular/router";
import { LoginFormComponent } from "./login-form/login-form.component";
import { EmptyLayoutComponent } from "./empty-layout/empty-layout.component";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { BannerComponent } from "./banner/banner.component";
import { NewsComponent } from "./news/news.component";
import { PartnersComponent } from "./partners/partners.component";
import { ProjectComponent } from "./project/project.component";
import { DetailsNewsComponent } from "./news/details-news/details-news.component";
import { AddNewsComponent } from "./news/add-news/add-news.component";
import { EditNewsComponent } from "./news/edit-news/edit-news.component";
import { DetailBannerComponent } from "./banner/detail-banner/detail-banner.component";
import { EditBannerComponent } from "./banner/edit-banner/edit-banner.component";
import { AddBannerComponent } from "./banner/add-banner/add-banner.component";
import { AddPartnerComponent } from "./partners/add-partner/add-partner.component";
import { EditPartnerComponent } from "./partners/edit-partner/edit-partner.component";
import { DetailPartnerComponent } from "./partners/detail-partner/detail-partner.component";
import { AddProjectComponent } from "./project/add-project/add-project.component";
import { EditProjectComponent } from "./project/edit-project/edit-project.component";
import { DetailProjectComponent } from "./project/detail-project/detail-project.component";
import { ListContentProjectComponent } from "./project/list-content-project/list-content-project.component";
import { AddContentComponent } from "./project/list-content-project/add-content/add-content.component";
import { EditContentComponent } from "./project/list-content-project/edit-content/edit-content.component";
import { DetailContentComponent } from "./project/list-content-project/detail-content/detail-content.component";
import { OurActivityComponent } from "./our-activity/our-activity.component";
import { AddActivityComponent } from "./our-activity/add-activity/add-activity.component";
import { EditActivityComponent } from "./our-activity/edit-activity/edit-activity.component";
import { DetailActivityComponent } from "./our-activity/detail-activity/detail-activity.component";
import { ContentActivityComponent } from "./our-activity/content-activity/content-activity.component";
import { AddContentActivityComponent } from "./our-activity/content-activity/add-content-activity/add-content-activity.component";
import { EditContentActivityComponent } from "./our-activity/content-activity/edit-content-activity/edit-content-activity.component";
import { DetailContentActivityComponent } from "./our-activity/content-activity/detail-content-activity/detail-content-activity.component";
import { EnBrefComponent } from "./ageos/en-bref/en-bref.component";
import { AreaExpertiseComponent } from "./ageos/area-expertise/area-expertise.component";
import { VisionMissionComponent } from "./ageos/vision-mission/vision-mission.component";
import { AddEnBrefComponent } from "./ageos/en-bref/add-en-bref/add-en-bref.component";
import { EditEnBrefComponent } from "./ageos/en-bref/edit-en-bref/edit-en-bref.component";
import { DetailEnBrefComponent } from "./ageos/en-bref/detail-en-bref/detail-en-bref.component";
import { AddVisionMissionComponent } from "./ageos/vision-mission/add-vision-mission/add-vision-mission.component";
import { EditVisionMissionComponent } from "./ageos/vision-mission/edit-vision-mission/edit-vision-mission.component";
import { DetailVisionMissionComponent } from "./ageos/vision-mission/detail-vision-mission/detail-vision-mission.component";
import { AddComponent } from "./ageos/area-expertise/add/add.component";
import { EditComponent } from "./ageos/area-expertise/edit/edit.component";
import { DetailComponent } from "./ageos/area-expertise/detail/detail.component";
import { DirectionComponent } from "./ageos/direction/direction.component";
import { AddDirectionComponent } from "./ageos/direction/add/add.component";
import { EditDirectionComponent } from "./ageos/direction/edit/edit.component";
import { DetailDirectionComponent } from "./ageos/direction/detail/detail.component";
import { AddDirectorComponent } from "./ageos/director/add/add.component";
import { EditDirectorComponent } from "./ageos/director/edit/edit.component";
import { ServiceComponent } from "./ageos/service/service.component";
import { EditServiceComponent } from "./ageos/service/edit/edit.component";
import { DetailServiceComponent } from "./ageos/service/detail/detail.component";
import { AddServiceComponent } from "./ageos/service/add/add.component";
import { AddChiefServiceComponent } from "./ageos/service-chief/add/add.component";
import { EditChiefServiceComponent } from "./ageos/service-chief/edit/edit.component";
import { UserComponent } from "./user/user.component";
import { AddUserComponent } from "./user/add/add.component";
import { EditUserComponent } from "./user/edit/edit.component";
import { authGuard } from "../auth.guard";

const routes: Routes = [
  {
    path: "admin",
    component: EmptyLayoutComponent,
    // canActivate:[AuthGuard],
    children: [
      { path: "", component: LoginFormComponent },
      // { path:'vision-missions', component: VisionMissionComponent},
    ],
  },

  {
    path: "admin",
    component: AdminLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: "users", component: UserComponent },
      { path: "user/add", component: AddUserComponent },
      { path: "user/edit/:slug", component: EditUserComponent },

      { path: "dashboard", component: UserDashboardComponent },

      { path: "banners", component: BannerComponent },
      { path: "banner/add", component: AddBannerComponent },
      { path: "banner/edit/:slug", component: EditBannerComponent },
      { path: "banner/detail/:slug", component: DetailBannerComponent },

      { path: "news", component: NewsComponent },
      { path: "news/add", component: AddNewsComponent },
      { path: "news/edit/:slug", component: EditNewsComponent },
      { path: "news/detail/:slug", component: DetailsNewsComponent },

      { path: "partners", component: PartnersComponent },
      { path: "partner/add", component: AddPartnerComponent },
      { path: "partner/edit/:slug", component: EditPartnerComponent },
      { path: "partner/detail/:slug", component: DetailPartnerComponent },

      { path: "our-activities", component: OurActivityComponent },
      { path: "our-activities/add", component: AddActivityComponent },
      { path: "our-activities/edit/:slug", component: EditActivityComponent },
      {
        path: "our-activities/detail/:slug",
        component: DetailActivityComponent,
      },
      {
        path: "our-activities/content/:slug",
        component: ContentActivityComponent,
      },
      {
        path: "our-activities/add/content",
        component: AddContentActivityComponent,
      },
      {
        path: "our-activities/content/edit/:slug",
        component: EditContentActivityComponent,
      },
      {
        path: "our-activities/content/detail/:slug",
        component: DetailContentActivityComponent,
      },
      { path: "projects", component: ProjectComponent },
      { path: "project/add", component: AddProjectComponent },
      { path: "project/edit/:slug", component: EditProjectComponent },
      { path: "project/detail/:slug", component: DetailProjectComponent },
      { path: "project/content/:slug", component: ListContentProjectComponent },
      { path: "project/add/content", component: AddContentComponent },
      { path: "project/content/edit/:slug", component: EditContentComponent },
      {
        path: "project/content/detail/:slug",
        component: DetailContentComponent,
      },

      { path: "ageos-en-bref", component: EnBrefComponent },
      { path: "ageos-en-bref/add", component: AddEnBrefComponent },
      { path: "ageos-en-bref/edit", component: EditEnBrefComponent },
      { path: "ageos-en-bref/detail", component: DetailEnBrefComponent },
      { path: "vision-missions", component: VisionMissionComponent },
      { path: "vision-mission/add", component: AddVisionMissionComponent },
      { path: "vision-mission/edit", component: EditVisionMissionComponent },
      {
        path: "vision-missions/detail",
        component: DetailVisionMissionComponent,
      },
      { path: "domaines-competences", component: AreaExpertiseComponent },
      { path: "domaines-competences/add", component: AddComponent },
      {
        path: "domaines-competences/edit/:slug",
        component: EditComponent,
      },
      {
        path: "domaines-competences/detail/:slug",
        component: DetailComponent,
      },
      {
        path: "directions",
        component: DirectionComponent,
      },
      {
        path: "direction/edit/:slug",
        component: EditDirectionComponent,
      },
      {
        path: "direction/detail/:slug",
        component: DetailDirectionComponent,
      },
      {
        path: "direction/add",
        component: AddDirectionComponent,
      },
      {
        path: "director/add",
        component: AddDirectorComponent,
      },
      {
        path: "director/edit/:slug",
        component: EditDirectorComponent,
      },

      {
        path: "services",
        component: ServiceComponent,
      },
      {
        path: "service/edit/:slug",
        component: EditServiceComponent,
      },
      {
        path: "service/detail/:slug",
        component: DetailServiceComponent,
      },
      {
        path: "service/add",
        component: AddServiceComponent,
      },
      {
        path: "chef-service/add",
        component: AddChiefServiceComponent,
      },
      {
        path: "chef-service/edit/:slug",
        component: EditChiefServiceComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [],
})
export class AdminRoutingModule {}
