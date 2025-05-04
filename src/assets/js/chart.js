window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light3",
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
        dataPoints: [
          {
            label: "Janv",
            y: 450,
          },
          {
            label: "Fev",
            y: 414,
          },
          {
            label: "Mars",
            y: 520,
            indexLabel: "max",
            markerColor: "red",
            markerType: "triangle",
          },
          {
            label: "Avr",
            y: 460,
          },
          {
            label: "Mai",
            y: 450,
          },
          {
            label: "Juin",
            y: 500,
          },
          {
            label: "Juil",
            y: 480,
          },
          {
            label: "Aout",
            y: 480,
          },
          {
            label: "Sept",
            y: 410,
            indexLabel: "min",
            markerColor: "DarkSlateGrey",
            markerType: "cross",
          },
          {
            label: "Oct",
            y: 500,
          },
          {
            label: "Nov",
            y: 480,
          },
          {
            label: "Dec",
            y: 510,
          },
        ],
      },
    ],
  });
  setTimeout(() => {
    chart.render();
  }, 1000);

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
