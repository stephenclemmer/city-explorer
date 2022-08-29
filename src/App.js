import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Weather from './Weather.js';
import Movies from './Movies.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: [],
      city: '',
      cityLon: '-122.3300624', 
      cityLat: '47.6038321',
      mapImg: '',
      error: false,
      errorMessage: '',
      weatherData: [],
      movieData: [],
    }
  }

  

  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      city: e.target.value
    })
  }


  getMovieData = async (e) => {
        try{
          let movieURL = `${process.env.REACT_APP_SERVER}/movies?city=${this.state.city}`;
          let movieData = await axios.get(movieURL);
    
          this.setState({movieData: movieData.data});
          console.log(movieData);
        }
        catch(error) {
          this.setState({
            error: true,
            errorMessage: `An Error Occurred: ${error.message}`
          });
        }
      }


  getCityData = async (e) => {
    e.preventDefault();
        try{
          this.getMovieData();

          let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`

          let cityData = await axios.get(url);

          let weatherURL = `${process.env.REACT_APP_SERVER}/weather?lat=${cityData.data[0].lat}&lon=${cityData.data[0].lon}`;
          let weatherData = await axios.get(weatherURL);
          
          this.setState({cityData: cityData.data[0]});
          this.setState({cityLon: cityData.data[0].lon});
          this.setState({cityLat: cityData.data[0].lat});
          this.setState({weatherData: weatherData.data});
        }
        catch(error) {
          this.setState({
            error: true,
            errorMessage: `An Error Occurred: ${error.message}`
          });
        }
      }
      
      
      render() {  
        return (
          <>

        <div>
          <Form onSubmit={this.getCityData}>
            <Form.Group>
              <Form.Control 
                type="text" 
                placeholder="Where would you like to explore?" 
                onInput={this.handleInput}/>
            </Form.Group>
            
            <Button type="submit">Let's GO!</Button>
            </Form>

      
        
          <div>
          <Weather weatherData={this.state.weatherData}/>
          <Movies movieData={this.state.movieData}/>
     

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityLat},${this.state.cityLon}&zoom=13`} />
              
              <Card.Body>
                <Card.Title>City: {this.state.city}</Card.Title>
                <Card.Text>Latitude: {this.state.cityLat}</Card.Text>
                <Card.Text>Longitude: {this.state.cityLon}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        {
          this.state.error? <p>{this.state.errorMessage}</p> : <p></p>
        }
        </>
    );
  }
}

       

export default App;
