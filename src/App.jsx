import './App.css'
import Contact from './contact';
import Education from './education';
import HeroSection from './HeroSection'
import NavBar from './NavBar'
import Projects from './projects';
import SkillSection from './Skill'
import { Pointer } from "@/components/magicui/pointer"; 

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <SkillSection />
      <Education />
      <Projects />
      <Contact />
      <Pointer className="fill-teal-500" />
    </>
  )
}

export default App
