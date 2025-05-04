import "./skills.css";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { useState } from "react";
import { TextAnimate } from "@/components/magicui/text-animate";

function SkillSection() {
  let skillSet = [
    ["Python", "Java", "C", "C++", "JavaScript", "TypeScript", "PHP"],
    ["HTML", "CSS", "Node JS", "Express JS", "React JS", "MySQL", "Mongo DB", "Flask", "Streamlit", "Git"],
    ["Figma", "Adobe Illustrator", "MS Office"]
  ]

  let [skillList, setSkillList] = useState(skillSet[0]);

  let [activeTab, setActiveTab] = useState([1,0,0]);

  const skillChange = (tab) => {
    let active = [0,0,0];
    active[tab] = 1;
    setSkillList(skillSet[tab]);
    setActiveTab(active);
  }

  return (
    <>
      <div className="skillPage">
        <div className="circle">
          <div className="outerCir">
            <OrbitingCircles iconSize={40} duration={10} radius={120}>
              <img
                src="https://cdn.simpleicons.org/javascript/javascript"
                alt=""
              />
              <img src="https://cdn.simpleicons.org/css3" alt="" />
              <img src="https://cdn.simpleicons.org/python" alt="" />
            </OrbitingCircles>
            <div className="innerCir">
              <OrbitingCircles iconSize={50} duration={15} radius={200} reverse>
                <img
                  src="https://cdn.simpleicons.org/nodedotjs/nodedotjs"
                  alt=""
                />
                <img src="https://cdn.simpleicons.org/html5" alt="" />
                <img src="https://cdn.simpleicons.org/react" alt="" />
                <img src="https://cdn.simpleicons.org/git" alt="" />
              </OrbitingCircles>
              <h1 className="skill-heading">Skills</h1>
            </div>
          </div>
        </div>

        {/* skill card */}
        <div className="skill-card">
          <ul>
            {skillList.map((el, index) => (
              <li key={index}>
                <TextAnimate
                  animation="blurIn"
                  by="word"
                  className="list-item"
                  delay={index * 0.2}
                >
                  {el}
                </TextAnimate>
              </li>
            ))}
          </ul>
        </div>

        {/* Skills tab */}
        <div className="skill-tabs">
          <h1 style={{ fontWeight: (activeTab[0])? 900 : 200 }} onClick={() => skillChange(0)}>Programming Language</h1>
          <h1 style={{ fontWeight: (activeTab[1])? 900 : 200 }} onClick={() => skillChange(1)}>Technologies/Frameworks</h1>
          <h1 style={{ fontWeight: (activeTab[2])? 900 : 200 }} onClick={() => skillChange(2)}>Softwares</h1>
        </div>
      </div>
    </>
  );
}

export default SkillSection;
