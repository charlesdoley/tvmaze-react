import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from './store/actions/movies.action';
import Header from './components/Header/Header';
import MoviesFeed from './layouts/MoviesFeed/MoviesFeed'

class App extends Component {
  state = {
    currentLabel: 'popular',
    moviesListCurrent : [],
    favActive: false
  }
  componentDidMount() {
    this.props.fetchMovies("space");
  }
  componentDidUpdate(prevProps){
    if(this.props.movie.movies !== prevProps.movie.movies && !this.state.favActive){
      this.setState({
        moviesListCurrent: this.props.movie.movies
      })
    }
  }
  setLabel = (label) => {
    this.setState({
      currentLabel: label,
      favActive: false,
    })
  }
  viewFav = () => {
    this.setState({
      moviesListCurrent: this.props.fav,
      favActive: !this.state.favActive,
      currentLabel: "Favorite"
    })
  }
  render() {
    return (
      <>
          <Header viewFav={this.viewFav} setMainLabel={this.setLabel}/>
          <MoviesFeed label={this.state.currentLabel} moviesList={this.state.moviesListCurrent} />
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    movie: state.movie,
    fav: state.addMovie,
  };
};
export default connect(mapStateToProps, {fetchMovies})(App);