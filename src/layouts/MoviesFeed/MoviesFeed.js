import React, { useEffect } from 'react'
import FavoriteCard from '../../components/FavoriteCard/FavoriteCard';
import MovieCard from '../../components/MovieCard/MovieCard'
import './MoviesFeed.scss'

export default function MoviesFeed(props) {
    // console.log(props)
    useEffect(() => {
        import("swiper").then(data => {
            const x = new data.default(".movieFlex", {
                direction: "horizontal",
                slidesPerView: "auto",
                effect: "slide",
                spaceBetween: 20,
                observer: true,
                watchOverflow:true,
                observeParents:true,
                observeSlideChildren: true
            });
        });
    }, [])
    return (
        <>
            <div className="movieSection">
                <h2>{props.label} Shows</h2>
                <div className="swiper-container movieFlex">
                    <div className="swiper-wrapper">
                        {props.moviesList 
                        && props.moviesList.map((movieData,index) => 
                            {
                                if(movieData.show){
                                    return <MovieCard key={`movieCard${index}`} movie={movieData} />
                                } else if (!movieData.show){
                                    return <FavoriteCard key={`favCard${index}`} movie={movieData} />
                                }
                            }
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
