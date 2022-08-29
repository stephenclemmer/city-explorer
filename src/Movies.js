import React from 'react';
import Movie from './Movie.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from 'react-bootstrap/Carousel';

class Movies extends React.Component {

  render(){

    return (
      <>
        
          
            <Movie movieData={this.props.movieData} />
    
        
      </>
    )
  }

}
export default Movies;