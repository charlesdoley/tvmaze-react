import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addFavMovie } from '../../store/actions/addMovie.action';
import TagList from '../TagList/TagList';

import './FavoriteCard.scss'
function FavoriteCard(props) {
    const [ liked, setLiked ] = useState(false);
    return (
        props.movie && 
        props.movie.image && 
        props.movie.image.original && 
        props.movie.genres ? 
        <div className="swiper-slide movieCard" onClick={
            () => {
                // setLiked(true);
                props.dispatch(addFavMovie(props.movie.id, true))
            }
        }>
            {
                props.movie && 
                props.movie.image && 
                props.movie.image.original &&
                    <img 
                        src={props.movie.image.original}
                        alt="tv maze"
                    />
            }
            {
                props.movie && 
                props.movie.genres && 
                props.movie.genres.length > 0 &&
                <div className="tags">
                    {props.movie.genres.map((value)=> <TagList tag={value}></TagList>)}
                </div>
            }
        </div> : <></>
    )
}

export default connect()(FavoriteCard);