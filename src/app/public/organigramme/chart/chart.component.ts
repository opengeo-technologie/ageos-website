import { Component } from "@angular/core";
import { FlowShapeModel } from "@syncfusion/ej2-angular-diagrams";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.css"],
})
export class ChartComponent {
  public terminator: FlowShapeModel = { type: "Flow", shape: "Terminator" };
  public decision: FlowShapeModel = { type: "Flow", shape: "Decision" };
}
