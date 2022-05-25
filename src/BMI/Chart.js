import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Chart = ({ series }) => {
  const options = {
    title: {
      text: "BMI Calculation Chart",
    },
    xAxis: {
      title: {
        text: `<b> ${series.length} days data </b>`,
      },
    },
    yAxis: {
      title: {
        text: "Weight",
      },
    },
    series: [
      {
        type: "areaspline",
        data: series,
        showInLegend: false,
        name: "weight",
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Chart;
