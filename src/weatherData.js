const path = './../public/animated/';
const date = new Date();
const hour = date.getHours();

// (hour >= 6 && hour <= 18) ? icon-day: icon-night
const data = {
    'Clear': `${path}day.svg`, // cielo despejado
    'Clouds': (hour >= 6 && hour <= 18) ? `${path}cloudy-day.svg` : `${path}cloudy-night.svg`, // nublado
    'Drizzle': `${path}rainy-7.svg`, // llovizna
    'Rain': (hour >= 6 && hour <= 18) ? `${path}rainy-1.svg` : `${path}rainy-6.svg`, // lluvia
    'Snow': (hour >= 6 && hour <= 18) ? `${path}snowy-3.svg` : `${path}snowy-6.svg`, // nieve
    'Mist': (hour >= 6 && hour <= 18) ? `${path}day.svg` : `${path}night.svg`, // niebla
    'Fog': (hour >= 6 && hour <= 18) ? `${path}day.svg` : `${path}night.svg`, // niebla densa
    'Somoke': (hour >= 6 && hour <= 18) ? `${path}day.svg` : `${path}night.svg`, // humo
    'Haze': (hour >= 6 && hour <= 18) ? `${path}day.svg` : `${path}night.svg`, // neblina
    'Dust': (hour >= 6 && hour <= 18) ? `${path}day.svg` : `${path}night.svg`, // polvo
    'Sand': (hour >= 6 && hour <= 18) ? `${path}day.svg` : `${path}night.svg`, // arena
    'Ash': (hour >= 6 && hour <= 18) ? `${path}day.svg` : `${path}night.svg`, //ceniza volcanica
    'Squall': (hour >= 6 && hour <= 18) ? `${path}day.svg` : `${path}night.svg`, // rafaga de viento,
    'Thunderstorm':`${path}thunder.svg`, // tormenta electrica
    'Tornado': `${path}thunder.svg` // tornado
}



export const getPathIcon = (main) => {
    return data[main];
}
