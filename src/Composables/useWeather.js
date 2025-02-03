import { useWeatherStore } from '../stores/WeatherStore.js';
import { Get_Temperatura } from '../helpers/getWeather.js';

export const useWeather = async() => {
    const temperatura = await Get_Temperatura();
    const weatherStore = useWeatherStore();
    weatherStore.temperatura = temperatura;
}