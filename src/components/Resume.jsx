import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <div className="resume">
      <div className="resume-header">
        <div className="resume-hero">
          <h1>Jovie LaRue</h1>
          <a href={"mailto:jovie.larue@edu.sait.ca"}>
            <p>jovie.larue@edu.sait.ca</p>
          </a>
        </div>
      </div>
      <main>
        <div className="resume-section-container">
          <section className="resume-section">
            <h2>education</h2>
            <div className="resume-section-grouping">
              <h3>SAIT</h3>
              <h4>sept. 2023 - present</h4>
            </div>
            <p>
              I am currently studying in the software development program at the
              SAIT School for Advanced Digital Technology, standing at a 4.0
              GPA.
            </p>
            <p>My first and second year course material has covered:</p>
            <ul>
              <li>html, css, and javascript</li>
              <li>python</li>
              <li>c#/.net</li>
              <li>java</li>
              <li>operating systems</li>
              <li>git</li>
              <li>sql and pl/sql</li>
              <li>critical thinking and logic</li>
            </ul>
          </section>
          <section className="resume-section">
            <h2>experience</h2>
            <h4>
              <Link to="/projects">see projects tab for links</Link>
            </h4>
            <div className="resume-section-grouping">
              <ul>
                <li>Entry system for a local business written with Next.js</li>
                <li>Liquor counting/inventory system for Heritage Park</li>
                <li>
                  Managing client Wordpress installations and creating Wordpress
                  sites
                </li>
                <li>SAIT CourSearch: placed third in a sait-run hackathon</li>
                <li>YYC-iosk: placed fourth in the YYChacks 2024 hackathon</li>
              </ul>
            </div>
          </section>
          <section className="resume-section">
            <h2>hobbies</h2>
            <ul>
              <li>Music production</li>
              <li>Web development for friends and family</li>
              <li>Reading and writing</li>
              <li>Keeping up with tech news</li>
              <li>Neovim</li>
            </ul>
          </section>
          <section className="resume-section">
            <h2>about me</h2>
            <p id="resume-about">
              I am a developer with a passion for helping people create
              originative solutions to their problems. I am great at working
              collaboratively, incredible at learning quickly, and always am
              willing to take on a challenge.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
