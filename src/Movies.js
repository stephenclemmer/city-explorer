import React from 'react';
import Movie from './Movie.js';

class Movies extends React.Component {

  render() {

    return (
      <>
        {
          < ul >
            <Movie movieData={this.props.movieData} />
          </ul >
        }
      </>
    )
  }

}
export default Movies;