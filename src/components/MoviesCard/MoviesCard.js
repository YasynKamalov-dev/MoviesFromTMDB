import React from 'react';
import { Link } from 'react-router-dom';

const MoviesCard = ({el}) => {
    return (
        <div className="movies-size">
        <Link to={`/popular-detail/${el.id}`}>
        <img
          className="cr"
          src={`https://media.themoviedb.org/t/p/w440_and_h660_face${el.poster_path}`}
          alt="img"
        />
        <div className="card-info">
          <h3>{el.title}</h3>
          <div className='vote' style={{
                            background: `conic-gradient(#eca500 ${Math.round(el.vote_average * 10) * 3.59}deg, gray 0deg)`
                        }}>
            <div>
            <p className="average">{Math.floor(el.vote_average *10)}<sup>%</sup></p>
            </div>
          </div>
          <p className='date'>{el.release_date}</p>
        </div>
        </Link>
      </div>
    );
};

export default MoviesCard;