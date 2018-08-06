import React from "react";

class Form extends React.Component{
  render(){
    return(
      <div className="col-sm-6 left-col">
        <h1>Weather Finder</h1>
        <form onSubmit={this.props.getWeather} autocomplete="off">
          <input type="text" name="city" placeholder="City"/>
          <input type="text" name="country" placeholder="Country"/>
          <button className="hvr-shadow">Get Weather</button>
        </form>
      </div>
    );
  }
};
export default Form;
