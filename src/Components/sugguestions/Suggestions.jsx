import React from "react";
import "./Suggestions.css";
import { Avatar } from "@mui/material";

function Suggestions() {
  return (
    <>
      <div className="suggestions">
        <div className="suggestion_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>
                <img src="https://source.unsplash.com/random/800x600" alt="" />
              </Avatar>
            </span>
            <div className="username_info">
              <span className="username">_dragon333_</span>
              <span className="relation">The Dragon Fighter</span>
            </div>
          </div>
          <button className="follow_button">Switch</button>
        </div>
        <div className="suggestions_title">
          Suggestions for you.
          <button className="see_button">See All</button>
        </div>
        <div className="suggestions_usernames">
          <div className="suggestion_username">
            <div className="username_left">
              <span className="avatar">
                <Avatar>
                  <img
                    src="https://source.unsplash.com/random/803x603"
                    alt=""
                  />
                </Avatar>
              </span>
              <div className="username_info">
                <span className="username">_jonny1234</span>
                <span className="relation">New to Instagram</span>
              </div>
            </div>
            <button className="follow_button">Follow</button>
          </div>

          <div className="suggestion_username">
            <div className="username_left">
              <span className="avatar">
                <Avatar>
                  <img
                    src="https://source.unsplash.com/random/804x604"
                    alt=""
                  />
                </Avatar>
              </span>
              <div className="username_info">
                <span className="username">_jonny1234</span>
                <span className="relation">followed by _caperminer_</span>
              </div>
            </div>
            <button className="follow_button">Follow</button>
          </div>

          <div className="suggestion_username">
            <div className="username_left">
              <span className="avatar">
                <Avatar>
                  <img
                    src="https://source.unsplash.com/random/801x601"
                    alt=""
                  />
                </Avatar>
              </span>
              <div className="username_info">
                <span className="username">_jonny1234</span>
                <span className="relation">folowed by _danny_</span>
              </div>
            </div>
            <button className="follow_button">Follow</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Suggestions;
