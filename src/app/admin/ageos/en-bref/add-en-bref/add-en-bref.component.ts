import { Component } from '@angular/core';

@Component({
  selector: 'app-add-en-bref',
  templateUrl: './add-en-bref.component.html',
  styleUrl: './add-en-bref.component.css'
})
export class AddEnBrefComponent {
  motDG: any = {
    libelle: '',
    name: '',
    content: '',
    image: '',
  }

  decret: any = {
    libelle: '',
    content: '',
    image: '',
    file: '',
  }

  chiffre: any = {
    libelle: '',
  }

  page: any;

  ngOnInit(): void {
    // Get state data
    const stateData = history.state.data; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    this.page = stateData;
  }
}
