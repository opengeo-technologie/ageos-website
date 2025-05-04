import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import slugify from 'slugify';
import { ApiPublicConnectService } from 'src/app/public/api-public-connect.service';
import { AdminServiceService } from '../../admin-service.service';
import { HttpEventType } from '@angular/common/http';
declare var M: any;

@Component({
  selector: 'app-details-news',
  templateUrl: './details-news.component.html',
  styleUrls: ['./details-news.component.css']
})
export class DetailsNewsComponent {


  news: any|undefined;
  max_images: number = 4;
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
    this.news = stateData;
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

  editNews(news: any) {
    const slug = slugify(news.title, {
      lower: true,      // convert to lowercase
      strict: true      // remove special characters
    });
    this.router.navigate(
      ['admin/news/edit', slug], 
      { state: { data: news }
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

  addImage() {
    const fileInput = document.getElementById('image_add') as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      this.newImage = fileInput.files[0];
      this.adminService.addNewsImage(this.news.id, this.newImage).subscribe(event => {
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

  updateImage() {
    const fileInput = document.getElementById('image') as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      this.newImage = fileInput.files[0];
      this.adminService.updateNewsImage(this.imageToModifyId, this.newImage).subscribe(event => {
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

  deleteImage() {
    this.adminService.deleteNewsImage(this.imageToModifyId).subscribe(event => {
      // console.log(response.body)
      // Handle the response from the server
      M.toast({html: 'Data deleted successfully....', 
        classes: 'rounded red accent-4', inDuration: 500, outDuration: 575});
        // this.loadItems();
        this.router.navigate(['/admin/news']);
    });
    
  }

}
