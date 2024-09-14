import JobCard from "../Networking-Opportunities/JobCard";
import ImageList from "./CustomImageList";
import NewsCard from "../News-Components/NewsCard";
import AchievementList from "./AchievmentList";
import { useLocation, Link } from "react-router-dom";
import JobCarousel from "./JobCarousel";
import { useSelector } from 'react-redux';
import { selectJobBoardJobs } from '../../features/jobsSlice';

function Overview() {
   

    const jobs = useSelector(selectJobBoardJobs);

    const newsData = useSelector((state) => state.news.newsData.slice(0,2));


    return (
        <div className="container mx-auto p-4 grid grid-cols-5 gap-6 mb-12">

            <div className="px-5 bg-white col-span-5 rounded-lg ">
                <h1 className="text-2xl font-bold mt-10 mb-4">News and Events</h1>
                <div className="grid gap-6 md:grid-rows-auto lg:grid-cols-2 sm:grid-rows-auto">
                {newsData.map((item, index) => (
                    <NewsCard key={index} {...item} />
                ))}
                </div>
            </div>

            <div className="p-5 bg-white rounded-lg lg:col-span-2 md:col-span-2 sm:col-span-5 col-span-5 mb-10">
                <h1 className="text-2xl font-bold mt-10 mb-4">Jobs</h1>
                <div className="">
                <JobCarousel jobs={jobs} />
                </div>
            </div>
 
            <div className="p-5 bg-white rounded-lg mt-10 mb-10 lg:col-span-3 md:col-span-3 sm:col-span-5 col-span-5  col-span-4">
                <h1 className="text-2xl font-bold mb-4">Achievements</h1>
                <AchievementList/>
            </div> 




            

            <div className="p-5 bg-white col-span-4 colrounded-lg col-span-5 text-center">
            
                <Link 
                    to="/Contact"
                    className="m-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                    Contact Us
                </Link>
                <Link 
                    to = "/About"
                    className="m-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 ">
                    About Us
                </Link>
            </div>
            
        </div>
    );
}

export default Overview;
