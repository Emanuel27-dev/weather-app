import s from "./styles/WeatherSearch.module.css";
import { days, months } from "./dataDate.js";
import { WeatherContext } from "./context/contextComponent.jsx";
import { forwardRef, useContext } from "react";
import { getPathIcon } from './weatherData.js';


// Obteniendo la fecha actual
const getDate = () => {
    const date = new Date();
    return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;
};


export const WeatherSearch = forwardRef(({ contViewSearchRef }, ref) => {

        const { currentData } = useContext(WeatherContext);
        const { temperature, description, city, main } = currentData;

        return (
            <div className={s.container}>
                <div>
                    <button className={s.button} ref={ref} onClick={() => {
                        contViewSearchRef.current.style.transform = 'translate(0)';
                    }}>Buscar por ciudad</button>
                </div>

                <div className={s.infoMain}>
                    <figure className={s.figure}>
                        <img src={getPathIcon(main)} className={s.image} />
                    </figure>

                    <p className={s.temp}>{temperature && Math.floor(temperature)}<span>°C</span></p>
                    <p className={s.descriptionWeather}>{description}</p>
                </div>

                <div className={s.texts}>
                    <div>
                        <span>Hoy</span>
                        <span>{getDate()}</span>
                    </div>
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            style={{ fill: 'rgba(136, 134, 157, 1)', transform: '', msFilter: '' }}
                        ><path
                            d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
                        ></path>
                        </svg>
                        <p>{city}</p>
                    </div>
                </div>

            </div>
        );
    }
);