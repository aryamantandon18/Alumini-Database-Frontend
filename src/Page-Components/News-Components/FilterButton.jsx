import React from 'react';

const FilterButton = () => {
  return (
    <button 
      className="p-2  hover:bg-rose-200 text-white rounded-lg">
        <img src='src/assets/filter.png' className='h-5 w-5'></img>
    </button>
  );
};

export default FilterButton;
