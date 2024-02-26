import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { APIKEY } from '../ApiKey';
import Actors from './Actors';
import Video from './Video';
import { LanguageContext } from '../../context';

const DetailPage = () => {
    const {language} = useContext(LanguageContext)
    const {popularId} = useParams()

    const [detail,setDetail] = useState({})

    const getDetailPage = async (id,key) => {
        const res = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=${language}`)
        const {data} = res
        setDetail(data)
    }


    useEffect(()=>{
        getDetailPage(popularId,APIKEY)
    }, [language])

    return (
        <>
        <div style={{
            background: `url('https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${detail.backdrop_path}') no-repeat center/cover`,
            
        }} id='detail-page'>
            <div className='container'>
                <div className='detail-page'>
                    {
                        <img className='cr2' src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${detail.poster_path}`} alt='img'/>
                    }
                    <div className='detail-title'>
                        <h2 style={{
                            color:'white',
                            fontSize: '40px'
                        }}>{detail.title}</h2>
                        <div style={{
                            display: 'flex',
                            alignItems:'center',
                            gap:'20px',
                            color:'white'
                        }}>
                        <p className='date date2'>{detail.release_date}</p>
                        <p className='date date3'>{Math.floor(detail.runtime / 60)}:{Math.floor(detail.runtime % 60)}</p>
                        </div>
                        <div className='vote' style={{
                            background: `conic-gradient(#eca500 ${Math.round(detail.vote_average * 10) * 3.59}deg, gray 0deg)`
                        }}>
                            <div className='vote'>
                            <h2 className='average '>{Math.floor(detail.vote_average * 10)}<sup>%</sup></h2>
                        </div>
                        </div>
                        
                        <h3 className='tagline'>{detail.tagline}</h3>
                        <p style={{
                            color:'white',
                            marginTop: '20px',
                        }}>{detail.overview}</p>
                    </div>
                </div>
            </div>
        </div>
        <Actors movieId={popularId}/>
        <Video movieId={popularId}/>
        </>
    );
};

export default DetailPage;