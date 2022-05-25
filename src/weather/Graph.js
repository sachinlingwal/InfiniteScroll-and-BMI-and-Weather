import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Graph = ({ min, max }) => {
  console.log(min);
  const options = {
    title: {
      text: "Weather App",
    },
    subtitle: {
      text: "using Weather API",
    },
    xAxis: {
      title: {
        // text: `<b> ${series.length} days data </b>`,
      },
    },
    yAxis: {
      title: {
        text: "Temp",
      },
    },
    // series: [
    // //   {
    // //     type: "areaspline",
    // //     // data: series,
    // //     showInLegend: false,
    // //     name: "weight",
    // //   },
    // ],
    series: [
      {
        name: "Min",
        data: [Math.round(min)],
      },
      {
        name: "Max",
        data: [Math.round(max)],
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Graph;
