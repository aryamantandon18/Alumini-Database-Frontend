import React, { useContext } from 'react';
import { SearchContext } from '../../Context/SearchContext';

const SearchBar = () => {
  const {searchTerm , setSearchTerm} = useContext(SearchContext)
  const handleSearchChange = (e) =>{
    setSearchTerm(e.target.value)
}

  return (
    <div className="flex justify-center  pt-20 pb-16">
      <div className="flex items-center w-full max-w-xl">
        <input 
          type="text" 
          placeholder="Search interviews..." 
          onChange={handleSearchChange} 
          className="p-3 border border-gray-300 rounded-l w-full text-lg focus:outline-none"
          style={{ maxWidth: 'calc(100% - 3.5rem)' }}  
        />
        <button 
          className=" p-3 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none"
        >
          Search
        </button>
        <button 
          // onClick={handleFilter} 
          className="ml-2 p-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
