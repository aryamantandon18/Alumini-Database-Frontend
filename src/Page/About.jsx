import { useState } from "react";

function AboutUs() {
  const [activeTab, setActiveTab] = useState("about"); // Default to 'about'

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container bg-#333333  px-4 py-20 mt-10 flex flex-row justify-center">
      <div className="max-w-5xl mx-24 bg-white p-8 rounded shadow-md w-3/4">
        <h1 className="text-4xl font-12px pb-5 ">
          {activeTab === "about" ? "About Us" : "Vision & Mission"}
        </h1>

        {/* Conditional rendering based on activeTab */}
        {activeTab === "about" && (
          <div className="w-full">
            <p className="text-lg leading-relaxed mb-4">
              In view of the national and international scenario of the growing
              demand of qualified technical personnel in different streams of
              engineering technology and management, Bhartiya Brahmin Charitable
              Trust in 2005 laid the foundation of Bhagwan Parshuram Institute
              of Technology (BPIT). BPIT is approved by the Ministry of Human
              Resource Development, Government of India, and the Directorate of
              Training and Technical Education, Government of National Capital
              Territory, Delhi. It is affiliated to Guru Gobind Singh
              Indraprastha University, Delhi, and offers courses of Bachelor of
              Technology (B.Tech) and Master of Business Administration (MBA),
              which are approved by the All India Council of Technical Education
              (AICTE).BPIT also offers a three years full-time Bachelor of
              Business Administration program to set the foundation for future
              managers. The admission is through Common Entrance Test conducted
              by GGSIP University.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              The institute is situated at a prime location on Dr. K.N. Katju
              Marg, which separates Sector 11 and Sector 17 in Rohini, North
              Delhi. Adjacent to BPIT is the MCD Building, which houses Railway
              Reservation Centre. It is well connected with public transport
              systems like DTC buses and metro shuttles. Rithala metro station
              on metro line 1 at distances of 1.5 and the Jahangirpuri metro
              station near Mukarba chowk (crossing of GT road to Karnal and
              outer ring road) on metro line 2 are at 4 km, respectively.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              There are well equipped spacious classrooms, drawing halls,
              laboratories, workshops, and conference/seminar halls. A
              well-stacked large library having state of art facilities has been
              developed. Laboratories and workshops have the best quality of
              equipment commensurate with the requirements of the curriculum of
              IP University and beyond. There are twelve computer laboratories,
              each equipped with the required number of computers, having the
              latest hardware configuration and the latest software. All the
              computers are networked through formatted LAN. The excellent
              Internet connectivity is provided via high speed dedicated optical
              fiber link of 200 Mbps capacity. Wi-Fi connectivity is also
              available on the entire campus.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              BPIT strives to provide accurate learning and industry-oriented
              culture by means of its enriched practical training programs for
              the students in different courses offered in different semesters.
              The students in the second and third years are offered in-house
              training facilities in the fields of Big Data, Cloud Computing,
              Machine Learning, Artificial Intelligence, VLSI Design, Internet
              of Things, Electronic Hardware Design, Simulation, and Power
              Systems, etc.
            </p>
          </div>
        )}
        {activeTab === "vision" && (
          <div className="w-full">
            <p className="text-lg leading-relaxed mb-4">
              Vision To establish a leading Global center of excellence in
              multidisciplinary education, training and research in the area of
              Engineering, Technology and Management. To produce technologically
              competent, morally & emotionally strong and ethically sound
              professionals who excel in their chosen field, practice commitment
              to their profession and dedicate themselves to the service of
              mankind.
            </p>
          </div>
        )}
      </div>
      <ul className="flex flex-col space-y-4">
        <li
          className={`cursor-pointer ${
            activeTab === "about"
              ? "bg-gray-500 text-white px-4 py-2"
              : "bg-white text-black"
          }`}
          onClick={() => handleTabClick("about")}
        >
          About Us
        </li>
        <li
          className={`cursor-pointer ${
            activeTab === "vision"
              ? "bg-gray-500 text-white px-4 py-2"
              : "bg-white text-black"
          }`}
          onClick={() => handleTabClick("vision")}
        >
          Vision & Mission
        </li>
      </ul>
    </div>
  );
}

export default AboutUs;
