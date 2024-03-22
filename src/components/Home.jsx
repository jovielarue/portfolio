import Abilities from "./Abilities";
import About from "./About";
import { useState } from "react";

export default function Home() {

  // Add a scroll event listener to the window object that changes the text of the "scroll down" message when the user scrolls down the page
  const [scrollDownText, setScrollDownText] = useState("↓ scroll down ↓");
  window.onscroll = (e) => {
    if (window.scrollY < window.innerHeight / 1.7) {
      setScrollDownText("↓ scroll down ↓");
    } else {
      setScrollDownText("thank you :)");
    }
  };

  return (
    <>
      <div className='landing'>
        <div className="hero">
          <div className="tagline">
            <h1>
              MY NAME IS <span id='header-name'>JOSHUA LARUE</span> AND I AM A SOFTWARE DEVELOPER.
            </h1>
          </div>
          <Abilities />
        </div>

        <div className="scroll-down">
          <p>{scrollDownText}</p>
        </div>
      </div>
      <div className="scrolled">
        <About />
      </div>
    </>
  );
}