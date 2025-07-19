//STYLES
import "./ContactPage.css";



function ContactPage() {
  return (
    <>
      <section id="contact-container">
      <div id="contact-sub-container">
      <h1>CONTACT</h1>

      <p>
        Para más información, proyectos, cookies y demás puedes contactar con
        nosotros en...
      </p>
    
      <article id="eric-contact">
        <h3>Èric Masip</h3>

        <a
          href="https://github.com/Violinistapirata"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/github-icon.svg" alt="github icon" />
          <p>Violinistapirata</p>
        </a>

        <a
          href="http://www.linkedin.com/in/èric-masip-vilalta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/linkedin-app-icon.svg" alt="linkedin icon" />
          <p>Èric Masip Vilalta</p>
        </a>

        <a
          href="mailto:ericmasipvilalta@gmail.com?Subject=Hi%20there!%20I%20loved%20your%20Kanban%20board."
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/gmail-icon.svg" alt="gmail icon" />
          <p> ericmasipvilalta@gmail.com</p>
        </a>
      </article>
      <article id="tomas-contact">
        <h3>Tomás Martín</h3>
        <a
          href="https://github.com/tmartin87"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/github-icon.svg" alt="github icon" />
          <p> tmartin87</p>
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img src="/images/linkedin-app-icon.svg" alt="linkedin icon" />
          <p>Tomás Martín</p>
        </a>
        <a href="mailto:" target="_blank" rel="noopener noreferrer">
          <img src="/images/gmail-icon.svg" alt="gmail icon" />
          <p>tmartindsgn@gmail.com</p>
        </a>
      </article>
      </div>
      </section>
    </>
  );
}

export default ContactPage;
