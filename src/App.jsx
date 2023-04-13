import Header from "./components/Header"
import Bio from "./components/Bio" 
import Projects from "./components/Projects"
import ProjectsHeader from "./components/ProjectsHeader"
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import { useCallback } from "react";

function App() {

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine)
  }, [])

  return (
    <div className="App">
      <Particles options={particlesOptions} init={particlesInit} />
      <Header/>
      <Bio/>
      <ProjectsHeader/>
      <Projects/>
    </div>
  )
}

export default App
