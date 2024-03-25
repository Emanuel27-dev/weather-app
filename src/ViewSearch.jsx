import style from "./styles/ViewSearch.module.css";
import { WeatherContext } from "./context/contextComponent";
import { forwardRef, useContext } from "react";

export const ViewSearch = forwardRef((props, ref) => {

        const { handleSubmitSearch } = useContext(WeatherContext);
        return (
            <section className={style.containerSearch} ref={ref}>
                <div>
                    <span className={style.closeIcon}>
                        <svg
                            onClick={() => {
                                // cerrando la pestaña con el icono de la X.
                                ref.current.style.transform = 'translate(-100%)';
                            }}
                            className={style.closeSvg}
                            width="800px"
                            height="800px"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                            ></path>
                        </svg>
                    </span>
                </div>

                <form className={style.form} onSubmit={(event) => {
                    const city = event.target.search.value; // obtengo el valor del input
                    handleSubmitSearch(event, city);
                    event.target.search.value = '';
                }}>
                    <input type="text" placeholder="search location" name="search" className={style.inputSearch} />
                    <button className={style.buttonSearch} type="submit">Buscar</button>
                </form>
            </section>
        );
    }
); 