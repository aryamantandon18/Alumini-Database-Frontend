
import React, { useState , useContext } from "react";
import { useSelector } from "react-redux";
import Dashboard from "./Dashboard";
import SearchBar from "./SearchBar";
import InterviewList from "./InterviewList";
import InterviewDetail from "./InterviewDetail";
import "./InterviewPage.css";
import { SearchContext } from "../../Context/SearchContext";

const InterviewExp = () => {
  const [selectedInterview, setSelectedInterview] = useState(null);
  const {searchTerm} = useContext(SearchContext)
  
 

  // Accessing interviews from Redux store
  const interviews = useSelector((state) => state.interviews.interviews);

  
  const handleInterviewClick = (interview) => {
    setSelectedInterview(interview);
  };

  const handleBackClick = () => {
    setSelectedInterview(null);
  };

  const filteredInterviews = interviews.filter((interview) =>
    interview.JobTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Dashboard />
      <SearchBar />
      {selectedInterview ? (
        <InterviewDetail
          interview={selectedInterview}
          handleBackClick={handleBackClick}
        />
      ) : (
        <InterviewList
          interviews={filteredInterviews}
          handleInterviewClick={handleInterviewClick}
        />
      )}
    </div>
  );
};

export default InterviewExp;