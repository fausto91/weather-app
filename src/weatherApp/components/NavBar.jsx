import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { SearchInput } from './SearchInput';
import { useWeatherStore } from '../../hooks';



export const NavBar = () => {
  const { currentWeather } = useWeatherStore();
  const { lat, lon, name  } = currentWeather;
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar> 
        <SearchInput/>   
        <Typography variant="subtitle1" sx={{ flexGrow: 1 }} align='right'>
          {name}, lat:{lat}, lon:{lon}
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  )
}
