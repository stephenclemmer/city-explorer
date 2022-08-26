import React from 'react';

class Weather extends React.Component {



  render() {
    console.log('You are in the weather render');
    console.log(this.props);
    let weather = this.props.weatherData.map((day, index) => {
      return <li key={index}>{day.description}</li>
    })
    return (
      <>
     {
              // this.props.weatherData.length > 0 && 

           
        <ul>
          {weather}
        </ul>
        }
      </>
    )
  }

}
export default Weather;