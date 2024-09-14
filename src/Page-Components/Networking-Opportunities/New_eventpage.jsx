import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchEvents } from "../../features/eventSlice"; // Corrected import
import Card from "./Event_card";
import SearchBar from "../Alumini-Achievements/SearchBar";
import { SearchContext } from "../../Context/SearchContext";
import defaultImage from "./etouches-post-alimni-events.jpg"; // Corrected import


function New_eventpage() {
  const dispatch = useDispatch();
  const eventDetails = useSelector((state) => state.event.eventData); // Updated selector
  const status = useSelector((state) => state.event.status); // Updated selector
  const { searchTerm } = useContext(SearchContext);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchEvents());
    }
  }, [status, dispatch]);

  const filteredEventDetails = eventDetails.filter((event) =>
    event.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (status === 'loading') {
    return <div className="min-h-screen flex items-center justify-center bg-gray-100">Loading...</div>;
  }

  return (
    <div className="py-12 px-4 md:px-8">
      <header className="App-header mb-8 text-center">
        <img
          src="/eventimage.jpg"
          alt="Header"
          className="header-image mt-8 mb-4"
        />
        <h1>
          CONNECT & GROW: ALUMNI <span className="highlight">EVENTS</span>{" "}
          & MENTORSHIP
        </h1>
        <p className="mb-4">
          Embark on an enriching journey through our vibrant alumni events,
          offering a gateway to reconnect, engage in mentorship opportunities,
          and explore diverse career pathways, fostering ongoing professional
          growth and success.
        </p>
      </header>
      <div className="flex justify-center mt-8 mb-8">
        <SearchBar className="w-full max-w-lg" />
      </div>
      <section className="events-section">
        <button className="events-button text-center">Events and Reunions</button>
        <div className="events-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEventDetails.map((event) => (
            <div key={event.EventID} className="w-full">
              <Link
                to={`/Networking_Opportunities/EventDetailsPage?eventId=${event.EventID}`} // Corrected string interpolation
                className="view-more-link block"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Card
                  image={defaultImage} // Ensure this property exists
                  title={event.Title}
                  date={event.EventDateTime}
                  location={event.Location}
                />
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link to="/Networking_Opportunities/New_eventpage" className="view-more-link">
            <button className="view-more-button bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300">
              View More
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default New_eventpage;