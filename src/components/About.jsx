import { Link } from "react-router-dom";
export default function About() {
  return (
    <>
      <div className="about-container">
        <h2>ABOUT ME</h2>
        <div className="about-body">
          <p>
            I am a passionate and dynamic software developer. I like to make a
            difference in the world wherever possible. I've been interested in
            computers since I was a small child, and that interest has not
            faded. As a 13 year old, I was discovering Debian Linux on the CHIP
            computer and Raspberry Pis. As I grew older, my love for Linux and
            programming has steadily grown, and I'm now taking the Software
            Development diploma at SAIT.
          </p>
        </div>
      </div>

      <div className="upto-container">
        <h2>WHAT I'M UP TO</h2>
        <div className="upto-body">
          <p>
            I am almost done my fourth semester in the Software Development
            diploma program at SAIT. This semester has seen me working on a
            newer{" "}
            <a
              href="https://github.com/jovielarue/mrrp"
              target="_blank"
              rel="noreferrer"
            >
              Rust-based version of CharChat
            </a>{" "}
            and starting work with a FinTech startup called Clove.
          </p>
          <p>
            Through SAIT, and with a small group of peers, I am working on a
            liquor counting application for Calgary's own Heritage Park. This
            project will streamline their counting process, which takes hours to
            input into a spreadsheet, and save it in a database automatically.
          </p>
          <p>
            On the side, I do freelance work through{" "}
            <a href="https://gritmedium.com" target="_blank" rel="noreferrer">
              Grit Medium Digital Marketing.
            </a>{" "}
            This normally includes work such as building sites or managing
            Wordpress instances.
          </p>
        </div>
      </div>
    </>
  );
}
