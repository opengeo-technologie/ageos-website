import { HttpEventType } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../../admin-service.service';
declare var M: any;

@Component({
  selector: 'app-form-activity',
  templateUrl: './form-activity.component.html',
  styleUrl: './form-activity.component.css'
})
export class FormActivityComponent {
  @Input() activity: any|undefined;
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
      // this.banner.image_1 = this.banner.images[0].image;
    }
  }

  isBlank(str: string) {
    return (!str || /^\s*$/.test(str));
  }

  onSubmit() {
    if (this.isAddForm) {
      let image: any;
      // console.log(this.banner.image_1)
      const fileInput = document.getElementById('image') as HTMLInputElement;
      if (fileInput.files && fileInput.files[0]) {
        image = fileInput.files[0];
        // console.log(this.banner)
        this.adminService.saveOurActivity(this.activity, image).subscribe(event => {
          // console.log(response.body)
          if (event.type === HttpEventType.Response) {
            // Handle the response from the server
            M.toast({html: 'Data created successfully....', 
            classes: 'rounded green accent-4', inDuration: 500, outDuration: 575});
            // this.loadItems();
            this.router.navigate(['/admin/our-activities']);
          }
        });
      }
      
      
      
    } else {
      this.adminService.updateOurActivity(this.activity).subscribe(event => {
        // console.log(response.body)
        if (event.type === HttpEventType.Response) {
          // Handle the response from the server
          M.toast({html: 'Data updated successfully....', 
          classes: 'rounded green accent-4', inDuration: 500, outDuration: 575});
          // this.loadItems();
          this.router.navigate(['/admin/our-activities']);
        }
      });
    }
  }
}
