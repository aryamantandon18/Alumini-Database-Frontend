import { useContext } from 'react';
import { SearchContext } from '../../Context/SearchContext';

const SearchBar = () => {
    const { searchTerm, setSearchTerm } = useContext(SearchContext);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="flex flex-wrap w-full">
            <div className="flex ml-auto justify-center rounded-xl bg-rose-200 sm:w-1/2 md:w-1/2 lg:w-1/3">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search here"
                    className="bg-rose-200 rounded-l-xl flex-grow px-5 py-2"
                />
                <button className="p-2 bg-rose-200 hover:bg-gray-200 text-white rounded-r-xl flex items-center justify-center">
                    <img src="src/assets/search.jpg" alt="search" className="w-8 h-8" />
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
