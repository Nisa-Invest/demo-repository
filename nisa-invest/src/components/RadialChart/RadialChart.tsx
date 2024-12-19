
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";


export function RadialChart() {
  const series = [76, 67, 61, 90];
  const options: ApexOptions = {
    chart: {
      height: 390,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "30%",
          background: "transparent",
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
      },
    },
    colors: ["#5d4970", "#8f5fa3", "#595959", "#9ea8ed"],

    labels: [
      "Pensions",
      "Family Benefits",
      "Student Loan Repayment",
      "Charity",
    ],
    legend: {
      show: true,
      floating: true,
      fontSize: "16px",
      position: "left",
      offsetX: 270,
      offsetY: 15,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0,
      },
      formatter: function (seriesName, opts) {
        return (
          seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + "%"
        );
      },
      itemMargin: {
        vertical: 3,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ],
  };

  return (
    <div className="radial-chart">
      <ReactApexChart
        options={options}
        series={series}
        type="radialBar"
        height={390}
      />
    </div>
  );
}
