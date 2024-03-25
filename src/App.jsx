import { Highlights } from "./Highlights"
import { ContainerCardsWeather } from "./ContainerCardsWeather"
import { WeatherSearch } from "./WeatherSearch"
import { ContextComponentProvider } from "./context/contextComponent";
import { ViewSearch } from "./ViewSearch";
import { useRef } from "react";

export function App() {

  const buttonRef = useRef(null);
  const contViewSearchRef = useRef(null);

  return (
    <ContextComponentProvider>
      <>
        <div className="left-side">
          <ViewSearch ref={contViewSearchRef} />
          <WeatherSearch ref={buttonRef} contViewSearchRef ={contViewSearchRef} />
        </div>
        <div className="right-side">
          <div className="container-right">
            <ContainerCardsWeather />
            <Highlights />
          </div>

          <footer className="footer">
            <p>
              Creado por <span className="footer__name">EnriqueSC</span> - <a
                href="#"
                className="footer__link">devChallenges.io</a
              >
            </p>
          </footer>
        </div>
      </>
    </ContextComponentProvider>
  )
}

