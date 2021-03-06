import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Podcast = (podcasts) => {
  return (
    <div>
      {console.log(podcasts.podcasts[0]["image"])}
      {podcasts.podcasts.map((podcast) => {
        return (
          <div className="podcast-container">
            <Card key={podcast.id} style={{ width: "50vh" }}>
              <img src={podcast.image}></img>
              <Card.Body>
                <Card.Title>{podcast.title_highlighted}</Card.Title>
                <Card.Text>{podcast.publisher_orignal}</Card.Text>
                <Button src={`#{result.listennotes_url}`} variant="primary">
                  Stream
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Podcast;
