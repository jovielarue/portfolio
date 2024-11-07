import raizapaloozaImg from "../../assets/raizapaloozasite.png";
import yycioskImg from "../../assets/yyciosk.png";
import freqImg from "../../assets/freq.png";
import marblepeImg from "../../assets/marblepolishingexperts.png";
import denvernlfImg from "../../assets/denvernlf.png";
import charchatImg from "../../assets/charchat.png";

export default function Projects() {
  return (
    <>
      <h1>my projects</h1>

      <div className="projects-wrapper">
        <div className="project">
          <h2>marble polishing experts</h2>
          <div className="project-description">
            <p>
              Over the summer of 2024, I worked as an intern at{" "}
              <a
                href="https://gritmedium.com"
                target={"_blank"}
                rel={"noreferrer"}
              >
                Grit Medium Digital Marketing
              </a>{" "}
              creating and managing various client <strong>Wordpress</strong>{" "}
              sites. One of the sites I worked on was{" "}
              <a
                href="https://marblepolishingexperts.com"
                target="_blank"
                rel="noreferrer"
              >
                Marble Polishing Experts.
              </a>{" "}
              I used Bricks Builder to recreate an existing site from scratch in
              order to reduce the client&apos;s page load times and boost their
              SEO. I learned so much about Wordpress during this project;
              templating, post and blog management, best practices for hosting,
              image and media management, and so much more.
            </p>
            <div className="project-image">
              <img src={marblepeImg} alt="marble polishing experts home page" />
            </div>
          </div>
        </div>
        <div className="project">
          <h2>charchat</h2>
          <div className="project-description">
            <p>
              <a
                href="https://chat.jahsauce.net/auth/signup"
                target={"_blank"}
                rel={"noreferrer"}
              >
                CharChat
              </a>{" "}
              is like twitter, but better! No pesky ads, only cool people, and
              built by moi. It is a Next.js application with a Pocketbase
              backend that supports individual user profiles with avatars and up
              to 512 character &quot;chats&quot; (character chats... charchat
              :)) at a time. Pocketbase has really grown on me for its ease of
              use, ability to self-host, and relatively small performance drain.
              Feel free to create an account and see what&apos;s up!
            </p>
            <div className="project-image">
              <img src={charchatImg} alt="marble polishing experts home page" />
            </div>
          </div>
        </div>

        <div className="project">
          <h2>freq</h2>
          <div className="project-description">
            <p>
              FREQ is a cross-platform{" "}
              <a
                href={"https://lbfm.jahsauce.cloud"}
                target={"_blank"}
                rel={"noreferrer"}
              >
                music-tracking and rating app
              </a>
              . It is currently hosted, and users are able to sign up for an
              account and start ranking songs and albums using a fun
              mobile-first interface! Users are able to find other users, and
              see the community average rating for all albums currently in the
              system. It uses Next.js for the back-end, and React for the
              front-end. I am using MySQL as its database because I&apos;d like
              to gain experience in using a relational database in a real-life
              application.
            </p>
          </div>
          <div className="project-image">
            <img
              src={freqImg}
              className={"lbfm-img"}
              alt="freq album page"
            ></img>
          </div>
        </div>

        <div className="project">
          <h2>denver nlf events</h2>
          <div className="project-description">
            <p>
              I currently have a hand in creating and managing many event
              postings for the{" "}
              <a
                href="https://denvernlfevents.com"
                target="_blank"
                rel="noreferrer"
              >
                Denver Natural Living Foundation.
              </a>{" "}
              Most of the upcoming event postings on the front page are written
              by me. I create and manage them through the client&apos;s
              Wordpress installation.
            </p>
            <div className="project-image">
              <img src={denvernlfImg} alt="denver nlf event posting" />
            </div>
          </div>
        </div>

        <div className="project">
          <h2>raizapalooza</h2>
          <div className="project-description">
            <p>
              I worked with a small team for about a month to develop a{" "}
              <a
                href="https://raizapalooza.com"
                target={"_blank"}
                rel={"noreferrer"}
              >
                website
              </a>{" "}
              where you can purchase tickets for an event, and a scanning
              application for event staff that connects to the ticket database.
              We used MongoDB as a database, React + Vite with TailwindCSS for
              our front-end, and Next.js with Mongoose for our backend data
              processing. My job was primarily to develop the{" "}
              <a href="https://raizapalooza-qr-scan-fd5c7.ondigitalocean.app/">
                scanning application
              </a>{" "}
              as well as structure and style components of the front-end, such
              as the photo gallery and about pages. Our site was successfully
              deployed ahead of the event, and it processed over $1000 in ticket
              sales before and during the event. The scanner I created was
              easy-to-use, and bartenders and bouncers loved it for how fast and
              accurate it was!
            </p>
            <div className="project-image">
              <img src={raizapaloozaImg} alt="raizapalooza website layout" />
            </div>
          </div>
        </div>

        <div className="project">
          <h2>hackathon project</h2>
          <div className="project-description">
            <p>
              My team achieved fourth place in the 2024 YYC Hacks hackathon! I
              created the mapping and map interaction logic, and utilized
              locations I pulled from{" "}
              <a
                href="https://data.calgary.ca"
                target={"_blank"}
                rel={"noreferrer"}
              >
                Open Calgary databases
              </a>
              . I used the mapping library{" "}
              <a
                href="https://leafletjs.com/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                Leaflet
              </a>
              . This was one of my first bigger projects, and I learned so much
              in the short period of time we had. Below is a picture of me
              giving a demo to the judges and other participants. We were one of
              only a few teams to have a fully-working full-stack demo.
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
