import React from "react";
import { useState, useEffect } from "react";
import Podcast from "./Podcast";
// import UserService from "../services/user.service";
// import authService from "../services/auth.service";

const BACKEND_PODCASTS = "http://127.0.0.1:8080/api/";
const Podcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState("");
  // eslint-disable-next-line no-unused-vars
  // const user = UserService.isAuth() ? authService.getCurrentUser : "";
  // const user = authService.getCurrentUser();

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
          // eslint-disable-next-line no-console
          console.log("Local storage" + localStorage.getItem("id"));
          const response = await fetch(
            BACKEND_PODCASTS + localStorage.getItem("id") + "/podcasts",
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
            setPodcasts(json);
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
    fetchPodcasts();
    // eslint-disable-next-line
  }, []);

  return (
    // <div className="podcasts-container">
    <Podcast podcasts={podcasts} />
    // </div>
  );
};

export default Podcasts;
