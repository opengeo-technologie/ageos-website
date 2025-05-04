import { Component, OnInit, Renderer2 } from "@angular/core";
import { Router } from "@angular/router";
import { AdminServiceService } from "../admin-service.service";
import { count } from "rxjs";
declare var CanvasJS: any;

@Component({
  selector: "app-user-dashboard",
  templateUrl: "./user-dashboard.component.html",
  styleUrls: ["./user-dashboard.component.css"],
})
export class UserDashboardComponent implements OnInit {
  totalVisitors: number = 0;
  totalVisitorsPerCountry: any[] = [];
  totalVisitorsPerMonth: any[] = [];

  constructor(
    private router: Router,
    private mainService: AdminServiceService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    // const script = this.renderer.createElement("script");
    // script.src = "../../../assets/js/chart.js"; // Adjust the path if needed
    // script.type = "text/javascript";
    // script.async = true;
    // script.defer = true;
    // this.renderer.appendChild(document.body, script);
    this.loadVisitors();
  }

  loadVisitors() {
    this.mainService.getVisitors().subscribe((data: any) => {
      console.log(data);
      this.totalVisitors = data.total_visitors;
      this.totalVisitorsPerCountry = data.visitors_per_country;
      this.totalVisitorsPerMonth = data.visitors_per_month;
      this.chartVisitorsPerMonth(this.totalVisitorsPerMonth);
      this.chartVisitorsPerCountry(this.totalVisitorsPerCountry);
    });
  }

  chartVisitorsPerMonth(data: any) {
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      // theme: "light3",
      title: {
        text: "Visiteurs par mois",
      },
      axisY: {
        includeZero: false,
        title: "Nombre de visiteurs",
      },
      axisX: {
        title: "Mois",
      },
      data: [
        {
          type: "line",
          xValueType: "string",
          dataPoints: data,
        },
      ],
    });

    setTimeout(() => {
      chart.render();
    }, 1000);
  }

  chartVisitorsPerCountry(data: any) {
    var chart2 = new CanvasJS.Chart("pieChartContainer", {
      theme: "light2", // "light1", "light2", "dark1", "dark2"
      exportEnabled: true,
      animationEnabled: true,
      title: {
        text: "Pourcentage de visiteurs par pays",
      },
      data: [
        {
          type: "pie",
          startAngle: 25,
          toolTipContent: "<b>{label}</b>: {y}",
          showInLegend: "true",
          legendText: "{label}",
          indexLabelFontSize: 16,
          indexLabel: "{label} - {y}",
          dataPoints: data,
        },
      ],
    });
    setTimeout(() => {
      chart2.render();
    }, 1000);
  }
}
