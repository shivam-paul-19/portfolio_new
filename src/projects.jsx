import ProjectCard from "./card";
import Grid from "@mui/material/Grid";
import desxCover from "./assets/desx-cover.png";
import quizleCover from "./assets/quizle-cover.png";
import atmosCover from "./assets/atmos-cover.png";
import gemchatCover from "./assets/gemchat-cover.png";
import bookverseCover from "./assets/bookverse-cover.png";
import codebuddyCover from "./assets/codebuddy-cover.png";
import cricketCover from "./assets/cricket-cover.png";
import { LineShadowText } from "@/components/magicui/line-shadow-text";

import "./project.css";

function Projects() {
  return (
    <>
      <div className="projects-area">
        <LineShadowText shadowColor="white" className="project-head">Projects</LineShadowText><br />
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ProjectCard
              title="Quizle"
              desc="Quizle is a fun web app to play quizzes on Science, Cricket, Bollywood, and Programming—random mode included for more challenges."
              github="https://github.com/shivam-paul-19/quizle"
              link="https://shivam-paul-19.github.io/quizle/"
              image={quizleCover}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ProjectCard
              title="Atmos"
              desc="Atmos is a weather app made in React framework showing real-time conditions and 5-day forecasts using the OpenWeather API."
              github="https://github.com/shivam-paul-19/Atmos"
              link="https://atmos-delta.vercel.app"
              image={atmosCover}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ProjectCard
              title="Gem Chat"
              desc="GemChat is a React-based AI chatbot that uses Google Gemini API to deliver smart, prompt responses which are given in real time."
              github="https://github.com/shivam-paul-19/gemchat"
              link="https://gemchat-alpha.vercel.app/"
              image={gemchatCover}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ProjectCard
              title="DesX"
              desc="DesX is a MERN stack based canvas web app for creating, saving, and downloading creative illustrations using Fabric.js."
              github="https://github.com/shivam-paul-19/desx"
              link="https://desx.onrender.com"
              image={desxCover}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ProjectCard
              title="Cricket analyzer"
              desc="An interactive app made with Streamlit to analyze cricket players’ stats with graphs, format filters, and performance breakdowns."
              github="https://github.com/shivam-paul-19/cricket-player-analyzer"
              link="https://cricket-player-analyzer.streamlit.app"
              image={cricketCover}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ProjectCard
              title="Code Buddy"
              desc="A smart AI tool that explains DSA questions, provides code, dry run, and complexity, or copy the solutioon in 1 click! — just from a question link."
              github="https://github.com/shivam-paul-19/codebuddy"
              link="https://codebuddy-bf7i.onrender.com/"
              image={codebuddyCover}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ProjectCard
              title="BookVerse"
              desc="BookVerse is an AI-powered book recommendation tool suggesting top-rated reads using user preferences and similarity-based filtering."
              github="https://github.com/shivam-paul-19/Book-Recommendation-System"
              link="https://bookverse-yqux.onrender.com/"
              image={bookverseCover}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Projects;