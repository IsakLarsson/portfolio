import React from "react";
import Background from "../../images/BGJPEG.jpg";
import Arrowdown from "../../images/Arrow down.svg";
import {
  HeroContainer,
  HeroBG,
  ImageBG,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroElements";
import { Link } from "react-scroll";
import "./Hero.css";

export const HeroSection = () => {
  return (
    <section className="landingPage">
      <HeroContainer className="heroContainer" id="landingPage">
        <HeroBG>
          <ImageBG src={Background} />
          {/* <ImageOverlayRadial /> */}
        </HeroBG>

        <HeroContent className="heroContent">
          <HeroH1>ISAK LARSSON</HeroH1>
          <HeroP>
            An aspiring developer who likes to engage in both frontend and
            backend development,{" "}
          </HeroP>
          <HeroP>allow me to </HeroP>
          <div className="buttonWrapper">
            <Link to="AboutPage" smooth className="introduce">
              <h1 className="introduce">Introduce myself!</h1>
            </Link>
            <div className="arrow">
              <Link to="AboutPage" smooth>
                <img src={Arrowdown} alt="Scroll down" />
              </Link>
            </div>
          </div>
        </HeroContent>
      </HeroContainer>
    </section>
  );
};
