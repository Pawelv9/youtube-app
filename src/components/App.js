import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import MovieList from './MovieList';

class App extends Component {
    state ={ movies: [] }


    onConditionSubmit = async (condition) => {
        const res = await youtube.get('/search', {
            params: {
                q: condition
            }
        });

        this.setState({ movies: res.data.items })
    };

    render() {
        return (
            <div className = "ui container">
               <SearchBar onFormSubmit={this.onConditionSubmit}/> 
            We have {this.state.movies.length} videos.
                <MovieList movies={this.state.movies}/>
            </div>
        );
    }
}

export default App;