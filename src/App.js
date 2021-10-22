import logo from './logo.svg';
import MainPage from './Pages/HomePage';
import './App.css';
import React, { useEffect, useState } from "react";
import Header from './components/Header';

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [weatherData, setWeatherData] = useState([])


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, [lat, long]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setWeatherData(result)
      });
  },[])

  return (
    <main className="App">

      <Header/>
      <MainPage weatherData = {weatherData}/>
    </main>
  );
}

export default App;
