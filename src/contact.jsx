import "./contact.css";
import { IoCall } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import {
  SiGmail,
  SiLinkedin,
  SiInstagram,
  SiLeetcode,
  SiGithub,
  SiMedium,
} from "react-icons/si";
import Grid from "@mui/material/Grid";

function Contact() {
  return (
    <>
      <div className="contact-area">
        <div className="head">
          <p>How can you reach me?</p>
          <FaSearch className="search-icon"/>
        </div>
        <br />
        <Grid container spacing={1} className="contact-box">
          <Grid size={3}>
            <div className="contact-link">
              <IoCall className="icon" />
              &nbsp; &nbsp; 
              <p>+91 9773903130</p>
            </div>
          </Grid>
          <Grid size={3}>
              <a href="">
            <div className="contact-link">
              <SiGmail className="icon" />
              &nbsp;
                <p>shivampaul2319@gmail.com</p>
            </div>
                </a>
          </Grid>
          <Grid size={3}>
              <a href="https://www.linkedin.com/in/shivam-paul-545790281/" target="blank">
            <div className="contact-link">
              <SiLinkedin className="icon" />
              &nbsp; &nbsp;
                <p>LinkedIn</p>
            </div>
                </a>
          </Grid>
          <Grid size={3}>
              <a href="https://leetcode.com/u/shivampaul23/" target="blank">
            <div className="contact-link">
              <SiLeetcode className="icon" />
              &nbsp; &nbsp;
                <p>Leetcode</p>
            </div>
                </a>
          </Grid>
          <Grid size={3}>
              <a href="https://github.com/shivam-paul-19" target="blank">
            <div className="contact-link">
              <SiGithub className="icon" />
              &nbsp; &nbsp;
                <p>GitHub</p>
            </div>
                </a>
          </Grid>
          <Grid size={3}>
              <a href="https://medium.com/@shivampaul2319" target="blank">
            <div className="contact-link">
              <SiMedium className="icon" />
              &nbsp; &nbsp;
                <p>Medium</p>
            </div>
                </a>
          </Grid>
          <Grid size={3}>
              <a href="https://www.instagram.com/shivampaul_2319/" target="blank">
            <div className="contact-link">
              <SiInstagram className="icon" />
              &nbsp; &nbsp;
                <p>Instagram</p>
            </div>
                </a>
          </Grid>
        </Grid>
      </div>
      <div className="endingGrad"></div>
    </>
  );
}

export default Contact;