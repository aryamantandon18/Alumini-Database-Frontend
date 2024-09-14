
import { Link } from "react-router-dom";

function Card({ image, title, date, location, link }) {
  return (
    <div className="event-card">
      <img src={image} alt="Event" className="event-image" />
      <h3>{title}</h3>
      <p>Date: {date}</p>
      <p>Location: {location}</p>
      <Link to="/Networking_Opportunities/RegisterPage" className="register-button">
        Register Now
      </Link>
    </div>
  );
}

export default Card;
