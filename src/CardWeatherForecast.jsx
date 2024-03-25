import style from "./styles/CardWeatherForecast.module.css";

export const CardWeatherForecast = ({
    date,
    rootImagen,
    tempMax,
    tempMin
}) => {
    return (
        <article className={style.card}>
            <section className={style.section}>
                <p>{date}</p>
                <figure className={style.cardFigure}>
                    <img src={rootImagen} alt="imagen" className={style.cardImg} />
                </figure>
            </section>
            <div>
                <span>{tempMax}°C</span>
                <span className={style.cardTempMin}>{tempMin}°C</span>
            </div>
        </article>
    );
}