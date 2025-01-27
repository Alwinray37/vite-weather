import React, {useState} from 'react';
import { fetchWeather } from '../../utils/fetchWeather';

// API key and base URL for the OpenWeatherMap API
const api = {
    key: import.meta.env.VITE_WEATHER_API_KEY,
    base: 'https://api.openweathermap.org/data/2.5/'
}

const Weather = () => {
    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    // function to search for weather data, when button is pressed
    const searchPressed = async () => {
        if (!search.trim()) {
            setError("Please enter a valid city or town name.");
            return;
        }
        // sets the state variables based on user input
        setLoading(true);
        setError("");
        setWeather({});

        setTimeout(async () => {
            try {
                const data = await fetchWeather(search, api.key, api.base);
                setWeather(data);
                console.log(data); // log the weather object
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }, 1000);
    }
    // function to ouput weather data
    const outputWeather = () => {
        if (loading) return <p>Loading...</p>; 
        if (error) return <p>{error}</p>;
        if (weather.main) {
            return (
                <>
                    <p>{weather.name}</p>
                    <p>{weather.main.temp} ºF</p>
                    <p>{weather.weather[0].description}</p>
                </>
            );
        }
        return null;
    };

    return (
        <div id='weather-container'>
            <div id="input-container">
                <input type="text" placeholder='Enter City or Town' 
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className='search-btn' onClick={searchPressed}>Search</button>
            </div>

            {outputWeather()}
        </div>
    );
};

export default Weather;