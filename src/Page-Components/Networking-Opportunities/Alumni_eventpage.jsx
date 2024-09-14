import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchEvents } from "../../features/eventSlice";
import Card from "./Event_card";
import "./test.css";
import defaultImage from "./etouches-post-alimni-events.jpg"; // Corrected import

function Alumni_Eventpage() {
  const dispatch = useDispatch();
  const eventDetails = useSelector((state) => state.event.eventData);
  const status = useSelector((state) => state.event.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchEvents());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div className="min-h-screen flex items-center justify-center bg-gray-100">Loading...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="/eventimage.jpg" alt="Header" className="header-image" />
        <h1>
          UNITE & PROSPER: ALUMNI <span className="highlight">NETWORKING</span>{" "}
          & MENTORSHIP
        </h1>
        <p>
          Explore a vibrant network of alumni connections, mentorship
          opportunities, and career pathways for ongoing professional growth and
          success.
        </p>
      </header>
      <main>
        <section className="events-section">
          <button className="events-button">Events and Reunions</button>
          <div className="events-container">
            {eventDetails.map((event) => (
              <Card
                key={event.EventID}
                image={defaultImage} // Use the default image variable
                title={event.Title}
                date={event.EventDateTime}
                location={event.Location}
                link={event.link}
              />
            ))}
          </div>
          <Link to="/Networking_Opportunities/New_eventpage" className="view-more-link">
            <button className="view-more-button p-4">View More</button>
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Alumni_Eventpage;
