import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

function ProjectCard({ title, desc, github, link, image }) {
  let card_style = {
    maxWidth: 345,
    backgroundColor: "black",
    color: "white",
    
  };

  let title_style = {
    fontSize: "30px",
    fontWeight: 700,
    fontFamily: "Montserrat",
  };

  let para_style = {
    fontSize: "15px",
    fontFamily: "Montserrat",
  };

  return (
    <>
      <Card sx={card_style}>
        <CardMedia
          sx={{ height: 140, border: ".5px solid white" }}
          image={image}
        />
        <CardContent>
          <h1 style={title_style}>{title}</h1>
          <p style={para_style}>{desc}</p>
        </CardContent>
        <CardActions>
          <a href={github} target="blank">
            <Button
              size="small"
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                "&:hover": {
                  backgroundColor: "#333",
                  cursor: "none",
                },
              }}
            >
              github Repository
            </Button>
          </a>
          <a href={link} target="blank">
            <Button
              size="small"
              variant="contained"
              sx={{
                backgroundColor: "#00F5D4",
                color: "black",
                "&:hover": {
                  cursor: "none",
                },
              }}
            >
              Deployed link
            </Button>
          </a>
        </CardActions>
      </Card>
    </>
  );
}

export default ProjectCard;