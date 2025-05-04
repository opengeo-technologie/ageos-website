import { Component } from '@angular/core';
import { Router } from '@angular/router';
import slugify from 'slugify';
import { ApiPublicConnectService } from 'src/app/public/api-public-connect.service';

@Component({
  selector: 'app-list-content-project',
  // standalone: true,
  // imports: [],
  templateUrl: './list-content-project.component.html',
  styleUrl: './list-content-project.component.css'
})
export class ListContentProjectComponent {
  project: any|undefined;
  isLoading: boolean = true;

  constructor(
    private router: Router,
    private mainService: ApiPublicConnectService,
  ) {}

  ngOnInit(): void {
    // Get state data
    const stateData = history.state.data; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    this.project = stateData;
    this.isLoading = false;
  }

  detailContent(projectContent: any) {
    this.router.navigate(
      ['admin/project/content/detail', projectContent.id], 
      { state: { data: projectContent, project: this.project }
    });
  }

  addContent() {
    this.router.navigate(
      ['admin/project/add/content'], 
      { state: { data: this.project }
    });
  }

  editContent(projectContent: any) {
    this.router.navigate(
      ['admin/project/content/edit', projectContent.id], 
      { state: { data: projectContent, project: this.project }
    });
  }
}
