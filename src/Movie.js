import React from 'react';

class Movie extends React.Component {

  
  render(){
    return(
      
      <div>
      {this.props.movieData.map((movie, index) =>
         <li key={index}>{movie.title} {movie.description}</li>
         )}
    </div>
    
    )}
  
}


export default Movie;


// let movies = this.props.movieData.map((movie, index) => {
//   return <li key={index}>{movie.title}</li>