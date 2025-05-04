import { Component } from '@angular/core';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent {

  news: any = {
    title: '',
    content: '',
    start_date: '',
    end_date: '',
    image_1: '',
    image_2: '',
    image_3: '',
    image_4: '',
  }

}
