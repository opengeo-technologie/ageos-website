import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import slugify from 'slugify';
import { AdminServiceService } from 'src/app/admin/admin-service.service';
import { ApiPublicConnectService } from 'src/app/public/api-public-connect.service';

@Component({
  selector: 'app-detail-content-activity',
  templateUrl: './detail-content-activity.component.html',
  styleUrl: './detail-content-activity.component.css'
})
export class DetailContentActivityComponent {
  activity: any|undefined;

  imageUrl: any = ApiPublicConnectService.imageUrl;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private adminService: AdminServiceService,
  ) {}

  ngOnInit(): void {
    // Get state data
    const stateData = history.state.data; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    this.activity = stateData;
    // console.log(this.activity)
  }

  editActivityContent(contentActivity: any) {
    this.router.navigate(
      ['admin/our-activities/content/edit', contentActivity.slug], 
      { state: { data: contentActivity }
    });
  }

  openModalEditImage(image_id: any, url:any) {
    // console.log(this.modalInstance)
    // this.imageToModifyId = image_id;
    // this.ImageToModifyUrl = url;
    // this.modalInstance[0].open();
  }

  updateImage() {
    // const fileInput = document.getElementById('image') as HTMLInputElement;
    // if (fileInput.files && fileInput.files[0]) {
    //   this.newImage = fileInput.files[0];
    //   this.adminService.updateBannerImage(this.banner.id, this.newImage).subscribe(event => {
    //     // console.log(response.body)
    //     if (event.type === HttpEventType.Response) {
    //       // Handle the response from the server
    //       M.toast({html: 'Data updated successfully....', 
    //       classes: 'rounded green accent-4', inDuration: 500, outDuration: 575});
    //       // this.loadItems();
    //       this.router.navigate(['/admin/banners']);
    //     }
    //   });
    // }
  }
}
