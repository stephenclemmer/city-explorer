import React from 'react';

class Movies extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: false,
      errorMessage: '',
      movieData: [],
    }
  }

  getMovieData = async (e) => {
    try{
      let movieURL = `${process.env.REACT_APP_SERVER}/movies?city=${this.state.city}`;
      let movieData = await axios.get(movieURL);

      this.setState({movieData: movieData.data});
    }
    catch(error) {
      this.setState({
        error: true,
        errorMessage: `An Error Occurred: ${error.message}`
      });
    }
  }
  
render(){
  return(
    <>
    <div>
    
    let movies = this.state.movieData.map((movie, index) => {
          return <li key={index}>{movie.title}</li>

        })



    </div>
    </>
  )
}

}
export default Movies;