import "./AboutPage.css";
import ericProfileImg from "../images/eric-profile-img.JPG";

function AboutPage() {
  return (
    <section id="about">
      <div className="about-container">
        <h1>ABOUT</h1>

        <div id="presentacion">
          <h2>Presentación</h2>
          <p>
            Bienvenid@ a nuestro proyecto: <i>KANBAN BOARD</i>, tu app de
            gestión de tareas al más puro estilo Kanban. Somos Tomás Martín y
            Èric Masip, tus Fullstack Developers de confianza. En esta sección
            podrás conocer un poco más sobre nosotros y sobre este maravilloso
            proyecto.
          </p>
        </div>
        <section id="developers">
          <h2>LOS DEVELOPERS</h2>

          <div className="profiles-container">
            <article id="eric-profile">
              <h3>Èric Masip Vilalta - El Violinista Pirata</h3>
              <div className="profile-img eric" style={{backgroundImage:`url(${ericProfileImg})`}}>
                {/* <img src="../src/images/eric-profile-img.JPG" alt="Èric Masip Vilalta - El Violinista Pirata" /> */}
              </div>
              <p>
                Empecé en el mundo de la música desde los 3 años. He estudiado y
                ejercido como violinista durante más de dos décadas,
                desarrollando habilidades como la{" "}
                <b>
                  resiliencia, la atención al detalle y el trabajo en equipo
                </b>
                . Después trabajé durante 6 años como profesor de música en la
                ESO y bachillerato, experiencia que fortaleció mis capacidades
                de <b>comunicación, liderazgo y resolución de conflictos</b>.
              </p>
              <p>
                Actualmente, he encontrado mi pasión en el desarrollo web.
                Gracias al bootcamp de Ironhack, me convertí en{" "}
                <b>Fullstack MERN Developer</b>, adquiriendo conocimientos en
                tecnologías como{" "}
                <b>
                  HTML, CSS, JavaScript, Node.js, React, Git/GitHub, OOP, TDD y
                  MongoDB
                </b>
                . Mi objetivo es continuar aprendiendo, descubriendo y creando
                soluciones de alta calidad. En lo personal, me apasionan los
                juegos de mesa 🎲, el anime 👘👒, los bailes latinos 💃 y la
                repostería casera 🍪.
              </p>
            </article>

            <article id="tomas-profile">
              <h3>Tomás Martín</h3>
              <div className="profile-img tomas"></div>
              {/* <img src="../src/images/tomas-profile-img.jpg" alt="Tomás Martín" /> */}
              <p>
                ¡Hola! Mi nombre es Tomás Martín y me apasiona el diseño, la
                animación y, más recientemente, el desarrollo web. Estudié{" "}
                <b>Diseño Gráfico y Multimedia</b> en la Universidad de
                Valencia, donde aprendí los fundamentos de composición,
                tipografía, fotografía y dibujo técnico, además de mi primer
                contacto con <b>HTML y CSS</b>.
              </p>
              <p>
                Luego me especialicé en <b>Animación</b> en la Universidad de
                Newcastle, donde adquirí conocimientos sobre animación de
                personajes y gráficos. Posteriormente, trabajé como freelance
                mientras cursaba un postgrado en animación 3D, desarrollando
                habilidades avanzadas con <b>Cinema 4D (C4D)</b>. Desde hace más
                de 11 años, he trabajado como <b>Motion Grapher</b> en Mediapro,
                participando en proyectos para televisión que exigen
                creatividad, trabajo en equipo y cumplir con estrictos
                deadlines. Ahora, gracias al bootcamp de Ironhack, adquirí
                conocimientos en{" "}
                <b>
                  HTML, CSS, JavaScript, Node.js, React, Git/GitHub, OOP, TDD y
                  MongoDB
                </b>
                . Estoy comprometido a seguir creciendo y enfrentando nuevos
                retos en el desarrollo web.
              </p>
            </article>
          </div>
        </section>
        {/* 
        <section id="project">
          <h2>EL PROYECTO - KANBAN BOARD</h2>
          <h3>El origen</h3>
          <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
          <h3>Organización</h3>
          <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
          <h3>Desafíos</h3>
          <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
          <h3>Coming soon...</h3>
          <p></p>
        </section> */}
      </div>
    </section>
  );
}

export default AboutPage;
