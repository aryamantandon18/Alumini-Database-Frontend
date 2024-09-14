// src/Page-Components/Networking-Opportunities/JobsSection.jsx
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import SearchBar from './SearchBar';
import dashboardImage from './Dashboard.jpg'; 
import { SearchContext } from '../../Context/SearchContext';
import NewsCard from './NewsCard';

const MoreNews = () => {
    const newsData = useSelector((state) => state.news.newsData);
    const {searchTerm} = useContext(SearchContext)
    const filteredNewsData = newsData.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

  return (
    <div className="py-20">
      {/* Dashboard Section */}
      <header
        className="py-10 h-max w-full relative mt-2"
        style={{
          backgroundImage: `url(${dashboardImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" style={{ zIndex: 0 }}></div>
        <div className="container mx-auto text-center mb-40 mt-10 px-4 sm:px-6 lg:px-8 relative rounded" style={{ zIndex: 1 }}>
          <h1 className="text-4xl text-gray-200 sm:text-4xl md:text-5xl font-bold">
          News Network
          </h1>
          <p className="text-gray-200 mt-2 text-sm sm:text-base md:text-lg">
          Latest updates and success stories from Abhigyan alumni network
          </p>
        </div>
      </header>
      
      {/* Available Jobs Section */}
      <div className="bg-[#518DAF] mt-10 rounded-3xl p-3 overflow-hidden w-1/2 sm:w-1/2 md:w-1/4 h-auto mx-auto">
        <h2 className="text-2xl text-white text-center">Latest News</h2>
      </div>
      
      {/* Search Bar */}
      <div className="mt-10 mb-8 lg:mx-40 md:mx-20 sm:mx-10 mx-10">
        <SearchBar />
      </div>
      
      {/* Job Cards Section */}
      <div className="grid  md:grid-rows-auto lg:grid-cols-2 sm:grid-rows-auto gap-8 mt-10 mb-8 lg:mx-40 md:mx-20 sm:mx-10 mx-10">
        
          {filteredNewsData.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        
      </div>
    </div>
  );
};

export default MoreNews;
