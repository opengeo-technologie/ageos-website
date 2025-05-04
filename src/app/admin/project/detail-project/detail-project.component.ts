import { HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import slugify from 'slugify';
import { ApiPublicConnectService } from 'src/app/public/api-public-connect.service';
import { AdminServiceService } from '../../admin-service.service';
declare var M: any;

@Component({
  selector: 'app-detail-project',
  // standalone: true,
  // imports: [],
  templateUrl: './detail-project.component.html',
  styleUrl: './detail-project.component.css'
})
export class DetailProjectComponent {
  project: any|undefined;
  modalInstance: any;
  imageToModifyId: any;
  ImageToModifyUrl: any;
  newImage: any;
  imageUrl: any = ApiPublicConnectService.imageUrl;
  
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private adminService: AdminServiceService,
  ) {}


  ngOnInit() {

    // Get state data
    const stateData = history.state.data; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    this.project = stateData;
    // console.log(stateData)

    setTimeout(() => {
      var elems = document.querySelectorAll('.materialboxed');
      var instances = M.Materialbox.init(elems);
    }, 2000);

    const elems = document.querySelectorAll('.modal');
    this.modalInstance = M.Modal.init(elems, {
      dismissible: false // Prevent modal from closing by clicking outside or pressing Escape
    });

    
  }

  contentProject(project: any) {
    const slug = slugify(project.title, {
      lower: true,      // convert to lowercase
      strict: true      // remove special characters
    });
    this.router.navigate(
      ['admin/project/content', slug], 
      { state: { data: project }
    });
  }

  editProject(project: any) {
    const slug = slugify(project.title, {
      lower: true,      // convert to lowercase
      strict: true      // remove special characters
    });
    this.router.navigate(
      ['admin/project/edit', slug], 
      { state: { data: project }
    });
  }

  openModalAddImage() {
    console.log(this.modalInstance)
    this.modalInstance[2].open();
  }

  openModalEditImage(image_id: any, url:any) {
    console.log(this.modalInstance)
    this.imageToModifyId = image_id;
    this.ImageToModifyUrl = url;
    this.modalInstance[0].open();
  }

  openModalDeleteImage(image_id: any, url:any) {
    this.imageToModifyId = image_id;
    this.ImageToModifyUrl = url;
    this.modalInstance[1].open();
  }

  updateImage() {
    const fileInput = document.getElementById('image') as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      this.newImage = fileInput.files[0];
      this.adminService.updateBannerImage(this.project.id, this.newImage).subscribe(event => {
        // console.log(response.body)
        if (event.type === HttpEventType.Response) {
          // Handle the response from the server
          M.toast({html: 'Data updated successfully....', 
          classes: 'rounded green accent-4', inDuration: 500, outDuration: 575});
          // this.loadItems();
          this.router.navigate(['/admin/banners']);
        }
      });
    }
    
  }
}
