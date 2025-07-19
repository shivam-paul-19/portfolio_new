import { TypingAnimation } from "@/components/magicui/typing-animation";
import { TextAnimate } from "@/components/magicui/text-animate";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

import "./herosection.css";

function HeroSection() {
  return (
    <>
      <div className="heroPage">
        <NeonGradientCard
          className="photo-area"
          borderRadius={40}
          neonColors={{
            firstColor: "#00F5D4",
            secondColor: "#FF00AA",
          }}
        >
          <div className="photo-area-inner"></div>
        </NeonGradientCard>
        <div className="text-area">
          <TypingAnimation className="name">
            &lt; Shivam Paul /&gt;
          </TypingAnimation>
          <br />
          <TextAnimate
            animation="blurIn"
            by="word"
            className="about"
            delay={0.5}
          >
            Welcome to the world of a coder who writes code like stories, and
            stories like code. Driven by ambition and curiosity, building
            projects and learning to be better than what I was yesterday.
          </TextAnimate>
          <br />
          <br />
          <div className="but-area">
            <a
              href="https://drive.google.com/file/d/1y2sPhUp-4NE4zgyHSvx70n8bgxvzO3Tz/view?usp=sharing"
              target="_blank"
            >
              <button className="but">My resume</button>
            </a>
            <button
              className="but"
              style={{ backgroundColor: "white" }}
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;