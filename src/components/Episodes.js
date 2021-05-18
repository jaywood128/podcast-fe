import React from "react";
import Episode from "./Episode";

const Episodes = (episodes) => {
  <>
    {episodes.episodes.map((episode) => {
      return (
        <div key={episode.id} className="episode-container">
          <Episode episode={episode} />
        </div>
      );
    })}
  </>;
};

export default Episodes;
