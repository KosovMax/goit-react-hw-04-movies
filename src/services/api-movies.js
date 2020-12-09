import axios from 'axios';


const API_KEY = '3ac108b4a8c39f97e15d9c6a4800e731';

const getTrending = ({mediaType="all", timeWindow="week"}) =>{

    // media_type = all, movie, tv, person
    // time_window = day, week

    return axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/${timeWindow}?api_key=${API_KEY}`)
            .then(res => res.data.results);
}

const getMovie = movieId =>{

    return axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
            .then(res => res.data);
}

const getMovieCast = movieId =>{

    return axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`)
            .then(res => res.data.cast);
}

const getMovieReviews = movieId =>{

    return axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`)
            .then(res => res.data.results);
}

const searchMovie = query =>{

    return axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`)
            .then(res => res.data.results);
}



export {
    getTrending,
    getMovie,
    getMovieCast,
    getMovieReviews,
    searchMovie
}

export default { 
    getTrending,
    getMovie,
    getMovieCast,
    getMovieReviews,
    searchMovie
}