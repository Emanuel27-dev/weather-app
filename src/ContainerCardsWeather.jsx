import style from "./styles/ContainerCardsWeather.module.css";
import { CardWeatherForecast } from './CardWeatherForecast.jsx';
import { WeatherContext } from "./context/contextComponent.jsx";
import { useContext } from "react";
import { getPathIcon } from './weatherData.js';

export const ContainerCardsWeather = () => {

    const { arrayCurrentForecast } = useContext(WeatherContext);

    return (
        <section className={style.containerCards}>
            {
                arrayCurrentForecast.map(({ main, dt_txt, weather },index) => {

                    return (
                        <CardWeatherForecast
                            key={index}
                            date={dt_txt}
                            rootImagen={getPathIcon(weather[0].main)}
                            tempMax={main.feels_like && Math.round(main.feels_like)}
                            tempMin={main.temp_min && Math.floor(main.temp_min)}
                        />
                    );
                })
            }

        </section>
    );
}