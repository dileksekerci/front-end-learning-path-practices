import "./App.css";
import Container from "./components/Container/Container";
import { WeatherContextProvider } from "./context/WeatherContext";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <hr />
      <WeatherContextProvider>
        <Container />
      </WeatherContextProvider>
    </div>
  );
}

export default App;
