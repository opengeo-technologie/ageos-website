import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-partner',
  // standalone: true,
  // imports: [],
  templateUrl: './edit-partner.component.html',
  styleUrl: './edit-partner.component.css'
})
export class EditPartnerComponent {
  partner: any|undefined;

  ngOnInit(): void {
    // Get state data
    const stateData = history.state.data; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    this.partner = stateData;
    console.log(this.partner)
  }
}
