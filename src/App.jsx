import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'

const api = {
  key: '5d9914e0d54fcc171f6200f100e816df',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(false);

    function searchPressed(){
        fetch(`${api.base}weather?q=${search}&units=imperial&APPID=${api.key}`)
        .then(res => {
            if(!res.ok){
                throw Error('City not found');
            }
            return res.json();
        })
        .then(result => {
            console.log(result);
            setWeather(result);
            setLoading(false);
        })
        .catch(error => {
            console.log(error);
            setWeather({ error: 'City not found' });
            setLoading(false);
        });
    }

    // default city
    // useEffect(() => {
    //     setSearch('Los Angeles'); // Default city
    //     searchPressed();
    // }, []);

    function outputWeather(){
        if (loading) {
            return <p>Loading...</p>;
        }

        if (weather.error) {
            return <p>{weather.error}</p>;
        }

        return (
            <>
            <p>{weather.name}</p>
            <p>{weather.main.temp} ºF</p>
            <p>{weather.weather[0].description}</p>
            </>
        )
    }

  
    return (
        <main>
            <Header />

            <div className="container">
                <div id="input-container">
                    <input type="text" placeholder='Enter City or Town' 
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button className='search-btn' onClick={searchPressed}>Search</button>
                </div>

                {typeof weather.main != 'undefined' ? outputWeather() : "" }
            </div>
        </main>
    )
}

export default App
