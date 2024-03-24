
const API_KEY = '8e130ba5a2b817343379d748fc9fe07b';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

function fetchWeather(city:any) {
    const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;

    return fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Ca marche pas');
        }
        return response.json();
    });

}

export default fetchWeather;