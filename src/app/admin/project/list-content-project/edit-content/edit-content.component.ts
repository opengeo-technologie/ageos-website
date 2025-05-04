import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-content',
  templateUrl: './edit-content.component.html',
  styleUrl: './edit-content.component.css'
})
export class EditContentComponent {
  project: any|undefined;
  projectContent: any|undefined;

  ngOnInit(): void {
    // Get state data
    const stateData = history.state.data; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    const stateProject = history.state.project; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    this.project = stateProject;
    this.projectContent = stateData;
    // console.log(this.project)
  }
}
