// Utility function to fetch weather data from the OpenWeatherMap API

export const fetchWeather = async (search, apiKey, base) => {
    const url = `${base}weather?q=${search}&units=imperial&APPID=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('City not found');
    }
    return response.json();
};