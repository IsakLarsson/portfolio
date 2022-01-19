import React from "react";
import "./Hero.css";
import { useSpring, animated } from "react-spring";
import { useState } from "react";
import GitHubIcon from "../../icons/GitHubIcon.svg";
import LinkedInIcon from "../../icons/LinkedinIcon.svg";
import GreenBlob from "../../images/blobgreen.svg";
import RedBlob from "../../images/blobred.svg";
import SmallBlob from "../../images/blobsupergreen.svg";
import { motion } from "framer-motion";

export default function Hero() {
  const springProps = {
    to: { opacity: 1, transform: "translatey(-30%)" },
    from: { opacity: 0, transform: "translatey(60%)" },
    delay: 1500,
    config: { mass: 1, tension: 280, friction: 60 },
  };

  const springProps2 = {
    to: [{ opacity: 1, transform: "translatey(-30%)" }],
    from: { opacity: 0, transform: "translatey(60%)" },
    delay: 500,
    config: { mass: 1, tension: 280, friction: 60 },
  };
  /* const blobSpring = useSpring({
    to: { opacity: 1, x: 50, y: 60 },
    from: { opacity: 0, x: 500, y: 500 },
    delay: 3500,
    config: { mass: 1, tension: 280, friction: 60 },
  }); */

  const secondSpring = useSpring(springProps);
  springProps.delay = 3000;
  const thirdSpring = useSpring(springProps);
  const springy = useSpring(springProps2);

  const blob = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  return (
    <section className="hero-section">
      <div className="main-box-inner">
        {/* <animated.div style={blobSpring}>
        </animated.div> */}
        <motion.div
          style={{ width: "30%", x: "200%", y: "700px" }}
          variants={blob}
          initial="hidden"
          animate="show"
        >
          <img id="green" src={GreenBlob} alt="" />
        </motion.div>
        <img id="red" src={SmallBlob} alt="" />
        <img id="small" src={RedBlob} alt="" />
      </div>
      <div className="main-box">
        <div className="main-box-content">
          <div className="upper-content">
            <animated.div style={springy}>
              <h1>Hi!</h1>
            </animated.div>
            <animated.div style={secondSpring}>
              <h1>Im Isak</h1>
            </animated.div>
          </div>
          <div>
            <animated.div style={thirdSpring}>
              <h1>Suck my dick :)</h1>
            </animated.div>
          </div>
          <div>
            <animated.div style={thirdSpring}>
              <h4>UI • UX • Machine Learning • Front end • Back end</h4>
            </animated.div>
          </div>
          <div>
            <animated.div style={thirdSpring}>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/IsakLarsson"
              >
                <img
                  src={GitHubIcon}
                  alt="GitHub"
                  style={{ margin: "0 0.5rem" }}
                />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/isak-%C3%A5man-larsson-629330181/"
              >
                <img
                  src={LinkedInIcon}
                  alt="LinkedIn"
                  style={{ margin: "0 0.5rem" }}
                />
              </a>
            </animated.div>
          </div>
        </div>
      </div>
    </section>
  );
}
