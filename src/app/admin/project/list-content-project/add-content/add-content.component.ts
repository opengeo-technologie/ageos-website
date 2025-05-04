import { Component } from '@angular/core';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrl: './add-content.component.css'
})
export class AddContentComponent {

  project: any|undefined;
  projectContent: any = {
    content: '',
    image_1: '',
    image_2: '',
    image_3: '',
    image_4: '',
  }

  ngOnInit(): void {
    // Get state data
    const stateData = history.state.data; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    this.project = stateData;
    console.log(this.project)
  }
}
