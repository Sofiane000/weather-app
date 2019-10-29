import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Routes from "./navigation";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
