import axios from "axios";

export const getWeatherData = async () => {
  const API_TRACKING = "https://api.openweathermap.org/data/2.5/weather";
  const API_TRACKING_KEY = "0a4582fd7abe58639a7df6dcd168ed81";
  
  try {
    const getPosition = () => {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 10000 });  
      });
    };
    const position = await getPosition();
    const { latitude, longitude } = position.coords;

    const response = await axios.get(`${API_TRACKING}?lat=${latitude}&lon=${longitude}&appid=${API_TRACKING_KEY}`);
    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Received status code: " + response.status); 
    }
  } catch (error) {
    console.error("An error occurred while fetching the weather data: ", error);
    throw error; 
  }
};
export const getDataStatistics = async (days, location) => {
    const apiKey = '753730ee35554e77a6a104318242103'; 
    const apiUrl = 'http://api.weatherapi.com/v1/forecast.json';
    // const location = localStorage.getItem('location');
    try {
      const response = await axios.get(`${apiUrl}?key=${apiKey}&q=${location}&days=${days}&aqi=no&alerts=no`);
      if (response.status === 200) {
        return response.data;
      } else {
        console.error("Received status code: " + response.status); 
      }
    } catch (error) {
      console.error("An error occurred while fetching the weather data: ", error);
      throw error; 
    }
  
}