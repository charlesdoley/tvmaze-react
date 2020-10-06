import React from 'react'
import { connect } from 'react-redux'
import DropIcon from './../../images/dropicon.png'
import { fetchMovies } from './../../store/actions/movies.action';

import './Header.scss'
function Header(props) {
    const queries = [
        {
            "query" : "music",
            "label" : "Popular",
        },
        {
            "query" : "adventure",
            "label" : "Thrilling",
        },
        {
            "query" : "coding",
            "label" : "Queer",
        },
        {
            "query" : "love",
            "label" : "Romance",
        },
        {
            "query" : "end",
            "label" : "New",
        }
    ]
    return (
        <div className="header">
            <span className="logo">MOVIE CUE</span>
            <div className="categoryDrop">
                <span>Category</span>
                <img alt="drop icon" className="dropIcon" src={DropIcon}></img>
                <div className="dropdown-content">
                    {
                        queries.map((value, index) => 
                            <div key={index} onClick={ () =>{
                                props.dispatch(fetchMovies(value.query));
                                props.setMainLabel(value.label);
                                }} 
                                className="dropItem">{value.label}</div>)
                    }
                </div>
            </div>
            <div className="favs" onClick={props.viewFav}>
                <span>My Favourites</span>
                <span className="numberOfFavs">{props.fav.length}</span>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
      fav: state.addMovie,
    };
  };
export default connect(mapStateToProps)(Header);