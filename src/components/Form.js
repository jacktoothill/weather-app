import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      city: '',
      country: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.getWeather(this.state.city, this.state.country)
  }

  render() {
    return (
      <div className="col-sm-6 left-col">
        <h1>Weather Finder</h1>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <input type="text" name="city" placeholder="City" onChange={this.handleChange} value={this.state.city} />
          <input type="text" name="country" placeholder="Country" onChange={this.handleChange} value={this.state.country} />
          <button className="hvr-shadow">Get Weather</button>
        </form>
      </div>
    );
  }
};
export default Form;
