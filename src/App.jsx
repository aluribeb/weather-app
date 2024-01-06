import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import WeatherCard from './components/WeatherChannel/WeatherCard'
import IsLoading from './components/IsLoading'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()
  const [isLoading, setisLoading] = useState(true)

  const success = position => {
    const obj = {
      lat: position.coords.latitude,
      lon: position.coords.longitude
    }
    setCoords(obj)
  }

  useEffect(() => {
  setisLoading(true)
  navigator.geolocation.getCurrentPosition(success)
  }, [])

useEffect (() =>{
  if(coords) {
  const APIKEY = '0cb26baff24216a8d841d5da0c5c3504'
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
  axios.get(url)
    .then(res => {
      const celsius = (res.data.main.temp - 273.15).toFixed(1)
      const fahrenheit = (celsius* 9/5 + 32).toFixed(1)
      setTemp({celsius, fahrenheit})
      setWeather(res.data)
    })
    .catch(err => console.log(err))
    .finally(()=> setisLoading(false))
  }
  }, [coords])

  console.log(weather)


  return (
 <div className='app'>
  
  {
    isLoading
  ? <IsLoading/>

  : (<WeatherCard
  weather={weather}
  temp={temp}
  
  />)
  }
 </div>
  )
}

export default App
