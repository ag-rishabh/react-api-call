import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import keys from '../keys';

class App extends React.Component {
    state = {
        images: []
    };

    onSearchSubmit = (term) => {
        axios.get('https://api.unsplash.com/search/photos',{
            params: {
                query: term
            },
            headers: {
                Authorization: keys.configID
            }
        }).then(response => {
            this.setState({
                images: response.data.results
            });
        });
    };

    render() {
        return (
            <div className="container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;