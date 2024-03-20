import Abilities from "./Abilities";
import About from "./About";


export default function Home() {


  return (
    <>
      <div className='landing'>
        <div className="hero">
          <div className="tagline">
            <h1>
              MY NAME IS JOSHUA LARUE AND I AM A SOFTWARE DEVELOPER.
            </h1>
          </div>
          <Abilities />
        </div>

        <div className="scroll-down">
          <p>↓ scroll down ↓</p>
        </div>
      </div>
      <About />
    </>
  );
}