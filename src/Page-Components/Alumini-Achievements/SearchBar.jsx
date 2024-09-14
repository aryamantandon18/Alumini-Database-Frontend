import FilterButton from "./FilterButton";
import { BiSearch } from "react-icons/bi";
import { SearchContext } from '../../Context/SearchContext';
import { useContext } from "react";

const SearchBar = () => {
  const {searchTerm , setSearchTerm} = useContext(SearchContext)
  const handleSearchChange = (e) =>{
    setSearchTerm(e.target.value)
}
  return (
    <div className="flex w-full py-5 space-x-5">
      <div className="flex ml-auto justify-center rounded-xl bg-rose-200">
        <input
          autoFocus
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search here"
          className="bg-rose-200 rounded-s-xl flex-grow px-5 outline-none"
        />
        <button className="ml-2 p-2 bg-rose-200 hover:bg-pink-400 text-white rounded-e-xl flex items-center justify-center">
          <BiSearch className="w-4 h-4" />
          {/* <img src='src/assets/search-interface-symbol.png' alt="search" className="w-4 h-4" /> */}
        </button>
      </div>
      <div>
        <FilterButton />
      </div>
    </div>
  );
};
export default SearchBar;
