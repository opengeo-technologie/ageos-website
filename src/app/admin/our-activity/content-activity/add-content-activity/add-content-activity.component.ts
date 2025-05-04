import { Component } from '@angular/core';

@Component({
  selector: 'app-add-content-activity',
  templateUrl: './add-content-activity.component.html',
  styleUrl: './add-content-activity.component.css'
})
export class AddContentActivityComponent {
  contentActivity: any = {
    label: '',
    description: '',
    banner_image: '',
  }

  activityId: any|undefined;

  ngOnInit(): void {
    // Get state data
    const stateData = history.state.data; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    this.activityId = stateData;
    console.log(this.activityId)
  }
}
