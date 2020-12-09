import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Loader from './components/Loader';

// import {
//     HomePage,
//     MoviesPage,
//     MovieDetailsPage,
//     Cast,
//     Reviews,
//     NotFound
// } from './views';

const HomePage = lazy(() => import('./views/HomePage'))
const MoviesPage = lazy(() => import('./views/MoviesPage'))
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage'))
const NotFound = lazy(() => import('./views/NotFound'))

export default function App(){
    return(
       <>
       <Header />
       <Suspense fallback={<Loader/>}>
        <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/movies" component={MoviesPage} />
                <Route path="/movies/:movieId" component={MovieDetailsPage} />
                {/* <Route path="/movies/:movieId/cast" component={Cast} />
                <Route path="/movies/:movieId/reviews" component={Reviews} /> */}
                <Route component={NotFound} />
        </Switch>
       </Suspense>
       </>
    )
}