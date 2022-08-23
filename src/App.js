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

    let url = `https://us1.locationiq.com/v1/search?key=${process.env.CITY_EXPLORER_LOCATIONIQ_API_KEY}&q={this.state.city}&format=json`
// Insert url below
    let cityData = await axios.get(url)
  }



  render() {
    return (
      <div>
        <p>Proof of life</p>
        <>
        <form onSubmit={this.getCityData}>
          <input type="text" 
          placeholder="Name of Location"
          onInput={this.handleInput}></input>
          <input 
            type="submit" 
            class="submit" 
            value="Explore!"
            // onSubmit={this.handleGetData}
            ></input>
        </form>
      </>
      </div>
    
    );
  }
}
export default App;
