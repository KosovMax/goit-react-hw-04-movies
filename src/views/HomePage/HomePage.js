
import { Component } from 'react';
import { getTrending } from './../../services/api-movies';

import MovieItems from './../../components/MovieItems';

export default class HomePage extends Component{

    state ={
        results:[]
    }
    
    componentDidMount = () =>{
        getTrending({timeWindow:"day"}).then(results => {
            // console.log(results);
            this.setState({results})
        })
    }

    render(){
        const { results } = this.state;

        return (
            <>
                <h1>Trending today</h1>

                { results.length >= 0 && <MovieItems results={results} url="/movies" />}
                
            </>
        )
    }
}