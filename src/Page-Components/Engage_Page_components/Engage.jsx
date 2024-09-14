import React, { useState } from "react";
import "./newtest.css";

function Engage() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Select Service");

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSelectService = (service) => {
    setSelectedService(service);
    setDropdownOpen(false);
  };

  return (
    <div className="mainpage">
      <div className="heading">
        <h1>Alumni Help Desk</h1>
      </div>
      <header className="header_part">
        <img src="/engage.jpg" alt="image" />
        <h2>Manage alumni related queries</h2>
        <p>Your go-to destination for all the alumni related queries</p>
      </header>

      <main className="main_section">
        <p>Please Select the service you would like to avail</p>
        <div className="body_section">
          <p>
            <span>Service Required</span>
            <span style={{ color: "red" }}>*</span>
          </p>
          <div className="drop_down">
            <button className="dropbtn" onClick={toggleDropdown}>
              {selectedService}
              <img src="/down-arrow.png" alt="dropdown arrow" />
            </button>
            {dropdownOpen && (
              <div className="dropdown_content">
                <a href="#" onClick={() => handleSelectService("Select Service")}>
                  Select Service
                </a>
                <a href="#" onClick={() => handleSelectService("Contact")}>
                  Contact
                </a>
                <a href="#" onClick={() => handleSelectService("Campus")}>
                  Campus
                </a>
                <a href="#" onClick={() => handleSelectService("Wish to Recruit")}>
                  Wish to Recruit
                </a>
                <a href="#" onClick={() => handleSelectService("Volunteer")}>
                  Volunteer
                </a>
                <a href="#" onClick={() => handleSelectService("Be a Mentor")}>
                  Be a Mentor
                </a>
                <a
                  href="#"
                  onClick={() => handleSelectService("Requests Transcript")}
                >
                  Requests Transcript
                </a>
              </div>
            )}
            <div className="para">
              <p>From the dropdown please select the service you need</p>
              <div className="newtn">
                <button>Next</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Engage;