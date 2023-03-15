import Header from "./components/Header"
import Bio from "./components/Bio" 
import Projects from "./components/Projects"
import ProjectsHeader from "./components/ProjectsHeader"

function App() {

  return (
    <div className="App">
      <Header/>
      <Bio/>
      <ProjectsHeader/>
      <Projects/>
    </div>
  )
}

export default App
