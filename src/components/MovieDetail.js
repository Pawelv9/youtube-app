import React from 'react'

const MovieDetail = ({ movie }) => {
if (!movie) {
    return <div>Updating...</div>
}

    const videoSrc = `https://www.youtube.com/embed/${movie.id.videoId}`

    return (
        <div>
            <div className="ui embed">
                <iframe title="video player" src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">
                    {movie.snippet.title}
                </h4>
                <p>{movie.snippet.description}</p>
            </div>
        </div>
  );
};

export default MovieDetail
