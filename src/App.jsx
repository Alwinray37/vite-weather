import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'

const api = {
  key: '5d9914e0d54fcc171f6200f100e816df',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});

    function searchPressed(){
        fetch(`${api.base}weather?q=${search}&units=imperial&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
            console.log(result);
            setWeather(result);
        });
    }

    function outputWeather(){
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
