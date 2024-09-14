import { IoFilter } from "react-icons/io5";

const FilterButton = () => {
  return (
    <button className="p-2 bg-rose-200 text-white rounded-lg">
      {/* <img src='src/assets/filter.png' className='h-5 w-5'></img> */}
      <IoFilter className="h-5 w-5" />
    </button>
  );
};

export default FilterButton;
