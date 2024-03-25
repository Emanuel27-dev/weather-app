import style from "./styles/Highlights.module.css";
import { CardHighlights } from "./CardHighlights.jsx";
import { WeatherContext } from "./context/contextComponent.jsx";
import { useContext } from "react";

export const Highlights = () => {

    const { currentData } = useContext(WeatherContext);
    const { tempMax, tempMin, pressure, humidity } = currentData;

    return (
        <section>
            <p className={style.title}>Aspectos destacados del día</p>
            <div className={style.containerCards}>
                <CardHighlights title="Humedad" value={humidity} unit="%">

                </CardHighlights>

                <CardHighlights title="Presión del aire" value={pressure} unit="mb" />

                <CardHighlights title="temp máx" value={tempMax && Math.round(tempMax)} unit="°C" />

                <CardHighlights title="temp mín" value={tempMin && Math.floor(tempMin)} unit="°C" />
            </div>
        </section>
    );
}