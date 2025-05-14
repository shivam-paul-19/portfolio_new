import "./edu.css";
import TimeLine from "./timeline";
import educationImage from './assets/education.png'

function Education() {
  return (
    <>
      <div className="edu-area">
        <div className="edu-box">
        <img src={educationImage} alt="" className="edu-image" />
        <TimeLine />
        </div>
      </div>
    </>
  );
}

export default Education;