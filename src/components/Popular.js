import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { APIKEY } from "./ApiKey/index";
import MoviesCard from "./MoviesCard/MoviesCard";
import { LanguageContext } from "../context";

const Popular = () => {
  const {language} = useContext(LanguageContext)
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    const res = await axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=${language}&page=1`
    );
    const { results } = await res.data;
    setPopular(results);
  };


  useEffect(() => {
    getPopular();
  }, [language]);

  

  return (
    <div id="movies">
      <div className="container">
        <div className="movies">
          {popular.map((el) => (
           <MoviesCard key={el.id} el={el}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
