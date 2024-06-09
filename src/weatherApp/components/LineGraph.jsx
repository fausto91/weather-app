import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';
import { useWeatherStore } from '../../hooks';
import { gaugeClasses } from '@mui/x-charts';
import { autocompleteClasses } from '@mui/material';


export const LineGraph = () => {
  const { currentWeather } = useWeatherStore();
  const { temp_min, temp_max, temp } = currentWeather;
  return (
    <LineChart
    xAxis={[{ scaleType:'point', data: ['Inicio','Mín', 'Actual', 'Máx'] }]}
    series={[
      {
        data:[0, temp_min, temp, temp_max],
      },
    ]}
    height={248}
    sx={{
      [`& .${gaugeClasses.valueText}`]: {
        fontSize: 40,
        transform: "translate(0px, 0px)",
      },
    }}
  />
  );
}
