import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { APIKEY } from "../ApiKey";
import Slider from "react-slick";
import { LanguageContext } from "../../context";

const Video = ({ movieId }) => {
  const {language} = useContext(LanguageContext)
  const [video, setVideo] = useState([]);

  const getVideo = async (id, Key) => {
    const res = await axios(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${Key}&language=${language}`
    );
    setVideo(res.data.results);
  };

  useEffect(() => {
    getVideo(movieId, APIKEY);
  }, [language]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div id="video">
      <div className="container">
        <h2 style={{
            marginBottom: '30px'
        }}>ТРЕЙЛЕРЫ</h2>
        <Slider {...settings}>
          {video.map((el) => (
            <div>
              <iframe
                width="300"
                height="215"
                src={`https://www.youtube.com/embed/${el.key}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Video;
