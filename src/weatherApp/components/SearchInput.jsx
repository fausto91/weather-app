import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useForm, useWeatherStore } from "../../hooks";

const formSearch = {
  searchCity: ''
}

export const SearchInput = () => {
  const {searchCity, onInputChange} = useForm(formSearch);
  const { startLoadingCurrentWeather, startLoadingForecastWeather } = useWeatherStore();

  const searchSubmit = ( event ) => {
    event.preventDefault();
    if (!searchCity) return;
   startLoadingCurrentWeather(searchCity);
   startLoadingForecastWeather(searchCity);

  }
  
  return (
    <Paper
      component="form"
      onSubmit={searchSubmit}
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Buscar ciudad"
        name="searchCity"
        value={ searchCity }
        onChange={onInputChange}
      />
      <IconButton onSubmit={searchSubmit}  type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
