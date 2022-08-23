import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React from 'react';


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
        <p>Proof of life</p>
        <form onSubmit={this.getCityData}>
          <input 
            type="text" 
            placeholder="Name of Location"
            onInput={this.handleInput}>
          </input>
          <input
            type="submit" 
            class="submit" 
            value="Explore!"
            ></input> 
        </form>
      
      <div>
        <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityLat},${this.state.cityLon}&zoom=13`}></img>

        <p> City: {this.state.city}</p>
        <p>Latitude: {this.state.cityLon} </p>
        <p>Longitude: {this.state.cityLon}</p>
      </div>
      </>
    
    );
  }
}
export default App;
