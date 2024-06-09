import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { useWeatherStore } from "../../hooks";

export const GaugeGraph = () => {
  const { currentWeather } = useWeatherStore();
  const {  humidity } = currentWeather;
  return (
    <Gauge
      value={humidity}
      startAngle={-110}
      endAngle={110}
      height={300}
      sx={{
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 40,
          transform: "translate(0px, 0px)",
        },
      }}
      text={({ value, valueMax }) => `${value} / ${valueMax}`}
    />
  );
};
