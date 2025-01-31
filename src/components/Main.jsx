import React from "react";

const Main = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
       
        <h2>Full stack developer</h2>
        <p>
          <strong>Welcome! I’m Rakesh Redddy Gopidi,</strong> a passionate developer with a love for
          crafting digital experiences that blend creativity and functionality.
          While I thrive in the full-stack realm—exploring the harmony between
          frontend and backend—my true passion lies in frontend development,
          where design meets interactivity.
        </p>
        <a href="/RAKESH_RESUME.pdf" 
         target = "_blank" 
         rel="noopener noreferrer"
         className="btn hero-btn">
          resume
        </a>
      </div>
    </section>
  );
};

export default Main;
