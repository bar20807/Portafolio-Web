import reactDom from 'react-dom';
import React from 'react';
import '../css-components/home.css';
import {Link} from 'react-router-dom';

const Home = () => {
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

      <section className="content-home">
          <div className="circulo">
            <img src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/271042166_3102335493374068_4939890262789910520_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=C1iajJnd1gsAX_pUYgX&_nc_ht=scontent-mia3-2.xx&oh=00_AT88wuVkOvi-JVmYnedQjzd1SjOpo3efp34Gs89yopzZUg&oe=629C5478"/>
          </div>
        <p className="ocupación">
          Third year student in the computer career 
          <span className="mi_nombre"> José Rodrigo Barrera García</span>
          at the Universidad del Valle de Guatemala
        </p>
      </section>
    </>
  );
};

export default Home;
