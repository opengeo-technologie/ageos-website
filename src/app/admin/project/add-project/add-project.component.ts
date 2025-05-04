import { Component } from '@angular/core';

@Component({
  selector: 'app-add-project',
  // standalone: true,
  // imports: [],
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.css'
})
export class AddProjectComponent {
  project: any = {
    title: '',
    description: '',
    banner: '',
    logo: ''
  }
}
