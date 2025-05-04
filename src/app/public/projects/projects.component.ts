import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ApiPublicConnectService } from '../api-public-connect.service';
import slugify from 'slugify';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects: any[] = [];
  isLoading: boolean = true;

  imageUrl: any = ApiPublicConnectService.imageUrl;

  constructor(
    private router: Router,
    private mainService: ApiPublicConnectService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loadProjects();
  }


  loadProjects() {
    // Replace this with actual API call to fetch data
    this.mainService.getProjects().subscribe((data: any) => {
      // console.log(data)
      this.projects = data;
      this.isLoading = false;
    });
  }

  moveToProjectContent(project: any) {
    // console.log(project)
    this.router.navigate(
      ['/project', project.slug], 
      { state: { data: project }
    });
  }
}
