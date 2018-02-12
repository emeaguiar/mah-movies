import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import MovieList from './MovieList';
import {initialMovies} from '../movies';
import {additionalMovies} from '../movies';
import AddMovie from './AddMovie';

class App extends Component {
  constructor() {
    super();

    this.loadAdditionalMovies = this.loadAdditionalMovies.bind( this );
    this.addMovieToGallery    = this.addMovieToGallery.bind( this );
  }

  render() {
    return (

      <div className="App">
        <Header text="Mario's Movie Mojo app!" />
        <p className="App-intro">
          Welcome to the 'Movie Mojo' React app!
        </p>
        <MovieList />
        <div className="add-movies">
          <button onClick={ this.loadAdditionalMovies }>Load more...</button>
        </div>
        <AddMovie addMovie={ this.addMovieToGallery } />
      </div>
    );
  }

  loadAdditionalMovies() {
    var currentMovies = { ...this.state.movies },
        newMovies = Object.assign( currentMovies, additionalMovies );
   
    this.setState( { movies: newMovies } );
  }

  addMovieToGallery( movie ) {
    var ts = Date.now();
    var newMovie = {};

    newMovie[ 'movie' + ts ] = movie;
    var currentMovies = { ...this.state.movies };
    var newMovies = Object.assign( currentMovies, newMovie );

    this.setState( { movies: newMovies } );
  }
}

export default App;
