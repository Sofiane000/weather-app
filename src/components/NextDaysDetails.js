import React, { Component } from "react";
import "./styles.css";
import moment from "moment";

class NextDay extends Component {
  render() {
    const day = this.props.location.state.state;

    return (
      <div id="main-div">
        <div className="headerContainer">
          <div
            style={{ cursor: "pointer" }}
            onClick={() => this.props.history.push("/")}
          >
            <img
              className="backIcon"
              src={require("../assets/icon.svg")}
              alt="go back"
            />
          </div>
          <h1 className="title" style={{ margin: "auto", color: "#04bffe" }}>
            Weather Details
          </h1>
        </div>
        <span className="main">
          <div style={{ width: "100%" }}>
            <div className="headings-row">
              <div className="first-div">
                <h4>{moment(day.date).format("dddd h:mm A")}</h4>
                <div className="weather-widget__main"> {day.weather_desc}</div>
                <h2>
                  <img
                    className="weather-widget__img"
                    // src={`https://openweathermap.org/img/wn/${day.icon}.png`}
                    src={
                      day.icon
                        ? require(`../assets/images/${day.icon}.svg`)
                        : require("../assets/images/01d.svg")
                    }
                    alt="Weather Faisalabad , PK"
                    width="80"
                    height="80"
                  />
                  <span className="tempSpan">
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
