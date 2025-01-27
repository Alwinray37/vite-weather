import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Weather from './components/weather/Weather'

const api = {
  key: '5d9914e0d54fcc171f6200f100e816df',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
  
    return (
        <main>
            <Header />
            <Weather />
        </main>
    )
}

export default App
