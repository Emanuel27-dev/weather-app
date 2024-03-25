import { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";

export const WeatherContext = createContext(null);

export const ContextComponentProvider = ({children}) => {

    // currentData: guardara la info del clima actual
    const [currentData, setCurrentData] = useState({});
    const [arrayCurrentForecast, setArrayCurrentForecast] = useState([]);
    const [city, setCity] = useState();


    const fetchCurrentData = async (city) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=es&units=metric&appid=7ae7b6690b951f6cdf317416699d6d9c`);

        const data = await response.json();

        setCurrentData({
            city: data.name,
            description: data.weather[0].description,
            temperature: data.main.temp,
            tempMin: data.main.temp_min,
            tempMax: data.main.temp_max,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            main: data.weather[0].main

        });

    }

    const fetchForecastCurrentDay = async (city) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=es&appid=7ae7b6690b951f6cdf317416699d6d9c`);
        const data = await response.json();

        const { list } = data;

        // Obteniendo informacion de solo los 5 dias a las 12:00:00
        const filterList = list.filter(element => {
            return element['dt_txt'].includes('12:00:00');
        })

        setArrayCurrentForecast([...filterList]);

    }


    // Esta funcion nos ayuda a obtener la ciudad con la ayuda de axis a traves de la direccion IP
    const findCity = async() => {
        try{
            // Hacemos una solicitud a ipinfo.io para obtener la información de la IP del usuario
            const response = await axios.get('https://ipinfo.io/json'); 
    
            // La respuesta contendrá información sobre la ubicación del usuario
            const data = response.data;
            const city = data.city;
    
            setCity(city); // encontramos la ciudad

            // hacemos la peticion
            fetchCurrentData(city); 
            fetchForecastCurrentDay(city);
        }   
        catch(error){
            console.log('Error al obtener la ciudad: ', error);
        }
    }


    const handleSubmitSearch = (event,city) => {
        event.preventDefault();
        fetchCurrentData(city);
        fetchForecastCurrentDay(city);
    }

    useEffect(() => {
        findCity(); // primero obtenemos la ciudad y luego hacemos el fetch
    },[]);
    

    return (
        <WeatherContext.Provider value={{
            currentData,
            arrayCurrentForecast,
            handleSubmitSearch
        }}>
            {children}
        </WeatherContext.Provider>
    ); 
}