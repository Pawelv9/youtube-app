import React from 'react'
import './MovieItem.css'

const MovieItem = ({ movie, onMovieSelect }) => {
  return (
    <div onClick={() => onMovieSelect(movie)} className="movie-item item">
        <img className="ui image" src={movie.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header">
            {movie.snippet.title}
        </div>    
      </div>
    </div>
  )
}

export default MovieItem
