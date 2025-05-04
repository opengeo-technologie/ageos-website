window.onload = function () {
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
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          { y: 51.08, label: "Gabon" },
          { y: 27.34, label: "Cameroun" },
          { y: 10.62, label: "France" },
          { y: 5.02, label: "Senegal" },
          { y: 4.07, label: "Tchad" },
        ],
      },
    ],
  });
  setTimeout(() => {
    chart2.render();
  }, 1000);
};
