import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PublicRoutingModule } from './public-routing.module';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { AgeosComponent } from './ageos/ageos.component';
import { VisionMissionComponent } from './vision-mission/vision-mission.component';
import { OrganigrammeComponent } from './organigramme/organigramme.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InfoGeneralComponent } from './info-general/info-general.component';
import { ServiceContentComponent } from './service-content/service-content.component';
import { ProjectContentComponent } from './project-content/project-content.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './news/news.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { ProjectsComponent } from './projects/projects.component';
import { AreaCompetenceComponent } from './area-competence/area-competence.component';
import { ContactComponent } from './contact/contact.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurServiceContentDetailsComponent } from './our-service-content-details/our-service-content-details.component';


@NgModule({
  declarations: [
    LayoutComponent,
    MainPageComponent,
    NewsletterComponent,
    AgeosComponent,
    VisionMissionComponent,
    OrganigrammeComponent,
    NavbarComponent,
    InfoGeneralComponent,
    ServiceContentComponent,
    ProjectContentComponent,
    NewsComponent,
    NewsDetailComponent,
    ProjectsComponent,
    AreaCompetenceComponent,
    ContactComponent,
    OurServicesComponent,
    OurServiceContentDetailsComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    HttpClientModule,
  ]
})
export class PublicModule { }
