import React from "react";

const Episode = (episode) => {
  return (
    <div>
      <img src={episode.image}></img>
      <h2>{episode.title} </h2>
      <p>{episode.description} </p>
      <a href={episode.audio}></a>
    </div>
  );
};

export default Episode;
