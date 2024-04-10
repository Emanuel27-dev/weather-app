import style from "./styles/Highlights.module.css";
import { CardHighlights } from "./CardHighlights.jsx";
import { WeatherContext } from "./context/contextComponent.jsx";
import { useContext, useEffect, useRef } from "react";

export const Highlights = () => {

    const { currentData } = useContext(WeatherContext);
    const { tempMax, tempMin, pressure, humidity } = currentData;
    const barraRef = useRef(null);

    useEffect(() => {
        // Esperamos menos de un 1s para poder hacer la transicion del width
        setTimeout(() => {
            barraRef.current.style.width = `${humidity}%`;
        },500);
    });

    return (
        <section>
            <p className={style.title}>Aspectos destacados del día</p>
            <div className={style.containerCards}>
                <CardHighlights title="Humedad" value={humidity} unit="%">
                    <div className={style.containerPorcent}>
                        <span>0%</span>
                        <span>50%</span>
                        <span>100%</span>
                    </div>
                    <div className={style.barraContainer}>
                        <div className={style.barra} ref={barraRef}></div>
                    </div>
                </CardHighlights>

                <CardHighlights title="Presión del aire" value={pressure} unit="mb" />

                <CardHighlights title="temp máx" value={tempMax && Math.round(tempMax)} unit="°C" />

                <CardHighlights title="temp mín" value={tempMin && Math.floor(tempMin)} unit="°C" />
            </div>
        </section>
    );
}