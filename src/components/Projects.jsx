import raizapaloozaImg from "../raizapaloozasite.png";
import yycioskImg from "../yyciosk.png";
import freqImg from "../freq.png";

export default function Projects() {
  return (
    <>
      <h1>my projects</h1>

      <div className="projects-wrapper">
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
              front-end. I am using MySQL as its database because I'd like to
              gain experience in using a relational database in a real-life
              application.{" "}
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
          <h2>earrings</h2>
          <div className="project-description">
            <p>
              Earrings is an e-commerce solution for my younger siblings who
              wanted to have a place to sell their hand-made jewelry. I decided
              to embark on this journey of making my own e-commerce site once my
              siblings complained that Etsy took too much out of their sale
              price. I am in the early stages of its development, but it seems
              promising! I'm using Next.js and MongoDB. The decision to use
              MongoDB was made because it is not imperative to relationally
              store data (I just need to store products and receipt objects).
              I've also gotten experience with relational databases in some of
              my other projects, so using a document database seemed to be the
              next learning step for me!{" "}
            </p>
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

