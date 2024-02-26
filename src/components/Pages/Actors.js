import axios from "axios";
import React, { Component, useContext, useEffect, useState } from "react";
import { APIKEY } from "../ApiKey";
import Slider from "react-slick";
import contactPerson from "../img/logo.png";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context";

const Actors = ({ movieId }) => {
  const {language} = useContext(LanguageContext)
  const [actors, setActors] = useState([]);

  const getActors = async () => {
    const res = await axios(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${APIKEY}&language=${language}`
    );
    const { cast } = await res.data;
    setActors(cast);
  };

  useEffect(() => {
    getActors();
  }, [language]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };

  return (
    <div id="actors">
      <div className="container">
        <h2
          style={{
            marginBottom: "20px",
          }}
        >
          В главных ролях
        </h2>
        <Slider {...settings}>
          {actors.map((el) => (
            <Link to={`/actor-detail/${el.id}`}>
            <div>
              {" "}
              <img
              key={el}
                className="actors-width"
                src={
                  el.profile_path
                    ? `https://media.themoviedb.org/t/p/w276_and_h350_face/${el.profile_path}`
                    : contactPerson
                }
                alt=""
              />
              <h3
              key={el}
                style={{
                  fontSize: "18px",
                  width: "130px",
                }}
              >
                {el.name}
              </h3>
            </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Actors;
