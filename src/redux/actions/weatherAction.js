import axios from "axios";
export const GET_WEATHER = "GET_WEATHER";
export const GET_WEATHER_ERR = "GET_WEATHER_ERR";

export function getWeatherData(data) {
  return dispatch => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${data.lat}&lon=${data.lon}&appid=c3f0aa3718cb291bfbe4ea15414e7ebf`
      )
      .then(res => {
        console.log("getWeather Response ", res);

        if (res.data.cod === "200") {
          dispatch({
            type: GET_WEATHER,
            payload: res.data
          });
        } else {
          dispatch({
            type: GET_WEATHER_ERR
          });
        }
      })
      .catch(err => {
        console.log("Error fetching weather: ", err);
        dispatch({
          type: GET_WEATHER_ERR
        });
      });
  };
}
