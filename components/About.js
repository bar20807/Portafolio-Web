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