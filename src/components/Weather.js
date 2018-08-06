import React from "react";
import Hot from '../assets/hot.gif';

class Weather extends React.Component{
  render(){
    return(
      <div className="col-sm-6 right-col">
        <div className="gif-img">
          { this.props.hot && <img src={this.props.image} alt=""/> }
        </div>
        <div className="weather-details">
          { this.props.city && this.props.country && <p>Location: { this.props.city }, { this.props.country }</p> }
          { this.props.temperature && <p>Temperature: { this.props.temperature }°C</p> }
          { this.props.humidity && <p>Humidity: { this.props.humidity }</p>}
          { this.props.description && <p>Conditions: { this.props.description }</p> }
          { this.props.error && <p>{ this.props.error }</p> }
        </div>
      </div>
    );
  }
};

export default Weather;
