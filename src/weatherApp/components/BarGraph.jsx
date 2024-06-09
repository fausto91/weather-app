import { BarChart } from '@mui/x-charts/BarChart';
import { useWeatherStore } from '../../hooks';

export const BarGraph = () => {
  const { forecastWeather } = useWeatherStore();
  const [ time1, time2, time3, time4, time5] = forecastWeather;
  return (
    <BarChart
    xAxis={[{ scaleType: 'band', data: [time1.dt, time2.dt, time3.dt, time4.dt, time5.dt] }]}
    series={[
      { data: [time1.speed, time2.speed, time3.speed, time4.speed, time5.speed], label: "Velocidad m/s" }, 
      { data: [time1.gust, time2.gust, time3.gust, time4.gust, time5.gust], label:"Ráfaga m/s" }]}
    height={300}
  />
);
}
