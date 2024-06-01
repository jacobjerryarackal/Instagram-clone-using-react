import React from "react";
import "./Posts.css";
import { Avatar } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Posts({ user, postImage, likes, timestamp }) {
  return (
    <>
      <div className="post">
        <div className="post_header">
          <div className="post_headerAuthor">
            <Avatar style={{ marginRight: "10px" }}>
              {user.charAt(0).toUpperCase()}
            </Avatar>{" "}
            {user} • <span>{timestamp}</span>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="post_image">
          <img src={postImage} alt="" />
        </div>
        <div className="post_footer">
          <div className="post_footerIcons">
            <div className="post_footer_iconsMain">
              <FavoriteBorderIcon className="postIcon" />
              <ChatBubbleOutlineIcon className="postIcon" />
              <TelegramIcon className="postIcon" />
            </div>
            <div className="post_iconSave">
              <BookmarkBorderIcon className="postIcon" />
            </div>
          </div>
          Liked by {likes} peoples.
        </div>
      </div>
    </>
  );
}

export default Posts;
