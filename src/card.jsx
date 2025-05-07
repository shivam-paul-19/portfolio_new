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
          sx={{ height: 140 }}
          image="https://media.istockphoto.com/id/510322864/photo/red-sunset.jpg?s=612x612&w=0&k=20&c=XSMKCBQTgVfllBHRMcEVTypBsPJBxROb0fgcZxUuSjE="
        />
        <CardContent>
          <h1 style={title_style}>{title}</h1>
          <p style={para_style}>{desc}</p>
        </CardContent>
        <CardActions>
          <a href="">
            <Button size="small" variant="outlined" sx={{ color: "white" }}>
              {github}
            </Button>
          </a>
          <a href="">
            <Button
              size="small"
              variant="contained"
              sx={{ backgroundColor: "#00F5D4", color: "black" }}
            >
              {link}
            </Button>
          </a>
        </CardActions>
      </Card>
    </>
  );
}

export default ProjectCard;