import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import {
  BarGraph,
  GaugeGraph,
  LineGraph,
  StackedAreaChartGraph,
} from "../index";
import { Typography } from "@mui/material";
import { useWeatherStore } from "../../hooks";
import { CustomTooltip } from "../../helpers/components/CustomTooltip";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const TemplateGrid = () => {
  const { currentWeather } = useWeatherStore();
  const { temp_min, temp_max, temp, description, humidity } = currentWeather;

  return (
    <>
   
    <Box sx={{ width: "100%", mt: 3, height: "100%" }}>
        
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6}>
          <Item>
            <CustomTooltip text='Temperatura actual'>
            <Typography variant="h5" align="center">
                Temperatura: {temp}ºC
            </Typography>
            </CustomTooltip>
            
            <Typography variant="h6" align="center">
              {description}
            </Typography>
              <Typography align="right">
                Máx.{temp_max}  Mín.{temp_min}°C.
              </Typography>
            <LineGraph />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item>
            <CustomTooltip text='Humedad actual'>
              <Typography variant="h5" align="center">
                Humedad: {humidity}%
              </Typography>
            </CustomTooltip>
            <GaugeGraph />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item>
            <CustomTooltip text="Pronóstico de la presión atmosférica. Atm:Presión atmosférica, Mar: Presión atmosférica sobre el nivel del mar, Suelo: Presión atmosférica en el nivel del suelo.">
              <Typography variant="h5" align="center">
                Presión
              </Typography>
            </CustomTooltip> 
            <StackedAreaChartGraph />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item>
            <CustomTooltip text="Pronóstico de la velocidad del viento">
            <Typography variant="h5" align="center">
              Viento
            </Typography>
            </CustomTooltip>
            <BarGraph />
          </Item>
        </Grid>
      </Grid>
    </Box>
  </>
  );
};
