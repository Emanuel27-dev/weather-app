import { useState, useEffect } from "react";
import { createContext } from "react";

export const WeatherContext = createContext(null);

export const ContextComponentProvider = ({children}) => {

    // currentData: guardara la info del clima actual
    const [currentData, setCurrentData] = useState({});
    const [arrayCurrentForecast, setArrayCurrentForecast] = useState([]);


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

    const handleSubmitSearch = (event,city) => {
        event.preventDefault();
        fetchCurrentData(city);
        fetchForecastCurrentDay(city);
    }

    useEffect(() => {
        fetchCurrentData('Lima');
        fetchForecastCurrentDay('Lima');
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