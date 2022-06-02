import React from "react";
import reactDom from "react-dom";
import {Link} from 'react-router-dom';
import '../css-components/about.css';
import SkillCards from "./cards_habilidades";

const About = () => {
  const skill_array = [
    {
      Title: "Python",
      skillImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png"
    },
    {
      Title: "Java",
      skillImage: "https://pngimage.net/wp-content/uploads/2018/06/logo-java-png-3.png"
    },

  ]

  return (
    <>
     <header className="header-menu">
        <ul>
          <li>
            <Link to="/" className="Link">
                {""}
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="Link">
            {""}
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="Link">
            {""}
              Contact
            </Link>
          </li>
        </ul>
      </header>
      <section className="content_about">
        <h1 className="titulo">
          Skills
        </h1>
        {skill_array.map((skill) => (
            <SkillCards
              Title = {skill.Title}
              skillImage = {skill.skillImage}
            
            />
        ))}
      </section>
    </>
  );
}

export default About