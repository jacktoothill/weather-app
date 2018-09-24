import React from "react";
import Form from "./components/Form";
import hotgif from "./assets/hot.gif";
import coldgif from "./assets/cold.gif";
import mildgif from "./assets/mild.webp";
import Weather from "./components/Weather";

const API_KEY = "35020dd5e2a8a46ca5eb34d2ab223e68";

const DEFAULT_STATE = {
  temperature: undefined,
  city: undefined,
  country: undefined,
  humidity: undefined,
  description: undefined,
  hot: undefined,
  image: undefined,
  error: ''
}

class App extends React.Component {
  state = Object.assign(DEFAULT_STATE, { error: 'Please enter a city and country' })

  getHot(temp) {
    if (temp > 25) {
      return { hot: 'Hot', image: hotgif }
    } else if (temp < 10) {
      return { hot: 'Cold', image: coldgif }
    } else {
      return { hot: 'Mild', image: mildgif }
    }
  }

  getWeather = async (city, country) => {
    const api_call = await fetch('https://api.openweathermap.org/data/2.5/weather?q=+' + city + ',' + country + '&mode=json&appid=' + API_KEY + '&units=metric');
    const data = await api_call.json();

    if (data.cod === '404') {
      this.setState(Object.assign(DEFAULT_STATE, { error: `Sorry, ${data.message}.` }))
      return
    }

    this.setState(
      Object.assign({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      }, this.getHot(data.main.temp))
    )
  };


  render() {
    return (
      <div className={this.state.hot} id="mainApp">
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
          hot={this.state.hot}
          image={this.state.image}
        />
      </div>
    );
  }
};


export default App;
