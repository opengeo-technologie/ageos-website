import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiPublicConnectService } from '../api-public-connect.service';
declare var M: any;

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent {

  title: string = '';
  pageBannerImage: string = '';
  pageContent: string = '';
  images: any[] = [];
  start_date: any = '';
  end_date: any = '';

  imageUrl: any = ApiPublicConnectService.imageUrl;


  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Get query parameters
    // this.route.queryParams.subscribe(params => {
    //   const name = params['name'];
    //   const age = params['age'];
    //   console.log('Query Params:', name, age); // 'John', 30
    // });

    // Get state data
    const stateData = history.state.data; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    // console.log('State Data:', stateData);

    this.title = stateData.title;
    this.pageBannerImage = this.imageUrl + stateData.images[0].image;
    this.pageContent = stateData.content;
    this.images = stateData.images;
    this.start_date = stateData.start_date;
    this.end_date = stateData.end_date;

    setTimeout(() => {
      var elems = document.querySelectorAll('.materialboxed');
      var instances = M.Materialbox.init(elems);
    }, 2000);

    
  }

}
