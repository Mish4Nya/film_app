import React from 'react';
import {Movies} from '../components/Movies';
import {Search} from '../components/search';
import {Preloader} from '../components/preloader';




const link = "http://www.omdbapi.com/?i=tt3896198&apikey=51e96c54"

class Main extends React.Component {
    state = {
        movies :[],
        loading: true,
    };
componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=4aa76a8c&s=comedy')
        .then((response) => response.json ())
        .then((data)=> this.setState({movies: data.Search, loading: false}));
}

searchMovies = (str, type='all') => {
    fetch(
        `http://www.omdbapi.com/?apikey=4aa76a8c&s=${str}${
        type !== "all" ? `&type=${type}` : ""
    }`
)
        .then((response) => response.json ())
        .then((data)=> this.setState({movies: data.Search}));
};

render () {
    const {movies, loading} = this.state;

    return (
    <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {loading ? <Preloader/> : <Movies movies={this.state.movies} />}
    </main> 
    );
 }
}

export {Main};