import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { ApiPublicConnectService } from '../api-public-connect.service';

@Component({
  selector: 'app-project-content',
  templateUrl: './project-content.component.html',
  styleUrls: ['./project-content.component.css']
})
export class ProjectContentComponent implements OnInit{


  selectedProject: any|undefined;
  private routeSub: Subscription = new Subscription();

  imageUrl: any = ApiPublicConnectService.imageUrl;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const stateData = history.state.data; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    // console.log('State Data:', stateData);

    this.selectedProject = stateData;
    
  }

}
