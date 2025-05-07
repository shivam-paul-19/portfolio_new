import "./projects.css";
import ProjectCard from "./card";
import Grid from "@mui/material/Grid";

function Projects() {
  return (
    <>
      <div className="projects-area">
        <Grid container spacing={2} className="contact-box">
          <Grid size={3}>
            <ProjectCard
              title="Lizard"
              desc="Lizards are a widespread group of squamate reptiles, with over
          6,000 species, ranging across all continents except Antarctica"
              github="Github Repository"
              link="Deployed Link"
            />
          </Grid>
          <Grid size={3}>
            <ProjectCard
              title="Lizard"
              desc="Lizards are a widespread group of squamate reptiles, with over
          6,000 species, ranging across all continents except Antarctica"
              github="Github Repository"
              link="Deployed Link"
            />
          </Grid>
          <Grid size={3}>
            <ProjectCard
              title="Lizard"
              desc="Lizards are a widespread group of squamate reptiles, with over
          6,000 species, ranging across all continents except Antarctica"
              github="Github Repository"
              link="Deployed Link"
            />
          </Grid>
          <Grid size={3}>
            <ProjectCard
              title="Lizard"
              desc="Lizards are a widespread group of squamate reptiles, with over
          6,000 species, ranging across all continents except Antarctica"
              github="Github Repository"
              link="Deployed Link"
            />
          </Grid>
          <Grid size={3}>
            <ProjectCard
              title="Lizard"
              desc="Lizards are a widespread group of squamate reptiles, with over
          6,000 species, ranging across all continents except Antarctica"
              github="Github Repository"
              link="Deployed Link"
            />
          </Grid>
          <Grid size={3}>
            <ProjectCard
              title="Lizard"
              desc="Lizards are a widespread group of squamate reptiles, with over
          6,000 species, ranging across all continents except Antarctica"
              github="Github Repository"
              link="Deployed Link"
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Projects;