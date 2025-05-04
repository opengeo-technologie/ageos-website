import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../../admin-service.service';
import { HttpEventType } from '@angular/common/http';
declare var M: any;

@Component({
  selector: 'app-form-partner',
  // standalone: true,
  // imports: [],
  templateUrl: './form-partner.component.html',
  styleUrl: './form-partner.component.css'
})
export class FormPartnerComponent {
  @Input() partner: any|undefined;
  description: string = '';
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
      let image: any;
      // console.log(this.banner.image_1)
      const fileInput = document.getElementById('image') as HTMLInputElement;
      if (fileInput.files && fileInput.files[0]) {
        image = fileInput.files[0];
        // console.log(this.banner)
        this.adminService.savePartner(this.partner, image).subscribe(event => {
          // console.log(response.body)
          if (event.type === HttpEventType.Response) {
            // Handle the response from the server
            M.toast({html: 'Data created successfully....', 
            classes: 'rounded green accent-4', inDuration: 500, outDuration: 575});
            // this.loadItems();
            this.router.navigate(['/admin/partners']);
          }
        });
      }
      
    } else {
      this.adminService.updatPartner(this.partner).subscribe(event => {
        // console.log(response.body)
        if (event.type === HttpEventType.Response) {
          // Handle the response from the server
          M.toast({html: 'Data updated successfully....', 
          classes: 'rounded green accent-4', inDuration: 500, outDuration: 575});
          // this.loadItems();
          this.router.navigate(['/admin/partners']);
        }
      });
    }
  }
}
