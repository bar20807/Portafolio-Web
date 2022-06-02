import React from "react";
import '../css-components/skill_cards.css'

const SkillCards = ({Title, skillImage}) => {
        return (
          <>
            <div class="tarjeta">
            <div class="titulo">{Title}</div>
            <div class="cuerpo">
                <img src={skillImage} alt={Title}/>
            </div>
            </div>

          </>
    )
}

export default SkillCards;