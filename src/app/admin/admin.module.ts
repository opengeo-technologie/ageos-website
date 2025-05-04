import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginFormComponent } from "./login-form/login-form.component";
import { AdminLayoutComponent } from "./admin-layout/admin-layout.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { EmptyLayoutComponent } from "./empty-layout/empty-layout.component";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { RouterModule } from "@angular/router";
import { BannerComponent } from "./banner/banner.component";
import { NewsComponent } from "./news/news.component";
import { PartnersComponent } from "./partners/partners.component";
import { ProjectComponent } from "./project/project.component";
import { FormNewsComponent } from "./news/form-news/form-news.component";
import { AddNewsComponent } from "./news/add-news/add-news.component";
import { EditNewsComponent } from "./news/edit-news/edit-news.component";
import { DetailsNewsComponent } from "./news/details-news/details-news.component";
import { TextEditorComponent } from "./text-editor/text-editor.component";
import { FormsModule } from "@angular/forms";
import { QuillModule } from "ngx-quill";
import { DetailBannerComponent } from "./banner/detail-banner/detail-banner.component";
import { FormBannerComponent } from "./banner/form-banner/form-banner.component";
import { AddBannerComponent } from "./banner/add-banner/add-banner.component";
import { EditBannerComponent } from "./banner/edit-banner/edit-banner.component";
import { FormPartnerComponent } from "./partners/form-partner/form-partner.component";
import { AddPartnerComponent } from "./partners/add-partner/add-partner.component";
import { EditPartnerComponent } from "./partners/edit-partner/edit-partner.component";
import { DetailPartnerComponent } from "./partners/detail-partner/detail-partner.component";
import { FormProjectComponent } from "./project/form-project/form-project.component";
import { AddProjectComponent } from "./project/add-project/add-project.component";
import { EditProjectComponent } from "./project/edit-project/edit-project.component";
import { DetailProjectComponent } from "./project/detail-project/detail-project.component";
import { ListContentProjectComponent } from "./project/list-content-project/list-content-project.component";
import { FormContentComponent } from "./project/list-content-project/form-content/form-content.component";
import { AddContentComponent } from "./project/list-content-project/add-content/add-content.component";
import { EditContentComponent } from "./project/list-content-project/edit-content/edit-content.component";
import { DetailContentComponent } from "./project/list-content-project/detail-content/detail-content.component";
import { OurActivityComponent } from "./our-activity/our-activity.component";
import { FormActivityComponent } from "./our-activity/form-activity/form-activity.component";
import { AddActivityComponent } from "./our-activity/add-activity/add-activity.component";
import { EditActivityComponent } from "./our-activity/edit-activity/edit-activity.component";
import { DetailActivityComponent } from "./our-activity/detail-activity/detail-activity.component";
import { ContentActivityComponent } from "./our-activity/content-activity/content-activity.component";
import { FormContentActivityComponent } from "./our-activity/content-activity/form-content-activity/form-content-activity.component";
import { AddContentActivityComponent } from "./our-activity/content-activity/add-content-activity/add-content-activity.component";
import { EditContentActivityComponent } from "./our-activity/content-activity/edit-content-activity/edit-content-activity.component";
import { DetailContentActivityComponent } from "./our-activity/content-activity/detail-content-activity/detail-content-activity.component";
import { EnBrefComponent } from "./ageos/en-bref/en-bref.component";
import { FormEnBrefComponent } from "./ageos/en-bref/form-en-bref/form-en-bref.component";
import { AddEnBrefComponent } from "./ageos/en-bref/add-en-bref/add-en-bref.component";
import { EditEnBrefComponent } from "./ageos/en-bref/edit-en-bref/edit-en-bref.component";
import { DetailEnBrefComponent } from "./ageos/en-bref/detail-en-bref/detail-en-bref.component";
import { VisionMissionComponent } from "../admin/ageos/vision-mission/vision-mission.component";
import { FormVisionMissionComponent } from "./ageos/vision-mission/form-vision-mission/form-vision-mission.component";
import { AddVisionMissionComponent } from "./ageos/vision-mission/add-vision-mission/add-vision-mission.component";
import { EditVisionMissionComponent } from "./ageos/vision-mission/edit-vision-mission/edit-vision-mission.component";
import { AreaExpertiseComponent } from "./ageos/area-expertise/area-expertise.component";
import { FormComponent } from "./ageos/area-expertise/form/form.component";
import { AddComponent } from "./ageos/area-expertise/add/add.component";
import { EditComponent } from "./ageos/area-expertise/edit/edit.component";
import { DetailComponent } from "./ageos/area-expertise/detail/detail.component";
import { DirectionComponent } from "./ageos/direction/direction.component";
import { AddDirectionComponent } from "./ageos/direction/add/add.component";
import { EditDirectionComponent } from "./ageos/direction/edit/edit.component";
import { DetailDirectionComponent } from "./ageos/direction/detail/detail.component";
import { FormDirectionComponent } from "./ageos/direction/form/form.component";
import { FormDirectorComponent } from "./ageos/director/form/form.component";
import { AddDirectorComponent } from "./ageos/director/add/add.component";
import { EditDirectorComponent } from "./ageos/director/edit/edit.component";
import { ServiceComponent } from "./ageos/service/service.component";
import { FormServiceComponent } from "./ageos/service/form/form.component";
import { AddServiceComponent } from "./ageos/service/add/add.component";
import { EditServiceComponent } from "./ageos/service/edit/edit.component";
import { DetailServiceComponent } from "./ageos/service/detail/detail.component";
import { FormChiefServiceComponent } from "./ageos/service-chief/form/form.component";
import { AddChiefServiceComponent } from "./ageos/service-chief/add/add.component";
import { EditChiefServiceComponent } from "./ageos/service-chief/edit/edit.component";
import { UserComponent } from "./user/user.component";
import { FormUserComponent } from "./user/form/form.component";
import { AddUserComponent } from "./user/add/add.component";
import { EditUserComponent } from "./user/edit/edit.component";
import { JwtModule } from "@auth0/angular-jwt";

// export function tokenGetter() {
//   return localStorage.getItem("access_token");
// }

@NgModule({
  declarations: [
    LoginFormComponent,
    AdminLayoutComponent,
    EmptyLayoutComponent,
    UserDashboardComponent,
    BannerComponent,
    NewsComponent,
    PartnersComponent,
    ProjectComponent,
    FormNewsComponent,
    AddNewsComponent,
    EditNewsComponent,
    DetailsNewsComponent,
    TextEditorComponent,
    DetailBannerComponent,
    FormBannerComponent,
    AddBannerComponent,
    EditBannerComponent,
    FormPartnerComponent,
    AddPartnerComponent,
    EditPartnerComponent,
    DetailPartnerComponent,
    FormProjectComponent,
    AddProjectComponent,
    EditProjectComponent,
    DetailProjectComponent,
    ListContentProjectComponent,
    FormContentComponent,
    AddContentComponent,
    EditContentComponent,
    DetailContentComponent,
    OurActivityComponent,
    FormActivityComponent,
    AddActivityComponent,
    EditActivityComponent,
    DetailActivityComponent,
    ContentActivityComponent,
    FormContentActivityComponent,
    AddContentActivityComponent,
    EditContentActivityComponent,
    DetailContentActivityComponent,
    EnBrefComponent,
    FormEnBrefComponent,
    AddEnBrefComponent,
    EditEnBrefComponent,
    DetailEnBrefComponent,
    VisionMissionComponent,
    FormVisionMissionComponent,
    AddVisionMissionComponent,
    EditVisionMissionComponent,
    AreaExpertiseComponent,
    FormComponent,
    AddComponent,
    EditComponent,
    DetailComponent,
    DirectionComponent,
    FormDirectionComponent,
    AddDirectionComponent,
    EditDirectionComponent,
    DetailDirectionComponent,
    FormDirectorComponent,
    AddDirectorComponent,
    EditDirectorComponent,
    ServiceComponent,
    FormServiceComponent,
    AddServiceComponent,
    EditServiceComponent,
    DetailServiceComponent,
    FormChiefServiceComponent,
    AddChiefServiceComponent,
    EditChiefServiceComponent,
    UserComponent,
    FormUserComponent,
    AddUserComponent,
    EditUserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    FormsModule,
    QuillModule.forRoot(),
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: tokenGetter,
    //     allowedDomains: ["localhost:8000"], // Django backend
    //   },
    // }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule {}
