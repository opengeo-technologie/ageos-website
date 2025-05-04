import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiPublicConnectService } from 'src/app/public/api-public-connect.service';
import { AdminServiceService } from '../../admin-service.service';
declare var M: any;

@Component({
  selector: 'app-en-bref',
  templateUrl: './en-bref.component.html',
  styleUrl: './en-bref.component.css'
})
export class EnBrefComponent implements OnInit{

  motDG: any[] = [];
  decrets: any[] = [];
  keyFigures: any[] = [];
  isLoading: boolean = true;
  imageUrl: any = ApiPublicConnectService.imageUrl;

  constructor(
    private router: Router,
    private adminService: AdminServiceService,
  ) {}

  ngOnInit(): void {
    this.loadMotDG();
    this.loadDecret();
    this.loadKeyFigure();
  }

  loadMotDG() {
    // Replace this with actual API call to fetch data
    this.adminService.getMotDG().subscribe((data: any) => {
      // console.log(data)
      this.motDG = data;
      this.isLoading = false;
      setTimeout(() => {
        const elems = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(elems); // Initialize materialbox
      });
      
    });
  }

  loadDecret() {
    // Replace this with actual API call to fetch data
    this.adminService.getDecret().subscribe((data: any) => {
      // console.log(data)
      this.decrets = data;
    });
  }

  loadKeyFigure() {
    // Replace this with actual API call to fetch data
    this.adminService.getKeyFigure().subscribe((data: any) => {
      // console.log(data)
      this.keyFigures = data;
    });
  }

  addEnBref(page: any) {
    this.router.navigate(
      ['/admin/ageos-en-bref/add'], 
      { state: { data: page }
    });
  }

  editer(item: any, page: any) {
    this.router.navigate(
      ['/admin/ageos-en-bref/edit'], 
      { state: { page: page, data: item }
    });
  }

  detail(item: any, page: any) {
    this.router.navigate(
      ['/admin/ageos-en-bref/detail'], 
      { state: { page: page, data: item }
    });
  }

}
