import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';


class Movie extends React.Component {


  render() {
    return (
      <>
        {/* {this.props.movieData.map((movie, index) =>
  <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`https://image.tmdb.org/t/p/original/${movie.poster}`}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 key={index}>{movie.overview}</h3>
          <p>{movie.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
  </Carousel>
    )
  } */}



      {this.props.movieData.map((movie, index) =>
      <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${movie.poster}`} />
      <Card.Body>
        <Card.Title key={index}>{movie.overview}</Card.Title>
        <Card.Text key={index}>
          {movie.description}
        </Card.Text>
      </Card.Body>
    </Card>
  )}
   
{/* 
      <div>
      {this.props.movieData.map((movie, index) =>
         <li key={index}>{movie.title} {movie.description}</li>
         )}
    </div> */}
    </>
    )
  }

}


export default Movie;