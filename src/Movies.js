import React from 'react';

class Movies extends React.Component {

  render(){

    let movies = this.props.movieData.map((movie, index) => {
      return <li key={index}>{movie.title}</li>
    })

    return(
      <>
             {
              // this.state.movieData.length > 0 && 

            <ul>
              {movies} 
            </ul>
            }
      </>
    )
  }
  
}
  export default Movies;