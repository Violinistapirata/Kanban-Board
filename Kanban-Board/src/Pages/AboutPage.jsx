import "./AboutPage.css";

function AboutPage() {
  return (
    <section id="about">
      <div className="about-container">
        <h1>ABOUT</h1>

        
        <div id= "presentacion">
        <h2>Presentación</h2>
        <p>
          Bienvenid@ a nuestro proyecto: <i>KANBAN BOARD</i>, tu app de gestión de tareas al más puro estilo Kanban. Somos Tomás Martín y Èric Masip, tus Fullstack Developers de confianza. En esta sección podrás conocer un poco más sobre nosotros y sobre este maravilloso proyecto.
        </p>
        </div>
        <section id="developers">
  <h2>LOS DEVELOPERS</h2>

  <div className="profiles-container">
    <article id="eric-profile">
      <h3>Èric Masip Vilalta - El Violinista Pirata</h3>
      <img src="../src/images/ERIC.PNG" alt="Èric Masip Vilalta - El Violinista Pirata" />
      <p>
        Empecé en el mundo de la música desde los 3 años. He estudiado y ejercido como violinista durante más de dos décadas, desarrollando habilidades como la{" "}
        <b>resiliencia, la atención al detalle y el trabajo en equipo</b>. Después trabajé durante 6 años como profesor de música en la ESO y bachillerato, experiencia que fortaleció mis capacidades de{" "}
        <b>comunicación, liderazgo y resolución de conflictos</b>.
      </p>
      <p>
        Actualmente, he encontrado mi pasión en el desarrollo web. Gracias al bootcamp de Ironhack, me convertí en{" "}
        <b>Fullstack MERN Developer</b>, adquiriendo conocimientos en tecnologías como{" "}
        <b>HTML, CSS, JavaScript, Node.js, React, Git/GitHub, OOP, TDD y MongoDB</b>. Mi objetivo es continuar aprendiendo, descubriendo y creando soluciones de alta calidad. En lo personal, me apasionan los juegos de mesa 🎲, el anime 👘👒, los bailes latinos 💃 y la repostería casera 🍪.
      </p>
    </article>

    <article id="tomas-profile">
      <h3>Tomás Martín</h3>
      <img src="../src/images/TOMAS.PNG" alt="Tomás Martín" />
      <p>
        ¡Hola! Mi nombre es Tomás Martín y me apasiona el diseño, la animación y, más recientemente, el desarrollo web.
        Estudié <b>Diseño Gráfico y Multimedia</b> en la Universidad de Valencia, donde aprendí los fundamentos de composición, tipografía, fotografía y dibujo técnico, además de mi primer contacto con <b>HTML y CSS</b>.
      </p>
      <p>
        Luego me especialicé en <b>Animación</b> en la Universidad de Newcastle, donde adquirí conocimientos sobre animación de personajes y gráficos. Posteriormente, trabajé como freelance mientras cursaba un postgrado en animación 3D, desarrollando habilidades avanzadas con <b>Cinema 4D (C4D)</b>.
        Desde hace más de 11 años, he trabajado como <b>Motion Grapher</b> en Mediapro, participando en proyectos para televisión que exigen creatividad, trabajo en equipo y cumplir con estrictos deadlines. Ahora, gracias al bootcamp de Ironhack, adquirí conocimientos en <b>HTML, CSS, JavaScript, Node.js, React, Git/GitHub, OOP, TDD y MongoDB</b>. Estoy comprometido a seguir creciendo y enfrentando nuevos retos en el desarrollo web.
      </p>
    </article>
  </div>
</section>

        <section id="project">
          <h2>EL PROYECTO - KANBAN BOARD</h2>
          <h3>El origen</h3>
          <p></p>
          <h3>Organización</h3>
          <p></p>
          <h3>Desafíos</h3>
          <p></p>
          <h3>Coming soon...</h3>
          <p></p>
        </section>
      </div>
    </section>
  );
}

export default AboutPage;