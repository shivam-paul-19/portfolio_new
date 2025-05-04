import './App.css'
import Contact from './contact';
import HeroSection from './HeroSection'
import NavBar from './NavBar'
import SkillSection from './Skill'
import { Pointer } from "@/components/magicui/pointer"; 

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <SkillSection />
      <Contact />
      <Pointer className="fill-teal-500" />
    </>
  )
}

export default App
