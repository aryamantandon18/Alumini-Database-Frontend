import React, { useState } from "react";
import "./TabComponent.css";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [batch, setBatch] = useState("");
  const [branch, setBranch] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");

  const [college, setCollege] = useState("");
  const [degree, setDegree] = useState("");
  const [major, setMajor] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [gpa, setGpa] = useState("");
  const [projects, setProjects] = useState("");

  const [currentJobTitle, setCurrentJobTitle] = useState("");
  const [currentCompanyName, setCurrentCompanyName] = useState("");
  const [currentDuration, setCurrentDuration] = useState("");
  const [currentResponsibilities, setCurrentResponsibilities] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");

  const [previousJobTitle, setPreviousJobTitle] = useState("");
  const [previousCompanyName, setPreviousCompanyName] = useState("");
  const [previousDuration, setPreviousDuration] = useState("");
  const [previousResponsibilities, setPreviousResponsibilities] = useState("");
  const [previousLocation, setPreviousLocation] = useState("");

  const [awardTitle, setAwardTitle] = useState("");
  const [awardDetails, setAwardDetails] = useState("");
  const [certificateTitle, setCertificateTitle] = useState("");
  const [certificateDetails, setCertificateDetails] = useState("");

  const handleContactChange = (e) => {
    const value = e.target.value;

    const numericValue = value.replace(/[^0-9+]/g, "");
    setContact(numericValue);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "personal":
        return (
          <div className="content mt-28">
            <div className="form-group">
              <label>Full name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input
                type="date"
                placeholder="Enter your dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <input
                type="text"
                placeholder="Enter your Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Batch</label>
              <input
                type="number"
                placeholder="Enter your batch"
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Branch</label>
              <input
                type="text"
                placeholder="Enter your branch"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Contact</label>
              <input
                type="tel"
                placeholder="+91 989809XXXX"
                value={contact}
                onChange={handleContactChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Current Address</label>
              <input
                type="text"
                placeholder="Enter your address"
                value={currentAddress}
                onChange={(e) => setCurrentAddress(e.target.value)}
              />
            </div>
          </div>
        );
      case "educational":
        return (
          <div className="content mt-28">
            <div className="form-group">
              <label>College</label>
              <input
                type="text"
                placeholder="College name"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Degree</label>
              <input
                type="text"
                placeholder="Degree type"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Major/Field Of Study</label>
              <input
                type="text"
                placeholder="Major/Field"
                value={major}
                onChange={(e) => setMajor(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Graduation Year</label>
              <input
                type="number"
                placeholder="Year of graduation"
                value={graduationYear}
                onChange={(e) => setGraduationYear(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>GPA</label>
              <input
                type="number"
                placeholder="Your GPA"
                value={gpa}
                onChange={(e) => setGpa(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Relevant Projects or Research</label>
              <input
                type="text"
                placeholder="Your projects"
                value={projects}
                onChange={(e) => setProjects(e.target.value)}
              />
            </div>
          </div>
        );
      case "professional":
        return (
          <div className="content mt-28">
            <div className="employment-section">
              <h3>Current Employment</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Job Title</label>
                  <input
                    type="text"
                    placeholder="Your job"
                    value={currentJobTitle}
                    onChange={(e) => setCurrentJobTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Company Name</label>
                  <input
                    type="text"
                    placeholder="Company name"
                    value={currentCompanyName}
                    onChange={(e) => setCurrentCompanyName(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Duration of Employment</label>
                  <input
                    type="text"
                    placeholder="Duration"
                    value={currentDuration}
                    onChange={(e) => setCurrentDuration(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Responsibilities and Achievements</label>
                  <input
                    type="text"
                    placeholder="Responsibilities"
                    value={currentResponsibilities}
                    onChange={(e) => setCurrentResponsibilities(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Company Location</label>
                <input
                  type="text"
                  placeholder="Location"
                  value={currentLocation}
                  onChange={(e) => setCurrentLocation(e.target.value)}
                />
              </div>
            </div>
            <div className="employment-section">
              <h3>Previous Employment</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Job Title</label>
                  <input
                    type="text"
                    placeholder="Job title"
                    value={previousJobTitle}
                    onChange={(e) => setPreviousJobTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Company Name</label>
                  <input
                    type="text"
                    placeholder="Company name"
                    value={previousCompanyName}
                    onChange={(e) => setPreviousCompanyName(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Duration of Employment</label>
                  <input
                    type="text"
                    placeholder="Duration"
                    value={previousDuration}
                    onChange={(e) => setPreviousDuration(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Responsibilities and Achievements</label>
                  <input
                    type="text"
                    placeholder="Responsibilities"
                    value={previousResponsibilities}
                    onChange={(e) =>
                      setPreviousResponsibilities(e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Company Location</label>
                <input
                  type="text"
                  placeholder="Location"
                  value={previousLocation}
                  onChange={(e) => setPreviousLocation(e.target.value)}
                />
              </div>
            </div>
          </div>
        );
      case "achievements":
        return (
          <div className="content mt-28">
            <div className="achievement-section">
              <h3>Awards</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Award Title</label>
                  <input
                    type="text"
                    placeholder="Title"
                    value={awardTitle}
                    onChange={(e) => setAwardTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Details</label>
                  <input
                    type="text"
                    placeholder="Describe it"
                    value={awardDetails}
                    onChange={(e) => setAwardDetails(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="achievement-section">
              <h3>Certificates</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Certificate Title</label>
                  <input
                    type="text"
                    placeholder="Title"
                    value={certificateTitle}
                    onChange={(e) => setCertificateTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Details</label>
                  <input
                    type="text"
                    placeholder="Describe it"
                    value={certificateDetails}
                    onChange={(e) => setCertificateDetails(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="maindiv mt-28">
      <h1>Meet our Distinguished Alumni</h1>
      <div className="tab-container">
        <div className="profile">
          <img src="profileimage.jpg" alt="Profile" className="profile-img" />
          <h3>Tanmay Gupta</h3>
          <p>Enroll No. 123456789xxx</p>
        </div>
        <div className="content-wrapper">
          <div className="tabs">
            <div
              className={`tab ${activeTab === "personal" ? "active" : ""}`}
              onClick={() => setActiveTab("personal")}
            >
              Personal Information
            </div>
            <div
              className={`tab ${activeTab === "educational" ? "active" : ""}`}
              onClick={() => setActiveTab("educational")}
            >
              Educational Background
            </div>
            <div
              className={`tab ${activeTab === "professional" ? "active" : ""}`}
              onClick={() => setActiveTab("professional")}
            >
              Professional Information
            </div>
            <div
              className={`tab ${activeTab === "achievements" ? "active" : ""}`}
              onClick={() => setActiveTab("achievements")}
            >
              Achievements
            </div>
          </div>
          <div className="content-container">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default TabComponent;
