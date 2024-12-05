function AboutPage() {
  return (
    <section id="about">
      <h1>ABOUT</h1>

      <img src="../src/images/developers.jpg" alt="developers" />

      <h2>Presentación</h2>
      <p>
        Bienvenid@ a nuestro proyecto: <i>KANBAN BOARD</i> tu app de gestión de
        tareas al más puro estilo Kanban! Somos Tomás Martín y Èric Masip, tus
        Fullstack Developers de confianza. En esta sección podrás conocer un
        poco más sobre nosotros y sobre este maravilloso proyecto.
      </p>
      <section>
        <h2>LOS DEVELOPERS</h2>

        <article id="eric">
          <h3>Èric Masip Vilalta - El Violinista Pirata</h3>
          <p>
            Empecé en el mundo de la música desde los 3 años. He estudiado y
            ejercido como violinista durante más de 2 décadas y eso me ha hecho
            desarrollar habilidades como la{" "}
            <b>resiliencia, la atención al detalle y el trabajo en equipo.</b>{" "}
            Después estuve otros 6 años trabajando en el sector educativo como
            profesor de música en la ESO y bachillerato. Esta intensa pero
            edificante experiencia me ayudó a desarrollar capacidades en{" "}
            <b>comunicación, liderazgo y resolución de conflictos</b>
            entre otras. Ahora he encontrado mi pasión en el desarrollo web y a
            través de Ironhack he podido convertirme en{" "}
            <b>Fullstack MERN Developer</b> y adquirir conocimientos técnicos en
            el manejo de{" "}
            <b>
              HTML, CSS, JavaScript, Nodejs, React, Git/GitHub, OOP, TDD y
              MongoDB,
            </b>{" "}
            entre otros. Mi objetivo es seguir aprendiendo, descubriendo y
            creando en este fascinante mundo de la programación y poder ofrecer
            soluciones de alta calidad para cualquier reto que pueda encontrarme
            como desarrollador (Como buen gamer que soy no me achanto ante
            ningún desafío y doy siempre el 100% para lograr mis objetivos 🏆).
            En lo personal me considero una persona tranquila de trato agradable
            y de múltiples y diversas aficiones entre las cuales destacan los
            juegos de mesa🎲, el anime👘👒, los bailes latinos💃 y también la
            repostería casera así que si te preguntabas de donde salían tantas
            cookies ahora ya lo sabes 😜🍪.
          </p>
        </article>

        <article id="eric">
          <h3>Tomás Martín</h3>
          <p>{/*DESCRIPCIÓN AQUÍ */}</p>
        </article>
      </section>
      <section>
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
      <div className="github-links-container">
        <a href="https://github.com/tmartin87" target="blank">
          tmartin87{" "}
        </a>
        <a href="https://github.com/Violinistapirata" target="blank">
          Violinistapirata
        </a>
      </div>
    </section>
  );
}

export default AboutPage;
