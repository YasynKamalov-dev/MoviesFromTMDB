import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APIKEY } from "../ApiKey";
import MoviesOfActors from "./MoviesOfActors";
import { LanguageContext } from "../../context";

const ActorsDetail = () => {
  const {language} = useContext(LanguageContext)
  const { actorId } = useParams();

  const [actor, setActor] = useState({});

  const getActorDetail = async (id, key) => {
    const actorUrl = await axios(
      `https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=${language}`
    );
    const { data } = actorUrl;
    setActor(data);
  };

  console.log(actor);

  useEffect(() => {
    getActorDetail(actorId, APIKEY);
  }, [language]);

  const [view, setView] = useState(260)

  const {biography} = actor

  const printText = (text) => {
    if(view === 260){
        setView(text.length)
    }else{
        setView(260)
    }
  }
  return (
    <div id="detail-actor">
      <div className="container">
        <div className="detail-actor">
          <img
            className="cr2"
            src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${actor.profile_path}`}
            alt=""
          />
          <div className="detail-actor-info">
            <h1>{actor.name}</h1>
            <p className="p-actor">{actor.birthday}</p>
            <h5
              style={{
                marginBottom: "10px",
              }}
            >
              Биография
            </h5>
            <p className="bio-actor">{biography && biography.slice(0,view)}</p>
            {
                biography && biography.length > 260 && <span
                onClick={() => printText(biography)}
                 className="view-more">{view === 260 ? "view more" : 'close'}
                 </span>
            }
            <h4
              style={{
                marginTop: "30px",
              }}
            >
              Место рождении
            </h4>
            <h5>{actor.place_of_birth}</h5>
          </div>
        </div>
      </div>
      <MoviesOfActors actorId={actorId} />
    </div>
  );
};

export default ActorsDetail;
