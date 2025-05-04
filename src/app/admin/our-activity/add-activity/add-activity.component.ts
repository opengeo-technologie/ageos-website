import { Component } from '@angular/core';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrl: './add-activity.component.css'
})
export class AddActivityComponent {
  activity: any = {
    label: '',
    description: '',
    banner_image: '',
  }
}
