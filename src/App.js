import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: [],
      city: '',
      error: false,
      errorMessage: '',
    }
  }

  handleInput = (e) => {
    e.preventDefault();
    console.log('SIGNAL IS HERE!')
    this.setState({
      city: e.target.value
    })
  }

  getCityData = async (e) => {
    e.preventDefault();
    console.log('THIS IS ALIVE!')

    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`

    let cityData = await axios.get(url);

    console.log(cityData.data[0].lat);
    console.log(cityData);
    console.log('hello world');
  }

  render() {
    return (
      <div>
        <p>Proof of life</p>
        <>
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
            {/* <p>{this.props.cityData.data[0].display_name}</p>
            <p>{this.props.cityData.data[0].lon}</p>
            <p>{this.props.cityData.data[0].lat}</p> */}
      </>
      </div>
    
    );
  }
}
export default App;
