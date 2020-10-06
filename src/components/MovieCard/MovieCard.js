import React, { useState } from 'react'
import { connect } from 'react-redux'
import TagList from '../TagList/TagList';
import { addFavMovie } from './../../store/actions/addMovie.action';

import './MovieCard.scss'
function MovieCard(props) {
    const [ liked, setLiked ] = useState(false);
    return (
        props.movie && 
        props.movie.show && 
        props.movie.show.image && 
        props.movie.show.image.original && 
        props.movie.show.genres ? 
        <div className={liked ? "likedCard swiper-slide movieCard" : "swiper-slide movieCard"} onClick={
            () => {
                setLiked(!liked);
                props.dispatch(addFavMovie(props.movie.show.id, liked))
            }
        }>
            {
                props.movie && 
                props.movie.show && 
                props.movie.show.image && 
                props.movie.show.image.original &&
                    <img 
                        src={props.movie.show.image.original}
                        alt="tv maze"
                    />
            }
            {
                props.movie && 
                props.movie.show && 
                props.movie.show.genres && 
                props.movie.show.genres.length > 0 &&
                <div className="tags">
                    {props.movie.show.genres.map((value,index)=> <TagList tag={value} key={index}></TagList>)}
                </div>
            }
        </div> : <></>
    )
}

export default connect()(MovieCard);