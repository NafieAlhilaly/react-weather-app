import './App.css';
import React, { useEffect, useState } from "react";
import Header from './components/Header';
import CastingCards from "./components/CastingCards"
import MainCard from "./components/MainCard"

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [weatherData, setWeatherData] = useState([])
  const [cityName, setCityName] = useState()

  const handleSearch = (e) => {
    setCityName(e.target.value)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, [lat, long]);

  useEffect(() => {
      if(cityName){
        fetch(`${process.env.REACT_APP_API_URL}/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
          .then(res => res.json())
          .then(result => {
            if(result){}
            setWeatherData(result)
          })
      }else{
        fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
          .then(res => res.json())
          .then(result => {
            setWeatherData(result)
          })
        }
    
  })

  return (

    <main className="App">
      <Header handleSearch = {handleSearch}/>
        {(typeof weatherData.weather != 'undefined')?
        (
        <MainCard weatherData = {weatherData}/>
        ) : (<h1>loading...</h1>)}
        {/*
        TODO :
        
        {(typeof weatherData.weather != 'undefined')?
        (
          <CastingCards weatherData = {weatherData}/>
        ) : (<h1>loading...</h1>)}
        */}      
    </main>

  
  );
}

export default App;
