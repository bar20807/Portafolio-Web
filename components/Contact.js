import React from 'react'
import '../css-components/contact.css';

const ContactMe = () => {
  return (
    <>
      <section className="contact-content">
      <h1 className="titulo">
          Contactame
        </h1>
        <div class="contact_form">
          <div class="formulario">
            <h1>Formulario de contacto</h1>
            <h3>Escríbeme y en breve nos pondremos en contacto </h3>

            <form action="https://formsubmit.co/bar20807@uvg.edu.gt" method="post">
              <p>
                <label for="nombre" className="colocar_nombre">
                  Nombre
                  <span class="obligatorio">*</span>
                </label>
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  required="obligatorio"
                  placeholder="Escribe tu nombre"
                />
              </p>

              <p>
                <label for="email" className="colocar_email">
                  Email
                  <span class="obligatorio">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required="obligatorio"
                  placeholder="Escribe tu Email"
                />
              </p>

              <p>
                <label for="telefone" className="colocar_telefono">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="telefono"
                  id="telefono"
                  placeholder="Escribe tu teléfono"
                />
              </p>

              <p>
                <label for="asunto" className="colocar_asunto">
                  Asunto
                  <span class="obligatorio">*</span>
                </label>
                <input
                  type="text"
                  name="asunto"
                  id="assunto"
                  required="obligatorio"
                  placeholder="Escribe un asunto"
                />
              </p>

              <p>
                <label for="mensaje" className="colocar_mensaje">
                  Mensaje
                  <span class="obligatorio">*</span>
                </label>
                <textarea
                  name="mensaje"
                  class="texto_mensaje"
                  id="mensaje"
                  required="obligatorio"
                  placeholder="Deja aquí tu mensaje..."
                ></textarea>
              </p>

              <button type="submit" id="enviar">
                <p>Enviar</p>
              </button>

              <p className="aviso">
                <span className="obligatorio"> * </span>los campos son obligatorios.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactMe;