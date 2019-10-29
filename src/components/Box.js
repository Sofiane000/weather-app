import React, { Component } from "react";
import moment from "moment";
import { withRouter } from "react-router-dom";
import "./styles.css";

class Box extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDay: props.selectedDay
    };
  }

  pushToDetails = () => {
    let day = this.props.day;
    this.props.history.push("/details", { state: day });
  };

  render() {
    const { selectedDay } = this.state;
    console.log("selectedDay", selectedDay);
    console.log("s", moment(this.props.day.date).format("dddd"));

    return (
      <div
        className={
          selectedDay === moment(this.props.day.date).format("dddd")
            ? "weatherDays"
            : "box"
        }
        onClick={this.pushToDetails}
      >
        <div style={{ marginLeft: 8 }}>
          {moment(this.props.day.date).format("ddd")}
        </div>
        <img
          style={{ cursor: "pointer" }}
          onClick={this.pushToDetails}
          src={
            this.props.day.icon
              ? require(`../assets/images/${this.props.day.icon}.svg`)
              : require("../assets/images/01d.svg")
          }
          className="sm-icon"
          alt="weather icon"
        />
        <div style={{ marginLeft: 10 }}>
          {Math.round(this.props.day.temp_max - 273.15)}°
        </div>
      </div>
    );
  }
}

export default withRouter(Box);
