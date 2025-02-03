import axios from 'axios';
const API_URL = 'hhttps://api.open-meteo.com/v1/forecast?latitude=29.1026&longitude=-110.9773&current=temperature_2m&timezone=auto';

export const Get_Temperatura = async () => {
    const respuesta = await axios.get(API_URL);
    const NuevaTemperatura = respuesta.data.current.temperature_2m;
    return NuevaTemperatura;
};
