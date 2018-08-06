import React from "react";
import Form from "./components/Form";
import hotgif from "./assets/hot.gif";
import coldgif from "./assets/cold.gif";
import mildgif from "./assets/mild.webp";
import Weather from "./components/Weather";

const API_KEY = "35020dd5e2a8a46ca5eb34d2ab223e68";




class App extends React.Component{
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
    hot: undefined,
    image: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=+' + city + ',' + country + '&mode=json&appid=' + API_KEY + '&units=metric');
    const data = await api_call.json();
    console.log(data);
    if(data.cod === '404'){
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        hot: undefined,
        error: 'Sorry, ' + data.message
      });
    } else if(city && country){
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
      if(data.main.temp > 25){
        this.setState({
          hot: 'Hot',
          image: hotgif
        });
      } else if(data.main.temp < 10){
        this.setState({
          hot: 'Cold',
          image: coldgif
        });
      } else {
        this.setState({
          hot: 'Mild',
          image: mildgif
        });
      }
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        hot: undefined,
        error: "Please enter a city and country"
    });
  }
};


  render() {
    return(
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
