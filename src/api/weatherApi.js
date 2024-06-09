import axios from "axios";
import { getEnvVariables } from '../helpers/getEnvVariables';


const { VITE_API_URL, VITE_API_KEY } = getEnvVariables();

const weatherApi = axios.create({
    baseURL: VITE_API_URL,
});

weatherApi.interceptors.request.use(config => {
    config.params = config.params || {};
    config.params.units = 'metric';
    config.params.lang = 'es';
    config.params.appid = VITE_API_KEY;

    return config;
});

export default weatherApi;

