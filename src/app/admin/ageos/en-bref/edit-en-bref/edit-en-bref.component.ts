import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-en-bref',
  templateUrl: './edit-en-bref.component.html',
  styleUrl: './edit-en-bref.component.css'
})
export class EditEnBrefComponent {
  motDG: any;

  decret: any;

  chiffre: any;

  page: any;

  ngOnInit(): void {
    // Get state data
    const stateData = history.state.data; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    this.page = history.state.page;
    if (this.page == 'dg') {
      this.motDG = stateData;
      this.motDG.image = ''
    } else if (this.page == 'decret') {
      this.decret = stateData;
    } else {
      this.chiffre = stateData;
    }
  }
}
