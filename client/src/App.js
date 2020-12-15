import React, { useState, useEffect } from 'react';
import axios from 'axios';

// React Router imports
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

//Components used for the different routes will go here
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';
//Dummy data
import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          setMovieList(response.data);
          console.log(response.data);
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <Router>
    <div>
      <SavedList list={[ /* This is stretch */]} />
      <Route exact path='/' component={Movie}/>
        <MovieList movies = {movieList}/>
      <Route path='/movies/:id' component={MovieList}/>
      
      {/* <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/movies'>Movie</Link></li>
        </ul>
      </div> */}
      
    </div>
    </Router>
  );
}
