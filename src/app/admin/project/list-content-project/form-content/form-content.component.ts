import { HttpEventType } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import slugify from 'slugify';
import { AdminServiceService } from 'src/app/admin/admin-service.service';
declare var M: any;

@Component({
  selector: 'app-form-content',
  templateUrl: './form-content.component.html',
  styleUrl: './form-content.component.css'
})
export class FormContentComponent {
  @Input() project: any|undefined;
  @Input() projectContent: any|undefined;
  isAddForm: boolean;

  constructor(
    private adminService: AdminServiceService,
    private router: Router
  ) {
    this.isAddForm = this.router.url.includes('add');
  }

  isBlank(str: string) {
    return (!str || /^\s*$/.test(str));
  }

  onSubmit() {
    if (this.isAddForm) {
      let images: any[] = [];
      // console.log(this.news.image_1)
      if (this.projectContent.image_1 != '') {
        const fileInput = document.getElementById('image_1') as HTMLInputElement;
        if (fileInput.files && fileInput.files[0]) {
          images[0] = fileInput.files[0];
        }
      }
      if (this.projectContent.image_2 != '') {
        const fileInput = document.getElementById('image_2') as HTMLInputElement;
        if (fileInput.files && fileInput.files[0]) {
          images[1] = fileInput.files[0];
        }
      }
      if (this.projectContent.image_3 != '') {
        const fileInput = document.getElementById('image_3') as HTMLInputElement;
        if (fileInput.files && fileInput.files[0]) {
          images[2] = fileInput.files[0];
        }
      }
      if (this.projectContent.image_4 != '') {
        const fileInput = document.getElementById('image_4') as HTMLInputElement;
        if (fileInput.files && fileInput.files[0]) {
          images[3] = fileInput.files[0];
        }
      }

      this.adminService.saveProjectContent(this.project, this.projectContent, images).subscribe(event => {
        // console.log(response.body)
        if (event.type === HttpEventType.Response) {
          // Handle the response from the server
          M.toast({html: 'Data created successfully....', 
          classes: 'rounded green accent-4', inDuration: 500, outDuration: 575});
          // this.loadItems();
          const slug = slugify(this.project.title, {
            lower: true,      // convert to lowercase
            strict: true      // remove special characters
          });
          this.router.navigate(
            ['admin/project/content', slug], 
            { state: { data: this.project }
          });
        }
      });
      
    } else {
      this.adminService.updateProjectContent(this.projectContent).subscribe(event => {
        // console.log(response.body)
        if (event.type === HttpEventType.Response) {
          // Handle the response from the server
          M.toast({html: 'Data updated successfully....', 
          classes: 'rounded green accent-4', inDuration: 500, outDuration: 575});
          // this.loadItems();
          const slug = slugify(this.project.title, {
            lower: true,      // convert to lowercase
            strict: true      // remove special characters
          });
          this.router.navigate(
            ['admin/project/content', slug], 
            { state: { data: this.project }
          });
        }
      });
    }
  }
}
