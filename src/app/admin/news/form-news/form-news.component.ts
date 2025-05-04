import { Component, Input, OnInit } from '@angular/core';
import { AdminServiceService } from '../../admin-service.service';
import { Router } from '@angular/router';
import { HttpEventType } from '@angular/common/http';
declare var M: any;

@Component({
  selector: 'app-form-news',
  templateUrl: './form-news.component.html',
  styleUrls: ['./form-news.component.css']
})
export class FormNewsComponent implements OnInit{
  @Input() news: any|undefined;
  description: string = '';
  isAddForm: boolean;

  constructor(
    private adminService: AdminServiceService,
    private router: Router
  ) {
    this.isAddForm = this.router.url.includes('add');
  }

  ngOnInit(): void {
    // console.log(this.isBlank(' '))
    if (!this.isAddForm) {
      // this.news.image_1 = this.news.images[0].image;
    }
  }

  isBlank(str: string) {
    return (!str || /^\s*$/.test(str));
  }

  onSubmit() {
    if (this.isAddForm) {
      let images: any[] = [];
      // console.log(this.news.image_1)
      if (this.news.image_1 != '') {
        const fileInput = document.getElementById('image_1') as HTMLInputElement;
        if (fileInput.files && fileInput.files[0]) {
          images[0] = fileInput.files[0];
        }
      }
      if (this.news.image_2 != '') {
        const fileInput = document.getElementById('image_2') as HTMLInputElement;
        if (fileInput.files && fileInput.files[0]) {
          images[1] = fileInput.files[0];
        }
      }
      if (this.news.image_3 != '') {
        const fileInput = document.getElementById('image_3') as HTMLInputElement;
        if (fileInput.files && fileInput.files[0]) {
          images[2] = fileInput.files[0];
        }
      }
      if (this.news.image_4 != '') {
        const fileInput = document.getElementById('image_4') as HTMLInputElement;
        if (fileInput.files && fileInput.files[0]) {
          images[3] = fileInput.files[0];
        }
      }
      // console.log(this.news)
      this.adminService.saveNews(this.news, images).subscribe(event => {
        // console.log(response.body)
        if (event.type === HttpEventType.Response) {
          // Handle the response from the server
          M.toast({html: 'Data created successfully....', 
          classes: 'rounded green accent-4', inDuration: 500, outDuration: 575});
          // this.loadItems();
          this.router.navigate(['/admin/news']);
        }
      });
      
      
    } else {
      this.adminService.updateNews(this.news).subscribe(event => {
        // console.log(response.body)
        if (event.type === HttpEventType.Response) {
          // Handle the response from the server
          M.toast({html: 'Data updated successfully....', 
          classes: 'rounded green accent-4', inDuration: 500, outDuration: 575});
          // this.loadItems();
          this.router.navigate(['/admin/news']);
        }
      });
    }
  }
}
