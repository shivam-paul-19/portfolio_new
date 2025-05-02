import { TypingAnimation } from "@/components/magicui/typing-animation";
import "./herosection.css"

function HeroSection() {
    return (
        <>
            <div className="heroPage">
                <TypingAnimation className="name">&lt; Shivam Paul /&gt;</TypingAnimation>
                <p className="about">Passionate coder with proficiency in DSA and MERN Stack.</p>
                <br /><br />
                <a href="https://drive.google.com/file/d/1yb72JS7fI4A3HWKUDK9Ijbiy69qWZKBv/view?usp=sharing" target="_blank"><button className="but">My resume</button></a>
            </div>
        </>
    )
}

export default HeroSection;