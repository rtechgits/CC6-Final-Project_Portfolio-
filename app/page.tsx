import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Page() {
  return (
    <>

  <header className="header">
    <div className="logo">
      <h6>CK DEV</h6>
    </div>
    <div className="nav">
      <ul>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Service">Service</a>
        </li>
        <li>
          <a href="#Project">Project</a>
        </li>
        <li>
          <a href="#Connect">Connect</a>
        </li>
      </ul>
    </div>
  </header>
  <section className="Home" id="Home">
    <div className="Home-content">
      <h6>Hi! I am</h6>
      <h4>Chit Pitallano</h4>
      <h1 className="ui">UI &amp; UX</h1>
      <h1 className="designer">Designer</h1>
      <p>
        A Philippine-based UI/UX designer dedicated to solving design
        challenges, delivering smart user-centered solutions, and providing
        reliable creative support.
      </p>
      <div className="icons">
        <img src="Images/fb-icon.png" alt="Facebook" />
        <img src="Images/github-icon.png" alt="Github Icon" />
        <img src="Images/linkedin-icon.png" alt="LinkedIn Icon" />
        <img src="Images/ig-icon.png" alt="Instagram Icon" />
      </div>
      <button className="Hire-me">Hire Me</button>
      <button className="Download-CV">Download CV</button>
    </div>
    <div className="Image">
      <img src="Images/Image1.png" alt="Profile image" />
    </div>
  </section>
  <section className="About" id="About">
    <div className="About-image">
      <img src="Images/Image2.png" alt="Profile image 2" />
    </div>
    <div className="About-content">
      <h4>🡢 About Me</h4>
      <h1 className="Whois">Who is </h1>
      <h1 className="Chit"> Chit Pitallano?</h1>
      <p>
        I’m a Philippine-based UI/UX designer trusted by various businesses and
        companies for delivering creative and user-centered digital solutions.
        With strong expertise in{" "}
        <b>UI/UX design, Web Development, Graphic Design,</b> and{" "}
        <b>Application Development,</b>
        I focus on building products that balance aesthetics, functionality, and
        purpose.
        <br /> <br /> My work is driven by a passion for innovation and
        problem-solving. I take pride in helping brands and teams transform
        ideas into engaging digital experiences that not only look great but
        also create real value for users.
      </p>
      <h1 className="numbers">120+ 48+ 3+</h1>
      <h1 className="des1">Project Completed</h1>
      <h1 className="des2">Collaborated Brands</h1>
      <h1 className="des3">Years of Expertise</h1>
    </div>
  </section>
  <section className="Service" id="Service">
    <div className="Service-content">
      <h4>🡢 Services</h4>
      <h1>Services</h1>
      <h2>I Provide</h2>
    </div>
    <div className="parent">
      <div className="div1">
        <img src="Images/ui-icon.png" alt="UI" />
        <h1>───────────────</h1>
        <h3>UI/UX Design</h3>
        <p>
          Building designs that connect <br /> users and brands.
        </p>
        <h4>Learn more 🡥</h4>
      </div>
      <div className="div2">
        <img src="Images/web-icon.png" alt="Web" />
        <h1>───────────────</h1>
        <h3>Web Design</h3>
        <p>Building responsive, modern websites that bring ideas to life.</p>
        <h4>Learn more 🡥</h4>
      </div>
      <div className="div3">
        <img src="Images/app-icon.png" alt="App" />
        <h1>───────────────</h1>
        <h3>App Design</h3>
        <p>Designing clean apps focused on seamless user experiences.</p>
        <h4>Learn more 🡥</h4>
      </div>
      <div className="div4">
        <img src="Images/graphic-icon.png" alt="Graphic" />
        <h1>───────────────</h1>
        <h3>Graphic Design</h3>
        <p>Creating impactful visuals that express creativity and purpose.</p>
        <h4>Learn more 🡥</h4>
      </div>
    </div>
    <h4 className="Tools">The Tools Behind My Designs</h4>
    <div className="icons2">
      <img src="Images/icons2.png" alt="icons2" />
    </div>
  </section>
  <section className="Project" id="Project">
    <div className="Project-content">
      <h4>🡢 Projects</h4>
      <h1>My Latest Projects</h1>
    </div>
    <div className="Project-icon">
      <img src="Images/projects.png" alt="Proj" />
    </div>
  </section>
  <section className="Connect" id="Connect">
    <div className="Connect-content">
      <h4>🡢 Let's Connect</h4>
      <h1 className="one">Are you</h1>
      <h1 className="two">Ready For Your</h1>
      <h1 className="three">Next</h1>
      <h1 className="four">Project?</h1>
      <p>
        Reach out for business <br /> inquiries or partnerships.
      </p>
    </div>
    <div className="form-container">
      <h2>Contact Us</h2>
      <form action="#" method="post">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              placeholder="Ex. Juan"
            />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              placeholder="Ex. De La Cruz"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              placeholder="Enter here..."
            />
          </div>
        </div>
        <div className="form-group full-width">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows={6}
            placeholder="Enter here..."
            defaultValue={""}
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  </section>
</>

  );
}
