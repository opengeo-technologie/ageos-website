import { HttpEventType } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../../admin-service.service';
declare var M: any;

@Component({
  selector: 'app-form-project',
  // standalone: true,
  // imports: [],
  templateUrl: './form-project.component.html',
  styleUrl: './form-project.component.css'
})
export class FormProjectComponent {
  @Input() project: any|undefined;
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
      let logo: any;
      let banner: any;

      const fileInput = document.getElementById('logo') as HTMLInputElement;
      if (fileInput.files && fileInput.files[0]) {
        logo = fileInput.files[0];
      }

      const fileInput1 = document.getElementById('banner') as HTMLInputElement;
      if (fileInput1.files && fileInput1.files[0]) {
        banner = fileInput1.files[0];
      }
      // console.log(this.news.image_1)
      if (this.project.image_1 != '') {
        const fileInput = document.getElementById('image_1') as HTMLInputElement;
        if (fileInput.files && fileInput.files[0]) {
          images[0] = fileInput.files[0];
        }
      }
      if (this.project.image_2 != '') {
        const fileInput = document.getElementById('image_2') as HTMLInputElement;
        if (fileInput.files && fileInput.files[0]) {
          images[1] = fileInput.files[0];
        }
      }
      if (this.project.image_3 != '') {
        const fileInput = document.getElementById('image_3') as HTMLInputElement;
        if (fileInput.files && fileInput.files[0]) {
          images[2] = fileInput.files[0];
        }
      }
      if (this.project.image_4 != '') {
        const fileInput = document.getElementById('image_4') as HTMLInputElement;
        if (fileInput.files && fileInput.files[0]) {
          images[3] = fileInput.files[0];
        }
      }

      this.adminService.saveProject(this.project, images, logo, banner).subscribe(event => {
        // console.log(response.body)
        if (event.type === HttpEventType.Response) {
          // Handle the response from the server
          M.toast({html: 'Data created successfully....', 
          classes: 'rounded green accent-4', inDuration: 500, outDuration: 575});
          // this.loadItems();
          this.router.navigate(['/admin/projects']);
        }
      });
      
    } else {
      this.adminService.updateProject(this.project).subscribe(event => {
        // console.log(response.body)
        if (event.type === HttpEventType.Response) {
          // Handle the response from the server
          M.toast({html: 'Data updated successfully....', 
          classes: 'rounded green accent-4', inDuration: 500, outDuration: 575});
          // this.loadItems();
          this.router.navigate(['/admin/projects']);
        }
      });
    }
  }
}
