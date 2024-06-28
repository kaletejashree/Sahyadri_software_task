const xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false
    }, { 
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "green",
      fill: false
    }, { 
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});
/*bar graph*/
const labels1 = ["Mon", "Tue", "Wed", "Thur", "Fri"];
        const dataValues1 = [30, 25, 20, 35, 40];
        const backgroundColors1 = ["red", "orange", "yellow", "green", "purple"];

        new Chart("chart1", {
            type: "bar",
            data: {
                labels: labels1,
                datasets: [{
                    backgroundColor: backgroundColors1,
                    data: dataValues1,
                    barThickness: 20 // Adjust bar width here for the first chart
                }]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: "Food Consumption 2023"
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });