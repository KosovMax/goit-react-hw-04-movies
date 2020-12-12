import { Component } from 'react';
import queryString from 'query-string';
import SearchFrom from './../../components/SearchFrom';
import MovieItems from './../../components/MovieItems';

import { searchMovie } from './../../services/api-movies'

export default class MoviesPage extends Component{

    state = {
        results:[]
    }

    componentDidMount = () =>{
        this.updateSearchMovie();
    }

    updateSearchMovie = () =>{
        const { query } = queryString.parse(this.props.location.search);

        if(query)
            searchMovie(query)
            .then(results => {
                this.setState({results})
            })
    }

    render(){

        const { results } = this.state;

        return (
            <>
                <br/>
                <SearchFrom onSearch={this.updateSearch} />

                { results.length >= 0 && <MovieItems results={results} />}
            </>
        )
    }
}