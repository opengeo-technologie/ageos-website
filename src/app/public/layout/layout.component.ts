import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from 'src/app/screen-size.service';
declare var M: any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{
  instanceParallax: any;
  screenWidth: number;
  screenHeight: number;

  services: any[] = [
    {id: 1, name: 'Station de Reception Directe (SRD)'},
    {id: 2, name: 'Forêt (SF)'},
    {id: 3, name: 'Thématique Prioritaire (STP)'},
    {id: 4, name: 'Evalution des Politiques Public (SEPP)'},
    {id: 5, name: 'Systemes d\'Information (SI)'},
  ]

  projects: any[] = [
    {id: 1, name: "Central African Forest Initiative (CAFI)"},
    {id: 2, name: "OSFACO"},
    {id: 3, name: "RARS"},
    {id: 4, name: "GMES & AFRICA"},
  ]

  constructor(private screenSizeService: ScreenSizeService) {}

  ngOnInit(): void {

    this.screenSizeService.screenSize$.subscribe(size => {
      this.screenWidth = size.width;
      this.screenHeight = size.height;
    });


    if (this.screenWidth <= 500) {
    var dropdowns = document.querySelectorAll('.small-screen');

      const optionsDropdown = {
        autoTrigger: false,
        coverTrigger: false,
        constrainWidth: false,
        // hover: true
      }
      var instances = M.Dropdown.init(dropdowns, optionsDropdown);
    } else {
      var dropdowns = document.querySelectorAll('.large-screen');

      const optionsDropdown = {
        autoTrigger: false,
        coverTrigger: false,
        constrainWidth: false,
        hover: true
      }
      var instances = M.Dropdown.init(dropdowns, optionsDropdown);
    }

    var elems = document.querySelectorAll('.sidenav');
    var options = {
      preventScrolling: false,
      isOpen: true,
    };
    var instancesSideNav = M.Sidenav.init(elems, options);
  }
}
