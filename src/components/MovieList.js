import React from 'react'
import MovieItem from './MovieItem';

const MovieList = ({ movies }) => {
  const renderedList = movies.map((movie) => {
      return <MovieItem />;
  })
  
    return (
        <div>
          {renderedList}
        </div>
  )
}

export default MovieList
