import sun from "./images/sun.jpg"
import rain from "./images/rain.jpg"
import ex from "./images/rain2.jpg"
import cloud from "./images/cloud.jpg"
import snow from "./images/snow.jpg"

export const getImage = (weather) => {
    const weatherLC = weather.toLowerCase();
    if (weatherLC.startsWith("cloud")) {
      return cloud;
    } else if (weatherLC === 'rain') {
      return rain;
    } else if (weatherLC === 'sun') {
      return sun;
    } else if (weatherLC === 'clear') {
      return sun; //'☀️' "🌈" "🌌";
    } else if (weatherLC === 'snow') {
      return snow;
    } else if (weatherLC === 'extreme') {
      return ex;
    }
  };