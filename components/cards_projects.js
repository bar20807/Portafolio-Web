import React from "react";
import '../css-components/cards_projects.css'

const ProjectCard = ({Title, projectImage,LinkP}) => {
        return (
          <>
          <a href={LinkP}>
            <div className="contenedor">
              <div className="tarjeta">
                  <img src={projectImage} alt={Title + "Image"}/>
                  <h1>{Title}</h1>
              </div>
            </div>
            </a>
          </>
    )
}

export default ProjectCard;