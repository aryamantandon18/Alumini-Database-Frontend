import React from "react";
import image2 from "./BPIT-image2.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Typography, Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <Carousel
      className="rounded-xl mt-5 pt-10 md:py-20"
      autoPlay
      interval={3000}
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showIndicators={true}
      swipeable={true}
    >
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[30rem]">
        <img
          src='https://images.shiksha.com/mediadata/images/1512469113phpxVkQNz.png'
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 px-4 text-center">
          <div className="w-full sm:w-3/4 md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl"
            >
              Welcome to the <span className="text-red-600">Abhigyan</span> Alumni Network
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-6 md:mb-8 lg:mb-10 xl:mb-12 opacity-80 text-xs sm:text-sm md:text-lg lg:text-xl"
            >
              Connecting our graduates, showcasing achievements, and facilitating networking opportunities.
            </Typography>
            <div className="flex flex-wrap justify-center gap-2">
              <Button className="px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm md:px-6 md:py-3 md:text-lg" color="orange">
                Join the Alumni Network
              </Button>
              <Link to="/Alumini_directory">
                <Button className="px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm md:px-6 md:py-3 md:text-lg" color="orange">
                  Search Alumni
                </Button>
              </Link>
              <Link to="/Networking_Opportunities/New_eventpage">
                <Button className="px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm md:px-6 md:py-3 md:text-lg" color="orange">
                  View Upcoming Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[30rem]">
        <img
          src={image2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 px-4 text-center">
          <div className="w-full sm:w-3/4 md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl"
            >
              Welcome to the <span className="text-red-600">Abhigyan</span> Alumni Network
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-6 md:mb-8 lg:mb-10 xl:mb-12 opacity-80 text-xs sm:text-sm md:text-lg lg:text-xl"
            >
              Connecting our graduates, showcasing achievements, and facilitating networking opportunities.
            </Typography>
            <div className="flex flex-wrap justify-center gap-2">
              <Button className="px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm md:px-6 md:py-3 md:text-lg" color="orange">
                Join the Alumni Network
              </Button>
              <Link to="/Alumini_directory">
                <Button className="px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm md:px-6 md:py-3 md:text-lg" color="orange">
                  Search Alumni
                </Button>
              </Link>
              <Link to="/Networking_Opportunities/New_eventpage">
                <Button className="px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm md:px-6 md:py-3 md:text-lg" color="orange">
                  View Upcoming Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default Dashboard;
