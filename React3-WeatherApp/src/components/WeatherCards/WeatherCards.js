import { useContext } from "react";
import WeatherContext from "../../context/WeatherContext";
import timeConverter from "../../context/getDay";
import './style.modules.css';

function WeatherCards() {
  const data = useContext(WeatherContext);
  if (!Array.isArray(data?.weatherData)) return <div>Loading....</div>
  else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          flexWrap: "wrap",
          marginTop: "10px",
          padding: "5px",
          fontSize: "1.2rem"
        }}
      >
        {data.weatherData.map((weather, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#efefef",
              color: "#c9c3c3",
              borderRadius: "1px",
              width: "150px",
              height: "160px",
              textAlign: "center"
            }}
            id={index === 0 ? "today" : ""}
          >
            <div>{timeConverter(weather.dt)}</div>
            <div>
              <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
            </div>
            <div style={{ marginTop: "2px", display: "flex", justifyContent: "center", gap: "0,5rem" }}>
              <span style={{ color: "#848383", gap: "2rem" }}>{Math.round(weather.temp.min)}&#176;</span>
              <span></span>
              <span style={{ color: "#c9c3c3", gap: "0,5rem" }}>{Math.round(weather.temp.max)}&#176;</span>
            </div>
          </div>
        ))}
      </div>
    );
  }

}

export default WeatherCards;
