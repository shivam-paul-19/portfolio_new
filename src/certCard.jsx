import "./cert.css";
import { IoIosArrowForward } from "react-icons/io";

function CertCard({ image, title, platform, link }) {
  return (
    <div className="cert-card">
      <div className="cert-card-in">
      <img
        src={image}
        alt=""
        style={{
          height: "100px",
          marginRight: "15px",
          borderRadius: "10px",
        }}
      />
      <div>
        <p
          style={{
            fontWeight: "700",
            fontSize: "25px",
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontStyle: "italic",
            fontSize: "15px",
          }}
        >
          {platform}
        </p>
      </div>
      </div>
      <div>
        <a href={link} target="blank">
        <IoIosArrowForward style={{
          fontSize: "20px"
        }} />
        </a>
      </div>
    </div>
  );
}

export default CertCard;