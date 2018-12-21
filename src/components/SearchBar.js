import React, { Component } from 'react';

class SearchBar extends Component {
    state = { condition: ''}

    onInputChange = event => {
        this.setState({ condition: event.target.value})
    }

    onFormSubmit = event => {
        event.preventDefault();
        
        this.props.onFormSubmit(this.state.condition)
    }

    render() {
        return (
            <div className="search-bar ui segment">
               <form onSubmit={this.onFormSubmit} className="ui form">
                   <div className="field">
                       <label htmlFor="">Video Search</label>
                       <input 
                            type="text" 
                            value={this.state.condition}
                            onChange={this.onInputChange}
                        />
                   </div>
               </form>
            </div>
        );
    }
}

export default SearchBar;