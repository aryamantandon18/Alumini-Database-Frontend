import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSearch,
  faSlidersH,
} from "@fortawesome/free-solid-svg-icons";
import backgroundImage from "./newDashboardImg.jpg"; // Ensure the correct path to your image

const members = [
  {
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "George Lindelof",
    mobile: "+4 315 23 62",
    email: "carlsen@armand.no",
    enrollmentNumber: "E123456",
  },
  {
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Eric Dyer",
    mobile: "+2 134 25 65",
    email: "cristofer.ajer@lone.no",
    enrollmentNumber: "E123457",
  },
  {
    photo: "https://randomuser.me/api/portraits/men/25.jpg",
    name: "Haitam Alassami",
    mobile: "+1 345 22 21",
    email: "haitam@gmail.com",
    enrollmentNumber: "E123458",
  },
  {
    photo: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Michael Campbel",
    mobile: "+1 756 52 73",
    email: "camp@hotmail.com",
    enrollmentNumber: "E123459",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/32.jpg",
    name: "Ashley Williams",
    mobile: "+1 965 43 11",
    email: "williams.ash@newl.com",
    enrollmentNumber: "E123460",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/45.jpg",
    name: "Vanessa Paradi",
    mobile: "+4 644 12 38",
    email: "paradi.van@google.com",
    enrollmentNumber: "E123461",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/25.jpg",
    name: "Lora Palmer",
    mobile: "+1 909 34 33",
    email: "lora.palm@gmail.com",
    enrollmentNumber: "E123462",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/55.jpg",
    name: "Christy Newborn",
    mobile: "+6 254 75 12",
    email: "chris@amazon.com",
    enrollmentNumber: "E123463",
  },
  {
    photo: "https://randomuser.me/api/portraits/men/15.jpg",
    name: "Nick Jackel",
    mobile: "+4 668 43 12",
    email: "jackel1214@google.com",
    enrollmentNumber: "E123464",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Tora Laundren",
    mobile: "+1 343 63 32",
    email: "tora.lan@gmail.com",
    enrollmentNumber: "E123465",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/75.jpg",
    name: "Malisha Manis",
    mobile: "+5 234 23 00",
    email: "manisha@hotmail.com",
    enrollmentNumber: "E123466",
  },
];

const LatestNews = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <button className="bg-blue-300 text-white font-semibold py-2 px-10 rounded-full">
        Latest News
      </button>

      <div className="flex mt-4">
        <input
          type="text"
          placeholder="Search here"
          className="py-2 px-4 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-pink-200 py-2 px-4 border-t border-b border-gray-300">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <button className="bg-pink-200 py-2 px-4 border border-gray-300 rounded-r-lg">
          <FontAwesomeIcon icon={faSlidersH} />
        </button>
      </div>
    </div>
  );
};

const RegisteredCandidates = () => {
  return (
    <div>
      {/* NewsDashboard part */}
      <header
        className="py-24 h-max w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container mx-auto text-center mb-40 mt-10 px-4 sm:px-6 lg:px-8 relative rounded">
          <h1 className="text-2xl text-gray-700 sm:text-3xl md:text-4xl font-bold">
            STAY CONNECTED WITH ALUMNI{" "}
            <span className="text-red-500">NEWS</span> NETWORK
          </h1>
          <p className="text-gray-500 mt-2 text-sm sm:text-base md:text-lg">
            Latest updates and success stories from Abhigyan alumni network
          </p>
        </div>
      </header>

      <LatestNews />

      {/* Cards part */}
      <div className="container mx-auto mt-10 px-6 lg:px-20">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-3 px-4 border-b">Photo</th>
                <th className="py-3 px-4 border-b">Student Name</th>
                <th className="py-3 px-4 border-b">Mobile</th>
                <th className="py-3 px-4 border-b">Email</th>
                <th className="py-3 px-4 border-b">Enrollment Number</th>
                <th className="py-3 px-4 border-b">View Profile</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr key={index} className="text-center hover:bg-gray-100">
                  <td className="py-3 px-4 border-b">
                    <img
                      src={member.photo}
                      alt="profile"
                      className="h-12 w-12 rounded-full mx-auto"
                    />
                  </td>
                  <td className="py-3 px-4 border-b">{member.name}</td>
                  <td className="py-3 px-4 border-b">{member.mobile}</td>
                  <td className="py-3 px-4 border-b">{member.email}</td>
                  <td className="py-3 px-4 border-b">
                    {member.enrollmentNumber}
                  </td>
                  <td className="py-3 px-4 border-b">
                    <button className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded inline-flex items-center">
                      <FontAwesomeIcon icon={faUser} className="mr-2" />
                      View Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RegisteredCandidates;
