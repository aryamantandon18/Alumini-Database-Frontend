import  { useContext } from 'react';
import { useSelector } from 'react-redux';
import NewsCard from './NewsCard';
import SearchBar from './SearchBar';
import { SearchContext } from '../../Context/SearchContext';
import { Link } from 'react-router-dom'; 


const NewsSection = () => {
  const newsData = useSelector((state) => state.news.newsData);
  const {searchTerm} = useContext(SearchContext)
  const filteredNewsData = newsData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="container mx-auto mt-8 mb-10">
      <div className="bg-[#518DAF] mt-10 rounded-3xl p-3 overflow-hidden w-1/2 sm:w-1/2 md:w-1/4 h-auto mx-auto">
        <h2 className="text-2xl text-white text-center">Latest News</h2>
      </div>

      <div className="mt-10 mb-8 lg:mx-40 md:mx-20 sm:mx-10 mx-10">
        <SearchBar />
      </div>

      <div className="space-y-6 lg:mx-40 md:mx-20 sm:mx-10 mx-10">
        {filteredNewsData.map((item) => (
          <NewsCard key={item.id} {...item} />
        ))}
      </div>
      <Link  
        to = '/MoreNews'
      >
        
        <div className="bg-gray-100 mt-10 hover:bg-gray-300 rounded-3xl p-3 w-full sm:w-1/3 md:w-1/4 lg:w-1/5 h-auto mx-auto flex justify-center">
          <button type="button" className="text-2xl text-gray-700">
            View More
          </button>
        </div>
      </Link>
      
    </section>
  );
};

export default NewsSection;