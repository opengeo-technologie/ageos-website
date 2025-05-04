import { Component } from '@angular/core';
import { ApiPublicConnectService } from 'src/app/public/api-public-connect.service';

@Component({
  selector: 'app-detail-activity',
  templateUrl: './detail-activity.component.html',
  styleUrl: './detail-activity.component.css'
})
export class DetailActivityComponent {
  activity: any|undefined;

  imageUrl: any = ApiPublicConnectService.imageUrl;

  ngOnInit(): void {
    // Get state data
    const stateData = history.state.data; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    this.activity = stateData;
  }
}
