import raizapaloozaImg from '../raizapaloozasite.png';
import yycioskImg from '../yyciosk.png';

export default function Projects() {
  return (
    <>
      <h1>my projects</h1>

      <div className="projects-wrapper">
        <div className="project">
          <h2>raizapalooza</h2>
          <div className='project-description'>
            <p>For the past month, I have been working with a small team to develop a <a href='https://raizapalooza.com'>website</a> where you can purchase tickets for an event, and a scanning application for event staff that connects to the ticket database.
We used MongoDB as a database, React + Vite with TailwindCSS for our front-end, and Next.js with Mongoose for our backend data processing.
My job was primarily to structure and develop the scanning application as well as structure and style components of the front-end.</p>
            <div className="project-image">
              <img src={raizapaloozaImg} alt="raizapalooza website layout" />
            </div>
          </div>
        </div>
        <div className="project">
          <h2>lbfm</h2>
          <div className='project-description'>
            <p>LBFM is a cross-platform music-tracking and rating app. I am currently working on the early stages of its development. It uses Rust/Rocket for the back-end, 
            and React + Vite for the front-end. I am using MySQL as its database because I'd like to gain
            experience in relational databases and using SQL in a real-life application. </p>
          </div>
        </div>
        <div className="project">
          <h2>hackathon project</h2>
          <div className='project-description'>
            <p>My team achieved fourth place in the 2024 YYC Hacks hackathon! I created the mapping and map interaction logic, 
              and utilized locations I pulled from <a href='https://data.calgary.ca'>Open Calgary databases</a>. I used the mapping 
              library <a href='https://leafletjs.com/'>Leaflet</a>. This was one of my first
              bigger projects, and I learned so much in the short period of time we had. Below is a picture of me giving a 
              demo to the judges and other participants. We were one of only a few teams to have a fully-working full-stack demo.
            </p>
            <div className="project-image">
              <img src={yycioskImg} alt="yyciosk hackathon presentation" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}