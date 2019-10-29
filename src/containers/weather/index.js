import React, { Component } from "react";
import { connect } from "react-redux";
import { getWeatherData } from "../../redux/actions/weatherAction";
import WeatherUI from "../../components/GetWeather";

export class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherApiData: {},
      getWeatherDataStatus: "not done"
    };
  }

  // tries to make an API call with the given city name and triggers state update
  makeApiCall = async coords => {
    let lat = coords.latitude;
    let lon = coords.longitude;

    this.props.getWeatherData({ lat, lon });
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
      this.setState({
        weatherApiData: nextProps.data,
        getWeatherDataStatus: nextProps.getWeatherStatus
      });
    } else if (nextProps.getWeatherStatus === "error") {
      this.setState({
        getWeatherDataStatus: nextProps.getWeatherStatus
      });
    }
  }

  render() {
    const { weatherApiData, getWeatherDataStatus } = this.state;
    return (
      <WeatherUI
        weatherApiData={weatherApiData}
        getWeatherDataStatus={getWeatherDataStatus}
      />
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
)(Weather);
