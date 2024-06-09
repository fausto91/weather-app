import { LineChart } from "@mui/x-charts/LineChart";
import { useWeatherStore } from "../../hooks";


export const StackedAreaChartGraph = () => {
  const { forecastWeather } = useWeatherStore();
  const [ time1, time2, time3, time4, time5] = forecastWeather;
  return (
      <LineChart
        height={300}
        series={[
          {
            data: [time1.pressure, time2.pressure, time3.pressure, time4.pressure, time5.pressure],
            label: "Atm hPa",
            area: true,
            stack: "total",
            showMark: false,
          },
          {
            data: [time1.seaLevel, time2.seaLevel, time3.seaLevel, time4.seaLevel, time5.seaLevel],
            label: "Mar, hPa",
            area: true,
            stack: "total",
            showMark: false,
          },
          {
            data: [time1.grndLevel, time2.grndLevel, time3.grndLevel, time4.grndLevel, time5.grndLevel],
            label: "Suelo, hPa",
            area: true,
            stack: "total",
            showMark: false,
          },
        ]}
        xAxis={[{ scaleType: "point", data: [time1.dt, time2.dt, time3.dt, time4.dt, time5.dt] }]}
      />
  );
};
