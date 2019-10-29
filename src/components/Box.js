import React, { Component } from "react";
import moment from "moment";
import {withRouter} from 'react-router-dom';
import "./styles.css";

class Box extends Component {
  pushToDetails = () => {
    let day = this.props.day;
    this.props.history.push("/details", { state: day });
  };

  render() {
    return (
      <div className="box">
        <div style={{ marginLeft: 8 }}>
          {moment(this.props.day.date).format("ddd")}
        </div>
        <img
          style={{ cursor: "pointer" }}
          onClick={this.pushToDetails}
          src={`https://openweathermap.org/img/wn/${this.props.day.icon}.png`}
          className="sm-icon"
        />
        <div style={{ marginLeft: 10 }}>
          {Math.round(this.props.day.temp_max - 273.15)}°
        </div>
      </div>
    );
  }
}

export default withRouter(Box);
