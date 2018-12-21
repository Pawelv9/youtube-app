import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';


class App extends Component {
    state ={ movies: [], selectedMovie: null }


    onConditionSubmit = async (condition) => {
        const res = await youtube.get('/search', {
            params: {
                q: condition
            }
        });

        this.setState({ movies: res.data.items })
    };

    onMovieSelect = movie => {
        this.setState({ selectedMovie: movie});
    }

    render() {
        return (
            <div className = "ui container">
               <SearchBar onFormSubmit={this.onConditionSubmit}/> 
            We have {this.state.movies.length} videos.
                <MovieDetail movie={this.state.selectedMovie}/>
                <MovieList onMovieSelect={this.onMovieSelect} movies={this.state.movies}/>
            </div>
        );
    }
}

export default App;