import React, { Component } from "react";
import "./styles.css";
import moment from "moment";

class NextDay extends Component {
 
  render() {
    const day = this.props.location.state.state;
    console.log("data ," , this.props.location.state.state);
    
    return (
      <div id="main-div">
          {/* <div> Go Back </div> */}
        <h1 className="title" style={{ textAlign: "center" }}>
          Weather Details
        </h1>
        <span className="main">
          <div style={{ width: "100%" }}>
            <div className="headings-row">
              <div className="first-div">
                <h3 className="weather-widget__city-name">
                  Weather Details
                </h3>
                <h4>{moment(day.date).format("dddd h:mm A")}</h4>
                <div className="weather-widget__main">
                  {" "}
                  {day.weather_desc}
                </div>
                <h2>
                  <img
                    className="weather-widget__img"
                    src={`https://openweathermap.org/img/wn/${day.icon}.png`}
                    alt="Weather Faisalabad , PK"
                    width="80"
                    height="80"
                  />
                  <span style={{ color: "red", fontSize: 52, paddingTop: 15 }}>
                    {Math.round(day.temp - 273.15)}
                  </span>{" "}
                  °C
                </h2>
              </div>
              <div className="second-div">
                <div className="cont-temp-item">
                  <span className="temp-item">Tempratue: </span>
                  {Math.round(day.temp - 273.15)} °C
                </div>

                <div className="cont-temp-item">
                  <span className="temp-item">Humidity: </span>
                  {day.humidity} %
                </div>
                <div className="cont-temp-item">
                  <span className="temp-item">pressure: </span>
                  {day.pressure}
                </div>
                <div className="cont-temp-item">
                  <span className="temp-item">sea_level: </span>
                  {day.sea_level}
                </div>
                <div className="cont-temp-item">
                  <span className="temp-item">wind_speed: </span>
                  {day.wind_speed} km/h
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>
    );
  }
}

export default NextDay;
