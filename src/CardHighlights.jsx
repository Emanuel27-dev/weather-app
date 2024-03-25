import style from "./styles/CardHighlights.module.css";

export const CardHighlights = ({ title, value, unit }) => {

    return (
        <article className={style.card}>
            <p className={style.cardTitle}>{title}</p>
            <div>
                <span className={style.cardNumber}>{value}</span>
                <span className={style.cardUnit}>{unit}</span>
            </div>
        </article>
    );
}


