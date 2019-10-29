import axios from "axios"
export const GET_WEATHER = "GET_WEATHER"
export const GET_WEATHER_ERR = "GET_WEATHER_ERR"

export const getWeatherData = data => async dispatch => {
  try {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=524901&lat=${data.lat}&lon=${data.lon}&appid=c3f0aa3718cb291bfbe4ea15414e7ebf`)

    if (res.data.cod === "200") {
      dispatch({
        type: GET_WEATHER,
        payload: res.data
      })
    } else {
      dispatch({
        type: GET_WEATHER_ERR
      })
    }
  } catch (error) {
    if (error) {
      dispatch({
        type: GET_WEATHER_ERR
      })
    }
  }
}
