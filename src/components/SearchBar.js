import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);  
    }

    render() {
        return(
            <div className="container">
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <label>Image Search   :</label>
                        <input 
                            placeholder="search"
                            className="form-control"
                            type="text" 
                            value={this.state.term} 
                            onChange={(e) => this.setState({ term: e.target.value })} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}


export default SearchBar;