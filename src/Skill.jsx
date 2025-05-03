import "./skills.css";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { useState } from "react";
import { TextAnimate } from "@/components/magicui/text-animate";

function SkillSection() {
  let [skillList, setSkillList] = useState([
    "Python",
    "Java",
    "C++",
    "C",
    "JavaScript",
    "TypeScript",
    "PHP",
  ]);

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
              <img src="https://cdn.simpleicons.org/css3/css3" alt="" />
              <img src="https://cdn.simpleicons.org/python/python" alt="" />
            </OrbitingCircles>
            <div className="innerCir">
              <OrbitingCircles iconSize={50} duration={15} radius={200} reverse>
                <img
                  src="https://cdn.simpleicons.org/nodedotjs/nodedotjs"
                  alt=""
                />
                <img src="https://cdn.simpleicons.org/html5/html5" alt="" />
                <img src="https://cdn.simpleicons.org/react/react" alt="" />
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
                  delay={index * 0.25}
                >
                  {el}
                </TextAnimate>
              </li>
            ))}
          </ul>
        </div>

        <div className="skill-tabs">
          <h1 style={{ fontWeight: 900 }}>Programming Language</h1>
          <h1>Technologies/Frameworks</h1>
          <h1>Softwares</h1>
        </div>
      </div>
    </>
  );
}

export default SkillSection;
