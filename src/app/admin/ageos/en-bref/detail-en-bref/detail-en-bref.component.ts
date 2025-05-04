import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/admin/admin-service.service';
import { ApiPublicConnectService } from 'src/app/public/api-public-connect.service';

@Component({
  selector: 'app-detail-en-bref',
  templateUrl: './detail-en-bref.component.html',
  styleUrl: './detail-en-bref.component.css'
})
export class DetailEnBrefComponent {
  motDG: any|undefined;
  decrets: any|undefined;
  keyFuture: any|undefined;
  page: any;

  imageUrl: any = ApiPublicConnectService.imageUrl;

  constructor(
    private router: Router,
    private mainService: AdminServiceService
  ) {}

  ngOnInit(): void {
    const stateData = history.state.data; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    this.page = history.state.page;
    console.log(stateData)
    if (this.page == 'dg') {
      this.motDG = stateData;
    } else if (this.page == 'decret') {
      this.decrets = stateData;
    } else {
      this.keyFuture = stateData;
    }
  }

  editer(item: any) {
    this.router.navigate(
      ['/admin/ageos-en-bref/edit'], 
      { state: { page: this.page, data: item }
    });
  }
}
