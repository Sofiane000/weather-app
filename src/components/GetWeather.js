import React, { Component } from "react";
import "./styles.css";
import moment from "moment";
import { Spinner, Row, Col } from "react-bootstrap";
import WeatherBox from "./Box";
import { connect } from "react-redux";
import { getWeatherData } from "../redux/actions/weatherAction";

class GetWeather extends Component {
  state = {
    cityName: "",
    country: "",
    days: [{ temp: "working" }],
    coords: {},
    loading_status: true
  };

  // creates the day objects and updates the state
  updateState = data => {
    console.log("apiData", data);

    const cityName = data.city.name;
    const country = data.city.country;
    const days = [];
    const dayIndices = this.getDayIndices(data);

    for (let i = 0; i < 5; i++) {
      days.push({
        date: data.list[dayIndices[i]].dt_txt,
        weather_desc: data.list[dayIndices[i]].weather[0].description,
        icon: data.list[dayIndices[i]].weather[0].icon,
        temp: data.list[dayIndices[i]].main.temp,
        humidity: data.list[dayIndices[i]].main.humidity,
        pressure: data.list[dayIndices[i]].main.pressure,
        sea_level: data.list[dayIndices[i]].main.sea_level,
        wind_speed: data.list[dayIndices[i]].wind.speed,
        temp_max: data.list[dayIndices[i]].main.temp_max
      });
    }

    this.setState({
      cityName: cityName,
      country: country,
      days: days,
      loading_status: false
    });
  };

  // tries to make an API call with the given city name and triggers state update
  makeApiCall = async coords => {
    let lat = coords.latitude;
    let lon = coords.longitude;

    this.props.getWeatherData({ lat, lon });
  };

  // returns array with Indices of the next five days in the list
  // from the API data (every day at 12:00 pm)
  getDayIndices = data => {
    let dayIndices = [];
    dayIndices.push(0);

    let index = 0;
    let tmp = data.list[index].dt_txt.slice(8, 10);

    for (let i = 0; i < 4; i++) {
      while (
        tmp === data.list[index].dt_txt.slice(8, 10) ||
        data.list[index].dt_txt.slice(11, 13) !== "15"
      ) {
        index++;
      }
      dayIndices.push(index);
      tmp = data.list[index].dt_txt.slice(8, 10);
    }
    return dayIndices;
  };

  componentDidMount = () => {
    console.log("coords", this.props.coords);
    this.makeApiCall(this.props.coords);
    this.setState({
      coords: this.props.coords
    });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.getWeatherStatus === "done") {
      this.updateState(nextProps.data);
    } else if (nextProps.getWeatherStatus === "error") {
      this.setState({
        loading_status: false
      });
    }
  }

  render() {
    const { days, country, cityName, loading_status } = this.state;
    return (
      <div id="main-div">
        <h1 className="title" style={{ textAlign: "center" }}>
          Weather Forecast
        </h1>
        <span className="main">
          {loading_status ? (
            <Spinner animation="grow" />
          ) : (
            <div style={{ width: "100%" }}>
              <div className="headings-row">
                <div className="first-div">
                  <h3 className="weather-widget__city-name">
                    Weather in {cityName}, {country}
                  </h3>
                  <h4>{moment().format("dddd h:mm A")}</h4>
                  <div className="weather-widget__main">
                    {" "}
                    {days[0].weather_desc}
                  </div>
                  <h2>
                    <img
                      className="weather-widget__img"
                      src={`https://openweathermap.org/img/wn/${days[0].icon}.png`}
                      alt="Weather Faisalabad , PK"
                      width="80"
                      height="80"
                    />
                    <span
                      style={{ color: "red", fontSize: 52, paddingTop: 15 }}
                    >
                      {Math.round(days[0].temp - 273.15)}
                    </span>{" "}
                    °C
                  </h2>
                </div>
                <div className="second-div">
                  <div className="cont-temp-item">
                    <span className="temp-item">Tempratue: </span>
                    {Math.round(days[0].temp - 273.15)} °C
                  </div>

                  <div className="cont-temp-item">
                    <span className="temp-item">Humidity: </span>
                    {days[0].humidity} %
                  </div>
                  <div className="cont-temp-item">
                    <span className="temp-item">pressure: </span>
                    {days[0].pressure}
                  </div>
                  <div className="cont-temp-item">
                    <span className="temp-item">sea_level: </span>
                    {days[0].sea_level}
                  </div>
                  <div className="cont-temp-item">
                    <span className="temp-item">wind_speed: </span>
                    {days[0].wind_speed} km/h
                  </div>
                </div>
              </div>
              <Row className="text-center">
                {days.slice(1).map(day => (
                  <Col xs={3}>
                    <WeatherBox day={day} />
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </span>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  loader: store.weatherReducer.loader,
  data: store.weatherReducer.data,
  getWeatherStatus: store.weatherReducer.getWeatherStatus
});

export default connect(
  mapStateToProps,
  {
    getWeatherData
  }
)(GetWeather);
