import React from 'react'
import '../css-components/portafolio.css'
import {Link} from 'react-router-dom'
import ProjectCard from './cards_projects'

const Portafolio = () => {
    const projects = [
        {
            Title: "StockX Clone",
            projectImage: "https://upload.wikimedia.org/wikipedia/commons/9/95/Stockx_logo.png",
            LinkP: "https://github.com/bar20807/StockX-Fekas"
        },
        {
            Title: "Calculator with React",
            projectImage: "https://www.pngmart.com/files/7/Calculator-Transparent-Background.png",
            LinkP: "https://github.com/bar20807/Calculadora-Lab8"
        },
        {
            Title: "AlChilazo",
            projectImage: "https://cdn.discordapp.com/attachments/689921957453496371/976959513112502323/unknown.png",
            LinkP: "https://github.com/Racso1624/AlChilazo"
        },
        {
            Title:"Maze with React",
            projectImage: "https://www.nicepng.com/png/detail/107-1072883_this-free-icons-png-design-of-simple-maze.png",
            LinkP: "https://github.com/bar20807/Pusitas_Maze"
        },
        {
            Title:"Portafolio web",
            projectImage: "https://ouch-cdn2.icons8.com/sLJuq80ZEhtmrg1KDuY-v1Pn4bgqFmERQooz5f2_lVU/rs:fit:763:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjk5/L2YzMWQxMjQwLTNj/YWYtNDU2Zi05MGQw/LTFkODdjZGFmOTlk/OS5zdmc.png",
            LinkP: "https://github.com/bar20807/Portafolio-Web"
        },
        {
            Title:"Movies services project",
            projectImage: "https://www.pngitem.com/pimgs/m/30-307272_transparent-movie-camera-clipart-movie-camera-logo-png.png",
            LinkP: "https://github.com/Yong-Park/proyecto2BD"
        },
    ]
  return (
    <>
      <header className="header-menu">
        <ul>
          <li>
            <Link to="/home" className="Link">
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
            <a href="https://github.com/bar20807">
              <img src="https://img.icons8.com/stickers/344/github.png" />
            </a>
          </li>
          <li className="contact">
            <a href="https://wa.me/qr/SFCKMZBGTH3MD1">
              <img src="https://img.icons8.com/ultraviolet/344/whatsapp--v1.png" />
            </a>
          </li>
        </ul>
      </header>
      <section className='content-portafolio'>
      <h1 className="title">
          Projects
        </h1>
        <section className='project_array'>
        {projects.map((proyecto) =>(
            <ProjectCard
                Title={proyecto.Title}
                projectImage = {proyecto.projectImage}
                LinkP={proyecto.LinkP}
            />
        ))}
        </section>
      </section>
    </>
  );
}

export default Portafolio