import React from 'react';

import NewsDashboard from "../Page-Components/News-Components/NewsDashboard"

import NewsSection from "../Page-Components/News-Components/NewsSection"
import { SearchContext } from '../Context/SearchContext';
import { SearchContextProvider } from '../Context/SearchContextProvider';

function News(){
    return(
        <div>
            <NewsDashboard/>
            <SearchContextProvider>
                <NewsSection />
            </SearchContextProvider>
           
  
        </div>
    )
}
export default News
