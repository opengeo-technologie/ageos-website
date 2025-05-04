import { Component } from '@angular/core';

@Component({
  selector: 'app-add-partner',
  // standalone: true,
  // imports: [],
  templateUrl: './add-partner.component.html',
  styleUrl: './add-partner.component.css'
})
export class AddPartnerComponent {
  partner: any = {
    name: '',
    description: '',
    logo: '',
    website: ''
  }
}
