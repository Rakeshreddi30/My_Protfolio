import React from "react";
import myphoto from "../assets/images/myphoto.jpg";
const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-title">
        <h2>
          about
          <span>me</span>
        </h2>
      </div>

      <div className="section-center about-center">
        <div className="about-img">
          <img src={myphoto} className="about-photo" />
        </div>
        <article className="about-info">
          <p>
            I specialize in crafting dynamic, responsive UIs using React.js,Redux,
            JavaScript, HTML/CSS.Prioritizing performance and accessibility. But I also embrace the
            backend world, with foundational skills in Java and Spring Boot,
            where I’ve built RESTful APIs and scalable systems. This dual
            expertise allows me to collaborate effectively across the stack,
            ensuring end-to-end solutions that are both elegant and robust. For
            me, frontend is more than just pixels—it’s about storytelling
            through design, smooth interactions, and making technology feel
            human. Meanwhile, my backend knowledge helps me appreciate
            architectural decisions, data flow, and how systems come together.{" "}
            <br />
            <strong>
              Explore my projects below to see my work in action. 🚀
            </strong>
          </p>
          <a href="" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
