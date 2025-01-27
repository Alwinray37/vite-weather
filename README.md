# Vite Weather App

This is a simple weather application built with React and Vite. It allows users to search for the current weather in any city or town.

## Features

- Search for the current weather by city or town name.
- Display the temperature, weather description, and city name.
- Show a loading message while fetching data.
- Handle errors gracefully.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/alwinray37/vite-weather.git
    cd vite-weather
    ```

2. Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Application

1. Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

2. Open your browser and navigate to `http://localhost:3000`.

### Usage

1. Enter the name of a city or town in the input field.
2. Click the "Search" button.
3. The application will display the current weather for the specified location after a 3-second delay.

### Project Structure

- [Main.jsx](http://_vscodecontentref_/1): The main component that handles the weather search and display logic.

### Code Explanation

The [searchPressed](http://_vscodecontentref_/2) function handles the search logic:

```jsx
const searchPressed = async () => {
    if (search === "") {
        setError("Please enter a city or town name.");
        return;
    }

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
```

The outputWEather function handles the display logic
```js   
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
```

