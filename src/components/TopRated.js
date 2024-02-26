import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { APIKEY } from './ApiKey';
import MoviesCard from './MoviesCard/MoviesCard';
import { LanguageContext } from '../context';

const TopRated = () => {

    const {language} = useContext(LanguageContext)
    const [topRated, setTopRated] =useState([])

    const getTopRated = async () => {
        const res = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=${language}&page=1`)
        const {results} = await res.data
        setTopRated(results)
    }

    console.log(topRated);

    useEffect(() => {
        getTopRated()
    }, [language])
 
    return (
        <div id='movies'>
            <div className='container'>
                <div className='movies'>
                    {
                        topRated.map(el => (
                            <MoviesCard key={el.id} el={el}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default TopRated;