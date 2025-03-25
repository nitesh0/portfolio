import CodeBlock from "./components/CodeBlock"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import WorkExperience from "./components/WorkEx"

function App() {


  return (
    <div className='h-full w-full '>
      <div className='flex flex-col h-full gap-20'>
        <Navbar/>
        <Hero/>
        <CodeBlock/>
        <Skills/>
        <WorkExperience/>
      </div>
    </div>
   
  )
}

export default App
