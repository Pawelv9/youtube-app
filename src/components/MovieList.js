import React from 'react'
import MovieItem from './MovieItem';

const MovieList = ({ movies, onMovieSelect }) => {
  const renderedList = movies.map((movie) => {
      return <MovieItem key={movie.id.videoId} onMovieSelect={onMovieSelect} movie={movie}/>;
  })
  
    return (
        <div className="ui divided relaxed list">
          {renderedList}
        </div>
  )
}

export default MovieList
