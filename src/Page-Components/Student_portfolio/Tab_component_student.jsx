import  { useState } from "react";
import "./Tab_component_student.css";

const TabComponentStudent = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [batch, setBatch] = useState("");
  const [branch, setBranch] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [github, setGithub] = useState("");

  const [workExperience, setWorkExperience] = useState([
    { title: "", company: "", location: "", duration: "" }
  ]);

  const [awards, setAwards] = useState([{ title: "", details: "" }]);
  const [certificates, setCertificates] = useState([{ title: "", details: "" }]);
  const [projects, setProjects] = useState([
    { title: "", description: "", deployedLink: "", githubLink: "" }
  ]);

  const handleContactChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9+]/g, "");
    setContact(numericValue);
  };

  const handleWorkExperienceChange = (index, field, value) => {
    const newWorkExperience = [...workExperience];
    newWorkExperience[index][field] = value;
    setWorkExperience(newWorkExperience);
  };

  const handleAwardChange = (index, field, value) => {
    const newAwards = [...awards];
    newAwards[index][field] = value;
    setAwards(newAwards);
  };

  const handleCertificateChange = (index, field, value) => {
    const newCertificates = [...certificates];
    newCertificates[index][field] = value;
    setCertificates(newCertificates);
  };

  const handleProjectChange = (index, field, value) => {
    const newProjects = [...projects];
    newProjects[index][field] = value;
    setProjects(newProjects);
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

            <div className="form-group">
              <label>LinkedIn</label>
              <input
                type="text"
                placeholder="Enter your LinkedIn Id"
                value={linkedIn}
                onChange={(e) => setLinkedIn(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Github</label>
              <input
                type="text"
                placeholder="Enter your Github Id"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
              />
            </div>
          </div>
        );
      case "Work Experience":
        return (
          <div className="content mt-28">
            <div className="work-experience-section">
              {workExperience.map((experience, index) => (
                <div key={index} className="form-row">
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      placeholder="Title"
                      value={experience.title}
                      onChange={(e) =>
                        handleWorkExperienceChange(index, "title", e.target.value)
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Company name</label>
                    <input
                      type="text"
                      placeholder="Enter company name"
                      value={experience.company}
                      onChange={(e) =>
                        handleWorkExperienceChange(index, "company", e.target.value)
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Location</label>
                    <input
                      type="text"
                      placeholder="Location"
                      value={experience.location}
                      onChange={(e) =>
                        handleWorkExperienceChange(index, "location", e.target.value)
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Duration</label>
                    <input
                      type="number"
                      placeholder="Duration"
                      value={experience.duration}
                      onChange={(e) =>
                        handleWorkExperienceChange(index, "duration", e.target.value)
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "achievements":
        return (
          <div className="content mt-28">
            <div className="achievement-section">
              <h3>Awards</h3>
              {awards.map((award, index) => (
                <div key={index} className="form-row">
                  <div className="form-group">
                    <label>Award Title</label>
                    <input
                      type="text"
                      placeholder="Title"
                      value={award.title}
                      onChange={(e) =>
                        handleAwardChange(index, "title", e.target.value)
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Details</label>
                    <input
                      type="text"
                      placeholder="Describe it"
                      value={award.details}
                      onChange={(e) =>
                        handleAwardChange(index, "details", e.target.value)
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="achievement-section">
              <h3>Certificates</h3>
              {certificates.map((certificate, index) => (
                <div key={index} className="form-row">
                  <div className="form-group">
                    <label>Certificate Title</label>
                    <input
                      type="text"
                      placeholder="Title"
                      value={certificate.title}
                      onChange={(e) =>
                        handleCertificateChange(index, "title", e.target.value)
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Details</label>
                    <input
                      type="text"
                      placeholder="Describe it"
                      value={certificate.details}
                      onChange={(e) =>
                        handleCertificateChange(index, "details", e.target.value)
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "projects":
        return (
          <div className="content mt-28">
            <div className="project-section">
              {projects.map((project, index) => (
                <div key={index} className="form-row">
                  <div className="form-group">
                    <label>Project Title</label>
                    <input
                      type="text"
                      placeholder="Title"
                      value={project.title}
                      onChange={(e) =>
                        handleProjectChange(index, "title", e.target.value)
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <input
                      type="text"
                      placeholder="Description"
                      value={project.description}
                      onChange={(e) =>
                        handleProjectChange(index, "description", e.target.value)
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Deployed Link</label>
                    <input
                      type="text"
                      placeholder="Deployed Link"
                      value={project.deployedLink}
                      onChange={(e) =>
                        handleProjectChange(index, "deployedLink", e.target.value)
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Github Link</label>
                    <input
                      type="text"
                      placeholder="Github Link"
                      value={project.githubLink}
                      onChange={(e) =>
                        handleProjectChange(index, "githubLink", e.target.value)
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="tab-container">
      <div className="profile">
        <img className="profile-img" src="https://via.placeholder.com/150" alt="Profile" />
        <h3>John Doe</h3>
        <p>Software Engineer</p>
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
            className={`tab ${activeTab === "Work Experience" ? "active" : ""}`}
            onClick={() => setActiveTab("Work Experience")}
          >
            Work Experience
          </div>
          <div
            className={`tab ${activeTab === "achievements" ? "active" : ""}`}
            onClick={() => setActiveTab("achievements")}
          >
            Achievements
          </div>
          <div
            className={`tab ${activeTab === "projects" ? "active" : ""}`}
            onClick={() => setActiveTab("projects")}
          >
            Projects
          </div>
        </div>
        <div className="content-container">{renderContent()}</div>
      </div>
    </div>
  );
};

export default TabComponentStudent;