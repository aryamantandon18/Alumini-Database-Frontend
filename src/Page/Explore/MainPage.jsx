import React from 'react';
import './MainPage.css';
import Card from './Card';

const MainPage = () => {
  return (
    <div className="container-main">
      <header className="header11">
        <h1 className="title-main">
          EXPLORE OUR '<span className="highlight11">ABHIGYAN</span>'ALUMNI NETWORK
        </h1>
        <p className="subtitle11">
          Effortlessly navigate through all sections to connect, engage, and stay updated.
        </p>
      </header>
      <div className="card-grid">
        <Card 
          title="NEWS NETWORK" 
          description="The Alumni News Network provides the latest updates and highlights from our alumni community, showcasing their achievements and contributions." 
          image="/explore_alumni.jpg" 
        />
        <Card 
          title="ALUMNI NETWORKING & MENTORSHIP" 
          description="Join events, reunions, and mentorship programs to expand your professional network and connect with fellow alumni." 
          image="/explore_event.jpg" 
        />
        <Card 
          title="ACHIEVEMENTS" 
          description="Celebrate the success of our alumni by browsing through their notable achievements and milestones in various fields." 
          image="/explore_news.jpg" 
        />
        <Card 
          title="ALUMNI DIRECTORY" 
          description="The Alumni Directory provides a comprehensive, searchable list of graduates, allowing you to easily reconnect and network." 
          image="/explore_event.jpg" 
        />
        <Card 
          title="ALUMNI NETWORKING & MENTORSHIP" 
          description="Join events, reunions, and mentorship programs to expand your professional network and connect with fellow alumni." 
          image="/explore_event.jpg" 
        />
        <Card 
          title="ALUMNI NETWORKING & MENTORSHIP" 
          description="Join events, reunions, and mentorship programs to expand your professional network and connect with fellow alumni." 
          image="/explore_event.jpg" 
        />
      </div>
    </div>
  );
};

export default MainPage;
