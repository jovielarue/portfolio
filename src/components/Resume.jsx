export default function Resume() {

  return (
    <div className='resume'>
      <header className='resume-header'>
        <div className="resume-hero">
          <h1>Joshua LaRue</h1>        
          <p>joshua.larue@edu.sait.ca</p>
        </div>
      </header>
      <main>
        <div className="resume-section-container">
          <section className='resume-section'>
            <h2>Education</h2>
            <h3>SAIT</h3>
            <h4>Sept. 2023 - Present</h4>
            <p>Studying in the Software Development program at the SAIT School for Advanced Digital Technology.</p>
            <h3>University of Alberta</h3>
            <h4>September 2022 - April 2023</h4>
            <p>Completed first year of BSc in Physiology with Specialization</p>
          </section>
          <section className='resume-section'>
            <h2>Experience</h2>
            <a href="https://joshlarue.github.io" target='_blank'>My personal projects</a>
            <ul>
                <li>Several web projects utilizing HTML, CSS, and JavaScript with React</li>
                <li>SAIT CourSearch: placed third in a SAIT-run hackathon</li>
                <li>YYC-iosk: placed fourth in the YYCHacks 2024 hackathon</li>
                <li>Nextcloud home server</li>
            </ul>
          </section>
          <section className='resume-section'>
            <h2>Hobbies</h2>
            <ul>
              <li>Music production</li>
              <li>Web development for friends and family</li>
              <li>Reading and writing</li>
            </ul>
          </section>
          <section className='resume-section'>
            <h2>About me</h2>
            <p id="resume-about">I am a developer with a passion for helping people create originative solutions to their problems. I am great at working collaboratively, love creating accessible software, and thrive in fast-paced environments.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}