import React from "react";
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
    {
      Title: "CSharp",
      skillImage: "https://cdn.icon-icons.com/icons2/2415/PNG/512/csharp_original_logo_icon_146578.png"
    },
    {
      Title: "C++",
      skillImage: "https://brandlogos.net/wp-content/uploads/2022/01/c-brandlogo.net_.png"
    },
    {
      Title: "Javascript",
      skillImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
    },
    {
      Title: "Assembly Lenguage",
      skillImage: "https://apprecs.org/ios/images/app-icons/256/0e/500466958.jpg"
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
          <li>
            <Link to="/portafolio" className="Link">
            {""}
              Portafolio
            </Link>
          </li>
          <li className="contact">
            <a href='https://github.com/bar20807'>
                <img src='https://img.icons8.com/stickers/344/github.png'/>
            </a>
          </li>
          <li className="contact">
            <a href='https://wa.me/qr/SFCKMZBGTH3MD1'>
                <img src='https://img.icons8.com/ultraviolet/344/whatsapp--v1.png'/>
            </a>
          </li>
        </ul>
      </header>
      <section className="content_about">
        <h1 className="titulo">
          Skills
        </h1>
        <section className="skill_array">
        {skill_array.map((skill) => (
            <SkillCards
              Title = {skill.Title}
              skillImage = {skill.skillImage}
            
            />
        ))}
        </section>
      </section>
    </>
  );
}

export default About