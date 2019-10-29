import React from "react";
import { geolocated } from "react-geolocated";
import Weather from "../weather";
import { Spinner } from "react-bootstrap";

class GetLocation extends React.Component {
  render() {
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      <Weather coords={this.props.coords} />
    ) : (
      <div className="locationLoader">
        <Spinner animation="grow" />
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true
  },
  userDecisionTimeout: 10000
})(GetLocation);
