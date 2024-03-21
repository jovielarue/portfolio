import Abilities from "./Abilities";
import About from "./About";

export default function Home() {

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
          <p>↓ scroll down ↓</p>
        </div>
      </div>
      <div className="scrolled">
        <About />
      </div>
    </>
  );
}