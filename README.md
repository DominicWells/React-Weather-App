# React Weather App
by Dominic Wells

### What does it do

This web app allows the user to search a location anywhere in the world, or drop a marker on a map, in order to see the weather for that location.

### obtain an api key

In order for the application to obtain weather data on your local machine,
you must acquire an API Key from https://openweathermap.org/guide. You will have to create an account
in order to obtain your free API Key. Once you have your API key, paste the following piece of code into a new file, ```apiKeys.js```
, where XXX is your API Key. You must place this file into the /src/Keys directory.

```
const Keys = {
    openWeatherAPIKey: 'XXX'
}

export default Keys
```

In the project directory, you can run:

### `npm install` && `npm start`

to run the app in the development mode.<br>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

