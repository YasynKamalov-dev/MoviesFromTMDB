import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { APIKEY } from '../ApiKey';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../context';

const MoviesOfActors = ({actorId}) => {
    const {language} = useContext(LanguageContext)
    const [movies, setMovies] = useState([])

    const getMoviesOfActors = async (id,key) =>{
        const moviesAPI = await axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=${language}`)
        const {data} = await moviesAPI
        setMovies(data.cast)
    }

    console.log(movies);

    useEffect(() => {
        getMoviesOfActors(actorId, APIKEY)
    }, [language])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
      };
    return (
        <div id='movies-of-actors'>
            <div className='container'>
            <h1 style={{
                margin: '40px 0 20px 0'
            }}>Фильмы с актером</h1>
                    <Slider {...settings}>
                        {movies.map(el => (
                        <div >
                            
                            <Link to={`/popular-detail/${el.id}`}>
                            <img className='cr3' src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${el.poster_path}`} alt='img'/>
                            <h5 style={{
                                marginTop: '10px',
                                width: '140px'
                            }}>{el.title}</h5>
                            </Link>
                        </div>
                    ))}
                    </Slider>
                
            </div>
        </div>
    );
};

export default MoviesOfActors;