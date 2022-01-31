import { createContext, useState, useEffect } from "react";
import cities from "./cityList";

const WeatherContext = createContext();

const apiKey = "6a95a6c1b4274679ad89b336dcee7fdd";

export const WeatherContextProvider = ({ children }) => {
  const [city, setCity] = useState(cities[33]);
  const [weatherData, setWeatherData] = useState([]);


  const getData = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.long}&units=metric&exclude=minutely,hourly&appid=${apiKey}`
    );
    const data = await response.json();
    setWeatherData(data.daily);
  };

  useEffect(() => {
    getData();
  }, [city, apiKey]);

  const values = {
    cities,
    city,
    setCity,
    weatherData,
  };
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;
