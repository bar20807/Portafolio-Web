import React from "react";
import '../css-components/skill_cards.css'

const SkillCards = ({Title, skillImage}) => {
        return (
          <>
            <div className="container">
              <div className="card">
                  <h1>{Title}</h1>
                  <img src={skillImage} alt={Title + "Image"}/>
              </div>
            </div>

          </>
    )
}

export default SkillCards;