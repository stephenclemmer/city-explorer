import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class WeatherDay extends React.Component{

  render(){
    
    return(
    <>

    {this.props.weatherData.map((day, index) =>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Title key={index}>{day.date}</Card.Title>
        <Card.Text key={index}>
          {day.description}
        </Card.Text>
      </Card.Body>
    </Card>
  )}

      {/* <div>
        {
          this.props.weatherData.map((day, index) => 
            <li key={index}>{day.date}: {day.description}</li>
          )
        }
      </div> */}
      </>
    );
  }
}

export default WeatherDay;