import React from "react";
import "./HomePage.css";
import NavBar from "../../Components/navigation/NavBar";
import Timeline from "../../Components/timeline/Timeline";

function HomePage() {
  return (
    <>
      <div className="homepage">
        <div className="homepage_nav">
          <NavBar />
        </div>
        <div className="homepage_timeline">
          <Timeline />
        </div>
      </div>
    </>
  );
}

export default HomePage;
