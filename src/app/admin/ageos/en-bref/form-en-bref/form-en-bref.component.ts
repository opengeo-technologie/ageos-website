import { HttpEventType } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/admin/admin-service.service';
declare var M: any;

@Component({
  selector: 'app-form-en-bref',
  templateUrl: './form-en-bref.component.html',
  styleUrl: './form-en-bref.component.css'
})
export class FormEnBrefComponent {
  @Input() motDG: any|undefined;
  @Input() decret: any|undefined;
  @Input() chiffre: any|undefined;
  @Input() page: any|undefined;
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
      if (this.page=='dg') {
        let image: any;
        const fileInput = document.getElementById('image') as HTMLInputElement;
        if (fileInput.files && fileInput.files[0]) {
          image = fileInput.files[0];
          // console.log(this.banner)
          this.adminService.saveMotDG(this.motDG, image).subscribe(event => {
            // console.log(response.body)
            if (event.type === HttpEventType.Response) {
              // Handle the response from the server
              M.toast({html: 'Data created successfully....', 
              classes: 'rounded green accent-4', inDuration: 500, outDuration: 575});
              // this.loadItems();
              this.router.navigate(['/admin/ageos-en-bref']);
            }
          });
        }
      }

      if (this.page=='decret') {
        let image: any;
        let file: any;
        const imageInput = document.getElementById('image') as HTMLInputElement;
        if (imageInput.files && imageInput.files[0]) {
          image = imageInput.files[0];
        }

        const fileInput = document.getElementById('fileInput') as HTMLInputElement;
        if (fileInput.files && fileInput.files[0]) {
          file = fileInput.files[0];
        }

        this.adminService.saveDecret(this.decret, image, file).subscribe(event => {
          // console.log(response.body)
          if (event.type === HttpEventType.Response) {
            // Handle the response from the server
            M.toast({html: 'Data created successfully....', 
            classes: 'rounded green accent-4', inDuration: 500, outDuration: 575});
            // this.loadItems();
            this.router.navigate(['/admin/ageos-en-bref']);
          }
        });
      }

      if (this.page=='chiffre') {

        this.adminService.savekeyFigure(this.chiffre).subscribe(event => {
          // console.log(response.body)
          if (event.type === HttpEventType.Response) {
            // Handle the response from the server
            M.toast({html: 'Data created successfully....', 
            classes: 'rounded green accent-4', inDuration: 500, outDuration: 575});
            // this.loadItems();
            this.router.navigate(['/admin/ageos-en-bref']);
          }
        });
      }

    } else {
      if (this.page=='dg') {
        let image: any;
        const fileInput = document.getElementById('image') as HTMLInputElement;
        if (fileInput.files && fileInput.files[0]) {
          image = fileInput.files[0];
        }
        this.adminService.updateMotDG(this.motDG, image).subscribe(event => {
          // console.log(response.body)
          if (event.type === HttpEventType.Response) {
            // Handle the response from the server
            M.toast({html: 'Data updated successfully....', 
            classes: 'rounded green accent-4', inDuration: 500, outDuration: 575});
            // this.loadItems();
            this.router.navigate(['/admin/ageos-en-bref']);
          }
        });
      }

      if (this.page=='decret') {
        let image: any;
        let file: any;
        const imageInput = document.getElementById('image') as HTMLInputElement;
        if (imageInput.files && imageInput.files[0]) {
          image = imageInput.files[0];
        }

        const fileInput = document.getElementById('fileInput') as HTMLInputElement;
        if (fileInput.files && fileInput.files[0]) {
          file = fileInput.files[0];
        }

        this.adminService.updateDecret(this.decret, image, file).subscribe(event => {
          // console.log(response.body)
          if (event.type === HttpEventType.Response) {
            // Handle the response from the server
            M.toast({html: 'Data updated successfully....', 
            classes: 'rounded green accent-4', inDuration: 500, outDuration: 575});
            // this.loadItems();
            this.router.navigate(['/admin/ageos-en-bref']);
          }
        });
      }

      if (this.page=='chiffre') {

        this.adminService.updatekeyFigure(this.chiffre).subscribe(event => {
          // console.log(response.body)
          if (event.type === HttpEventType.Response) {
            // Handle the response from the server
            M.toast({html: 'Data updated successfully....', 
            classes: 'rounded green accent-4', inDuration: 500, outDuration: 575});
            // this.loadItems();
            this.router.navigate(['/admin/ageos-en-bref']);
          }
        });
      }
    }
  }
}
