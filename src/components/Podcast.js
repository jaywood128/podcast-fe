import React from "react";
import Card from "react-bootstrap/Card";

const Podcast = (podcasts) => {
  return (
    <>
      {podcasts.podcasts.map((podcast) => {
        return (
          <div key={podcast.id} className="podcast-container">
            <Card style={{ width: "18rem;" }}>
              <img src={podcast.image}></img>
              <Card.Body>
                <Card.Title>{podcast.title}</Card.Title>
                <Card.Text>{podcast.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default Podcast;
