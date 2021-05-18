import React from "react";
import { useState, useEffect } from "react";
const BACKEND_PODCASTS = "http://127.0.0.1:8080/api/";
import Episodes from "./Episodes";
// import Card from "react-bootstrap/Card";

const Podcast = (podcasts) => {
  const [id, setId] = useState("");
  const [episodes, setEpisodes] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const fetchEpisodes = async () => {
      // const response = await fetch(BACKEND_PODCASTS + localStorage.getItem('id') + "/podcasts/" + );

      try {
        const settings = {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        };
        try {
          // eslint-disable-next-line no-console
          console.log("Podcast id: " + id);
          const response = await fetch(
            BACKEND_PODCASTS + localStorage.getItem("id") + "/podcasts/" + id,
            settings
          );
          const json = await response.json();
          setLoading("true");
          //eslint-disable-next-line no-console
          console.log(loading);
          if (response.status !== 200) {
            throw Error(json.message);
          } else {
            // eslint-disable-next-line no-console
            console.log(json);
            setEpisodes(json);
          }
        } catch (error) {
          alert(error);
          setLoading("null");
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e.message);
      }
    };
    fetchEpisodes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const areEpisodesPresent = () => {
    // eslint-disable-next-line no-console
    console.log("Value of episodes" + episodes);
    if (episodes !== null) {
      return <Episodes episodes={episodes} />;
    } else {
      return <h1>No epsidoes</h1>;
    }
  };

  return (
    <>
      {podcasts.podcasts.map((podcast) => {
        return (
          <div key={podcast.id} className="podcast-container">
            {/* <Card> */}
            <img src={podcast.image}></img>
            {/* <Card.Body> */}
            <h2>
              {podcast.title}
              <a
                // href="/episodes"
                onClick={() => setId(podcast.id)}
                style={{ display: "block", color: "#B3B3B3" }}
              >
                {" "}
                Recent episodes
              </a>
            </h2>
            {/* <Card.Text>{podcast.description}</Card.Text> */}
            {/* </Card.Body> */}
            {/* </Card> */}
            <div>{areEpisodesPresent()}</div>
          </div>
        );
      })}
    </>
  );
};

export default Podcast;
