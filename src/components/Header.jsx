import { Link } from "react-router-dom";

export default function Header() {


  return (
    <>
      <header className="header">
        <nav className="header-nav">
          <div className="nav-item"><Link to="/resume">resume</Link></div>
          <div className="nav-item"><a href="https://github.com/joshlarue">github</a></div>
          <div className="nav-item"><Link to="/projects">projects</Link></div>
          <div className="nav-item"><Link to="/blog">blog</Link></div>
          <div className="nav-item"><Link to="/contact">contact</Link></div>
        </nav>
      </header>
    </>
  );
}