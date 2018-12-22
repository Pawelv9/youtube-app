import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';


class App extends Component {
    state ={ movies: [], selectedMovie: null }

    componentDidMount() {
        this.onConditionSubmit('surfing')
    }

    onConditionSubmit = async (condition) => {
        const res = await youtube.get('/search', {
            params: {
                q: condition
            }
        });

        this.setState({ 
            movies: res.data.items,
            selectedMovie: res.data.items[0]
        })
    };

    onMovieSelect = movie => {
        this.setState({ selectedMovie: movie});
    }

    render() {
        return (
            <div className = "ui container">
               <SearchBar onFormSubmit={this.onConditionSubmit}/> 
            We have {this.state.movies.length} videos.
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <MovieDetail movie={this.state.selectedMovie}/>
                        </div>
                        <div className="five wide column">
                            <MovieList onMovieSelect={this.onMovieSelect} movies={this.state.movies}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;