import React from "react";
// import { useState, useEffect } from "react";
import Podcast from "./Podcast";
const PODCASTS = [
  {
    id: 1,
    image:
      "https://cdn-images-1.listennotes.com/podcasts/the-rough-cut-PmR84dsqcbj-53MLh7NpAwm.1400x1400.jpg",
    thumbnail:
      "https://cdn-images-1.listennotes.com/podcasts/the-rough-cut-AzKVtPeMOL4-53MLh7NpAwm.300x300.jpg",
    title_original: "The Rough Cut",
    listennotes_url:
      "https://www.listennotes.com/c/8758da9be6c8452884a8cab6373b007c/",
    title_highlighted: "The Rough Cut",
    publisher_original: "Matt Feury",
  },
  {
    id: 2,
    image:
      "https://cdn-images-1.listennotes.com/podcasts/marvel-cinematic-universe-podcast-stranded-OUXEda2-uzg-aXR7VuG2z4p.1400x1400.jpg",
    thumbnail:
      "https://cdn-images-1.listennotes.com/podcasts/marvel-cinematic-universe-podcast-stranded-u2ALe1wV0aC-aXR7VuG2z4p.300x300.jpg",
    title_original: "Marvel Cinematic Universe Podcast",
    listennotes_url:
      "https://www.listennotes.com/c/593c42e343ba44e7b6f8634a946f0b52/",
    title_highlighted: "Marvel Cinematic Universe Podcast",
    publisher_original: "Stranded Panda",
  },
  {
    id: 3,
    image:
      "https://cdn-images-1.listennotes.com/podcasts/sci-fi-talk-tony-tellado-TIFs6JQnHVv-pbWBl23qQhO.1400x1400.jpg",
    thumbnail:
      "https://cdn-images-1.listennotes.com/podcasts/sci-fi-talk-tony-tellado-CcY1wJeAHSG-pbWBl23qQhO.300x300.jpg",
    title_original: "Sci-Fi Talk",
    listennotes_url:
      "https://www.listennotes.com/c/9c2c314ee8134f288745348df83dcafd/",
    title_highlighted: "Sci-Fi Talk",
    publisher_original: "Tony Tellado",
  },
];

// const BACKEND_PODCASTS = "http://127.0.0.1:8080/api/2/podcasts";
const Podcasts = () => {
  // const [podcasts, setPodcasts] = useState([]);
  // const [loading, setLoading] = useState("");

  // useEffect(() => {
  // setPodcasts(PODCASTS);
  //   const fetchPodcasts = async () => {
  //     try {
  //       const settings = {
  //         method: "GET",
  //         headers: {
  //           Accept: "application/json",
  //         },
  //       };
  //       try {
  //         const response = await fetch(
  // BACKEND_PODCASTS,
  //           settings
  //         );
  //         const json = await response.json();
  //         if (response.status !== 200) {
  //           throw Error(json.message);
  //         } else {
  //           console.log(json);
  // setPodcasts(json);
  //         }
  //       } catch (error) {
  //         alert(error);
  //         // setLoading("null");
  //       }
  //     } catch (e) {
  //       console.log(e.message);
  //       // setData({ users: data.podcasts, isFetching: false });
  //     }
  //   };
  //   fetchPodcasts();
  // }, []);

  return (
    <div className="podcasts-container">
      <Podcast podcasts={PODCASTS} />
    </div>
  );
};

export default Podcasts;
