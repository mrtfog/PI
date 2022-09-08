import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"
import BackgroundVideo from "./media/video-Landing-Page.mp4"

export default function LandingPage() {

  return (
    <div className="background">
        <video className="video" loop autoPlay muted>
            <source src={BackgroundVideo} type="video/mp4" />
        </video>

        <div className="interactive">
            <h1>Welcome to Videogames</h1>
            <h2>Press the button to view more</h2>

            <Link to="/home">
               <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <p>Get in</p>
               </a>
            </Link>
        </div>
    </div>
  );
}

