import React from "react";
import { useState, useEffect } from "react";
import Podcast from "./Podcast";

const BACKEND_PODCASTS = "http://127.0.0.1:8080/api/2/podcasts";
const Podcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState("");

  useEffect(() => {
    // setPodcasts(PODCASTS);
    const fetchPodcasts = async () => {
      try {
        const settings = {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        };
        try {
          const response = await fetch(BACKEND_PODCASTS, settings);
          const json = await response.json();
          setLoading("true");
          if (response.status !== 200) {
            throw Error(json.message);
          } else {
            console.log(json);
            setPodcasts(json);
          }
        } catch (error) {
          alert(error);
          setLoading("null");
        }
      } catch (e) {
        console.log(e.message);
        // setData({ users: data.podcasts, isFetching: false });
      }
    };
    fetchPodcasts();
  }, []);

  return (
    <div className="podcasts-container">
      <Podcast podcasts={podcasts} />
    </div>
  );
};

export default Podcasts;
