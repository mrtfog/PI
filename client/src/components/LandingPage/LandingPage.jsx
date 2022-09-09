import React from "react";
import s from './LandingPage.module.css'
import { NavLink } from "react-router-dom";
import BackgroundVideo from "./media/video-Landing-Page.mp4"

export default function LandingPage() {

  return (
    <div className="background">
        <video className={`${s.video}`} loop autoPlay muted>
            <source src={BackgroundVideo} type="video/mp4" />
        </video>

        <div className={`${s.interactive}`}>
            <h1>Welcome to Videogames</h1>
            <h2>Press the button to view more</h2>

            <NavLink to="/home">
              <div className={`${s.btnlanding}`}>
                <a href="/#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <p>Get in</p>
                </a>
              </div>
            </NavLink>
        </div>
    </div>
  );
}

