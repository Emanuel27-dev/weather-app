import style from "./styles/ContainerCardsWeather.module.css";
import { CardWeatherForecast } from './CardWeatherForecast.jsx';
import { WeatherContext } from "./context/contextComponent.jsx";
import { useContext } from "react";
import { getPathIcon } from './weatherData.js';

export const ContainerCardsWeather = () => {

    const { arrayCurrentForecast } = useContext(WeatherContext);

    return (
        <>
            <h3 className={style.titlePronostico}>Pronóstico</h3>
            <section className={style.containerCards}>
                {
                    arrayCurrentForecast.map(({ main, dt_txt, weather }, index) => {

                        return (
                            <CardWeatherForecast
                                key={index}
                                date={dt_txt}
                                rootImagen={getPathIcon(weather[0].main)}
                                tempMax={main.temp_max && Math.round(main.temp_max)}
                                tempMin={main.temp_min && Math.floor(main.temp_min)}
                            />
                        );
                    })
                }

            </section>
        </>

    );
}