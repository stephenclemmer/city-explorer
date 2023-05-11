import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Weather from './Weather.js';
import Movies from './Movies.js';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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


  /* `getCityData` is an asynchronous function that is triggered when the user submits the form to
  search for a city. It first prevents the default form submission behavior using
  `e.preventDefault()`. */
  getCityData = async (e) => {
    e.preventDefault();
        /* This code block is the `getCityData` function that is triggered when the user submits the
        form to search for a city. It first tries to get movie data by calling the `getMovieData`
        function. Then, it constructs a URL using the `REACT_APP_LOCATIONIQ_API_KEY` and the city
        name entered by the user to get the city data using the `axios.get` method. After that, it
        constructs a weather URL using the latitude and longitude of the city obtained from the city
        data and gets the weather data using the `axios.get` method. Finally, it sets the state of
        the component with the city data, city longitude, city latitude, and weather data obtained
        from the API calls. If an error occurs during any of these API calls, it sets the `error`
        state to `true` and sets the `errorMessage` state to the error message. */
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
          <body>

        <div>
         <Container>
          <Form onSubmit={this.getCityData}>
            <Form.Group>
              <Form.Control 
                type="text" 
                placeholder="Where would you like to explore?" 
                onInput={this.handleInput}
                style={{ width: '32rem' }}/>
            </Form.Group>
            
            <Button type="submit">Let's GO!</Button>
          </Form>
        </Container>

        <Container>
          <Card style={{ width: '32rem' }}>
            <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityLat},${this.state.cityLon}&zoom=13`} />
              
            <Card.Body>
              <Card.Title>City: {this.state.city}</Card.Title>
              <Card.Text>Latitude: {this.state.cityLat}</Card.Text>
              <Card.Text>Longitude: {this.state.cityLon}</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      
        
        <div>
        <Container>
          <Row>
            <Movies movieData={this.state.movieData}/>
  
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
         </Container>
        </div>
        <div>
        <Container>
        <Row>
          <Weather weatherData={this.state.weatherData}/>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
        </Row>
      </Container>
    
     

          </div>
        </div>
        {
          this.state.error? <p>{this.state.errorMessage}</p> : <p></p>
        }
        </body>
    );
  }
}

       

export default App;
