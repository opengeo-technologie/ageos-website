import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-banner',
  // standalone: true,
  // imports: [],
  templateUrl: './edit-banner.component.html',
  styleUrl: './edit-banner.component.css'
})
export class EditBannerComponent {
  banner: any|undefined;

  ngOnInit(): void {
    // Get state data
    const stateData = history.state.data; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    this.banner = stateData;
    console.log(this.banner)
  }
}
