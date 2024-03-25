import day from './assets/animated/day.svg';
import night from './assets/animated/night.svg';
import cloudyDay from './assets/animated/cloudy-day.svg';
import cloudyNight from './assets/animated/cloudy-night.svg';
import cloudy from './assets/animated/cloudy.svg';
import rainy1 from './assets/animated/rainy-1.svg';
import rainy6 from './assets/animated/rainy-6.svg';
import rainy7 from './assets/animated/rainy-7.svg';
import snowy3 from './assets/animated/snowy-3.svg';
import snowy6 from './assets/animated/snowy-6.svg';
import thunder from './assets/animated/thunder.svg';


const date = new Date();
const hour = date.getHours();

const data = {
    'Clear': day, // cielo despejado
    'Clouds': (hour >= 6 && hour <= 18) ? cloudyDay : cloudyNight, // nublado
    'Drizzle': rainy7, // llovizna
    'Rain': (hour >= 6 && hour <= 18) ? rainy1 : rainy6, // lluvia
    'Snow': (hour >= 6 && hour <= 18) ? snowy3 : snowy6, // nieve
    'Mist': cloudy , // niebla
    'Fog': cloudy , // niebla densa
    'Somoke': (hour >= 6 && hour <= 18) ? day : night, // humo
    'Haze': cloudy, // neblina
    'Dust': (hour >= 6 && hour <= 18) ? day : night, // polvo
    'Sand': (hour >= 6 && hour <= 18) ? day : night, // arena
    'Ash': (hour >= 6 && hour <= 18) ? day : night, //ceniza volcanica
    'Squall': (hour >= 6 && hour <= 18) ? day : night, // rafaga de viento,
    'Thunderstorm':thunder, // tormenta electrica
    'Tornado': thunder // tornado
}


export const getPathIcon = (main) => (data[main]);
