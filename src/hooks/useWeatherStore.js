import { useDispatch, useSelector } from "react-redux";
import weatherApi from "../api/weatherApi";
import { onLoadCurrentWeather, onLoadForescastWeather, onMessage } from "../store/weather/weatherSlice";
import dayjs from "dayjs";


export const useWeatherStore = () => {
   const { currentWeather, forecastWeather, message } = useSelector((state) => state.weather);
   const dispatch = useDispatch();

    const startLoadingCurrentWeather = async (city)=> {
        try {
            const { data } = await weatherApi.get('weather', { params: {q: city}});
            const { description } = data.weather[0];
            const { name } = data;
            const { lat, lon } = data.coord;
            const { temp, temp_max, temp_min, humidity} = data.main;
            dispatch(onLoadCurrentWeather({temp, temp_max, temp_min, humidity, description, name, lat, lon}));
         
        } catch (error) {
            dispatch(onMessage(!error.response ? error.message : error.response.data?.message || 'Error'));
            
        }
    };

     const startLoadingForecastWeather = async (city) => {
        try {
            const { data } = await weatherApi.get('forecast', { params: {q: city, cnt: 5 }});
            const getDataListWeather =data.list.map((item) => {
                return {
                    dt: dayjs.unix(item.dt).format('DD/MM/YYYY H:m:s'),
                    pressure: item.main.pressure,
                    seaLevel: item.main.sea_level,
                    grndLevel: item.main.grnd_level,
                    speed: item.wind.speed,
                    deg: item.wind.deg,
                    gust: item.wind.gust
                };
            });
            dispatch(onLoadForescastWeather(getDataListWeather));
        } catch (error) {
            dispatch(onMessage(!error.response ? error.message : error.response.data?.message || 'Error'));
        }
     }

    return {
        currentWeather,
        message,
        forecastWeather,
        startLoadingCurrentWeather,
        startLoadingForecastWeather
    }
 
}
