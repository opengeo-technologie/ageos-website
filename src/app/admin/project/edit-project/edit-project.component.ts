import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-project',
  // standalone: true,
  // imports: [],
  templateUrl: './edit-project.component.html',
  styleUrl: './edit-project.component.css'
})
export class EditProjectComponent {
  project: any|undefined;

  ngOnInit(): void {
    // Get state data
    const stateData = history.state.data; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    this.project = stateData;
    console.log(this.project)
  }
}
