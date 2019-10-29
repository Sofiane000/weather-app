import React from 'react';
import './App.css';
import GetWeather from './components/GetWeather';

class App extends React.Component {

  render() {
    return (
          <div className="App">
            <GetWeather />
          </div>
    );
  }
}

export default App;