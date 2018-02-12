import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import MovieList from './MovieList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      conf: []
    };

    this.loadAdditionalMovies = this.loadAdditionalMovies.bind( this );
  }

  componentWillMount() {
    fetch( 'https://api.themoviedb.org/3/configuration?api_key=985e24fe0adef6dbea8259e606b71a37' )
      .then( results => {
        return results.json();
      } )
      .then( data => {
        this.setState( { conf: data } );
      } );
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
      </div>
    );
  }

  loadAdditionalMovies() {
    /* var currentMovies = { ...this.state.movies },
        newMovies = Object.assign( currentMovies, additionalMovies );
   
    this.setState( { movies: newMovies } ); */
  }
}

export default App;
