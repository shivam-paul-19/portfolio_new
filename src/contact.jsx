import "./contact.css";
import { IoCall } from "react-icons/io5";
import {
  SiGmail,
  SiLinkedin,
  SiInstagram,
  SiLeetcode,
  SiGithub,
  SiMedium,
} from "react-icons/si";
import Grid from '@mui/material/Grid';

function Contact() {
  return (
    <>
      <div className="contact-area">
        <h1 className="head">Contact me</h1>
        <br />
      <Grid container spacing={1}>
        <Grid size={3}>
          <div className="contact-link">
            <IoCall className="icon" />
            &nbsp;
            &nbsp;
            +91 9773903130
          </div>
        </Grid>
        <Grid size={3}>

          <div className="contact-link">
            <SiGmail className="icon" />
            &nbsp;
            &nbsp;
            <a href="">shivampaul2319@gmail.com</a>
          </div>
        </Grid>
        <Grid size={3}>

          <div className="contact-link">
            <SiLinkedin className="icon" />
            &nbsp;
            &nbsp;
            <a href="">LinkedIn</a>
          </div>
        </Grid>
        <Grid size={3}>

          <div className="contact-link">
            <SiLeetcode className="icon" />
            &nbsp;
            &nbsp;
            <a href="">Leetcode</a>
          </div>
        </Grid>
        <Grid size={3}>

          <div className="contact-link">
            <SiGithub className="icon" />
            &nbsp;
            &nbsp;
            <a href="">GitHub</a>
          </div>
        </Grid>
        <Grid size={3}>

          <div className="contact-link">
            <SiMedium className="icon" />
            &nbsp;
            &nbsp;
            <a href="">Medium</a>
          </div>
        </Grid>
        <Grid size={3}>

          <div className="contact-link">
            <SiInstagram className="icon" />
            &nbsp;
            &nbsp;
            <a href="">Instagram</a>
          </div>
        </Grid>
      </Grid>
      </div>
    </>
  );
}

export default Contact;
