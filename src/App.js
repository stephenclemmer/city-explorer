import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: [],
      city: '',
      cityLon: '', 
      cityLat: '',
      mapImg: '',
      error: false,
      errorMessage: '',
    }
  }
  


  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      city: e.target.value
    })
  }

  getCityData = async (e) => {
    e.preventDefault();

    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`

    let cityData = await axios.get(url);

    console.log(cityData.data[0].lat);
    console.log(cityData);
    console.log('hello world');

    this.setState({cityData: cityData.data[0]});
    this.setState({cityLon: cityData.data[0].lon});
    this.setState({cityLat: cityData.data[0].lat});

 
  }
  



  render() {
    return (
        <>
        <Form onSubmit={this.getCityData}>
          <Form.Group>
            <Form.Control 
              type="text" 
              placeholder="Name of Location" 
              onInput={this.handleInput}/>
          </Form.Group>
          
          <Button 
            type="submit">
            Explore!
          </Button>
        </Form>
        
        <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityLat},${this.state.cityLon}&zoom=13`} />
      <Card.Body>
        <Card.Title>City: {this.state.city}</Card.Title>
        <Card.Text>
        <div>Latitude: {this.state.cityLon}</div>
        <div>Longitude: {this.state.cityLon}</div>
        </Card.Text>
      </Card.Body>
    </Card>
      
      </>
    
    );
  }
}
export default App;
