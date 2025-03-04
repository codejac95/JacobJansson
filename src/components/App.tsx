import About from "./About";
import Projects from "./Projects";
import Cv from './Cv';

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useState } from "react";

function App() {
  const [Page, setPage] = useState("");
  function showAbout() {
    setPage("About");
  }

  function showProjects() {
    setPage("Projects");
  }

  function showCv() {
    setPage("Cv");
  }

  return (
    <>
      <h1 className='h1'>Jacob Jansson</h1>
      <div className="header">
        <button onClick={showAbout}>About</button>
        <button onClick={showProjects}>Projects</button>
        <button onClick={showCv}>CV</button>
        <a href="https://www.linkedin.com/in/jacob-jansson-81a5231b9/" target="_blank" rel="noopener noreferrer">
          <button><FaLinkedin/></button>
        </a>
        <a href="https://github.com/codejac95" target="_blank" rel="noopener noreferrer">
          <button><FaGithub/></button>
        </a>
      </div>

      <div className="content">
        {Page === "About" && <About />}
        {Page === "Projects" && <Projects />}
        {Page === "Cv" && <Cv />}
      </div>
      
    </>
  );
}

export default App;