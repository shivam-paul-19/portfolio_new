import './App.css';
import Contact from './contact';
import Education from './education';
import HeroSection from './HeroSection';
import NavBar from './NavBar';
import Projects from './projects';
import SkillSection from './Skill';
import Certificates from './certificates';
import { Pointer } from "@/components/magicui/pointer"; 

function App() {
  return (
    <>
      <NavBar />
      <div id="home"><HeroSection /></div>
      <div id="skills"><SkillSection /></div>
      <div id="projects"><Projects /></div>
      <div id="education"><Education /></div>
      <div id="certificates"><Certificates /></div>
      <div id="contact"><Contact /></div>
      <Pointer className="fill-teal-500" />
    </>
  )
}

export default App;
