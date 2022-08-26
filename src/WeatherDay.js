import React from 'react';


class WeatherDay extends React.Component{

  render(){
    
    return(
    
      <div>
        {
          this.props.weatherData.map((day, index) => 
            <li key={index}>{day.date}: {day.description}</li>
          )
        }
      </div>
    );
  }
}

export default WeatherDay;