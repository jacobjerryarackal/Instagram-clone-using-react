import React from "react";
import "./Stories.css";

function Stories() {
  const stories = [
    {
      username: "john_doe",
      imageUrl: "https://source.unsplash.com/random/800x600",
    },
    {
      username: "jane_doe",
      imageUrl: "https://source.unsplash.com/random/801x601",
    },
    {
      username: "sam_smith",
      imageUrl: "https://source.unsplash.com/random/802x602",
    },
    {
      username: "anna_jones",
      imageUrl: "https://source.unsplash.com/random/803x603",
    },
    {
      username: "mike_tyson",
      imageUrl: "https://source.unsplash.com/random/804x604",
    },
    {
      username: "sam_smith",
      imageUrl: "https://source.unsplash.com/random/802x602",
    },
    {
      username: "anna_jones",
      imageUrl: "https://source.unsplash.com/random/803x603",
    },
    {
      username: "mike_tyson",
      imageUrl: "https://source.unsplash.com/random/804x604",
    },
    {
      username: "anna_jones",
      imageUrl: "https://source.unsplash.com/random/803x603",
    },
  ];

  return (
    <div className="stories">
      {stories.map((story, index) => (
        <div key={index} className="story">
          <img
            className="story__image"
            src={story.imageUrl}
            alt={`${story.username}'s story`}
          />
          <p className="story__username">{story.username}</p>
        </div>
      ))}
    </div>
  );
}

export default Stories;
