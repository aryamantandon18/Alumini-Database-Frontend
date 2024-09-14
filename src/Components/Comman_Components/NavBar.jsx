import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import msalInstance from "./msalConfig";
import { AuthContext } from "../../Context/AuthContext"
import "./NavBar.css";

const NavBar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [account, setAccount] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('sidebar-open', !isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const initializeMsal = async () => {
    try {
      await msalInstance.initialize();
    } catch (error) {
      console.error("MSAL initialization failed:", error);
    }
  };

  const handleLogin = async () => {
    try {
      await initializeMsal();
      const loginResponse = await msalInstance.loginPopup({
        scopes: ["user.read"],
      });
      setAccount(loginResponse.account);
      localStorage.setItem(
        "msalAccount",
        JSON.stringify(loginResponse.account)
      );
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = () => {
    msalInstance.logoutPopup();
    setAccount(null);
    localStorage.removeItem("msalAccount");
  };

  useEffect(() => {
    const storedAccount = JSON.parse(localStorage.getItem("msalAccount"));
    if (storedAccount) {
      setAccount(storedAccount);
    }
  }, []);

  return (
    <>
      <nav className="navbar fixed top-0 left-0 right-0 bg-white shadow-md z-40 font-sans">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 items-center py-3 md:py-5">
          <div className="flex items-center">
            <Link to="/">
              <img
                className="h-12"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7RzOQ_E52YXYZQ4Vwrbnbs_HaBhq0ZEvXrQ&s"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="md:hidden flex justify-end">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex md:col-span-2 md:justify-end space-x-1 text-sm md:text-base text-gray-700`}
          >
            <li>
              <NavLink
                exact
                to="/"
                className="nav-link px-3 flex text-sm shrink md:text-base"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Alumini_Directory"
                className="nav-link flex px-2 text-sm md:text-base"
                activeClassName="active"
              >
                Alumni Directory
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Alumini-Achivements"
                className="nav-link flex px-2 sm:text-sm md:text-base"
                activeClassName="active"
              >
                Achievements
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Netwoking_Opportunities"
                className="nav-link flex px-2 sm:text-sm md:text-base"
                activeClassName="active"
              >
                Networking
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contact"
                className="nav-link flex px-2 sm:text-sm md:text-base"
                activeClassName="active"
              >
                Contact Us
              </NavLink>
            </li>

            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="nav-link flex items-center px-2 sm:text-sm md:text-base"
              >
                Resources
                <svg
                  className="h-4 w-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className="absolute bg-white shadow-lg rounded-md mt-1 py-1 w-40">
                  <li>
                    <NavLink
                      to="/interview-experience"
                      className="dropdown-link block px-4 py-2 text-sm text-gray-700"
                      activeClassName="active"
                    >
                      Interview Experience
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Student_Registration"
                      className="dropdown-link block px-4 py-2 text-sm text-gray-700"
                      activeClassName="active"
                    >
                      Students
                    </NavLink>
                  </li>
                  <li className="relative">
                    <NavLink
                      to="/JobRankForm"
                      className="dropdown-link block px-4 py-2 text-sm text-gray-700"
                      activeClassName="active"
                    >
                      Job Posting
                    </NavLink>
                  </li>
                  <li className="relative">
                    <NavLink
                      to="/JobRanklist"
                      className="dropdown-link block px-4 py-2 text-sm text-gray-700"
                      activeClassName="active"
                    >
                      Ranklist
                    </NavLink>
                  </li>
                  <li className="relative">
                    <NavLink
                      to="/gallery"
                      className="dropdown-link block px-4 py-2 text-sm text-gray-700"
                      activeClassName="active"
                    >
                      Gallery
                    </NavLink>
                  </li>
                  
                </ul>
              )}
            </li>
            {
              isAuthenticated ? (
                <li className="relative">
                  <button
                    onClick={() => logout()}
                    className="dropdown-link block px-4 py-2 text-sm text-gray-700">
                    Logout
                  </button>
                </li>
              ) : (
                <li className="relative">
                  <NavLink
                    to="/login"
                    className="dropdown-link block px-4 py-2 text-sm text-gray-700"
                    activeClassName="active"
                  >
                    Login
                  </NavLink>
                </li>
              )
            }
          </ul>
        </div>
      </nav>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleMenu}>&times;</button>
        <ul className="space-y-1 text-sm md:text-base text-gray-700">
          <li>
            <NavLink
              exact
              to="/"
              className="nav-link px-3 flex text-sm shrink md:text-base"
              activeClassName="active"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Alumini_Directory"
              className="nav-link flex px-2 text-sm md:text-base"
              activeClassName="active"
              onClick={toggleMenu}
            >
              Alumni Directory
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Alumini-Achivements"
              className="nav-link flex px-2 sm:text-sm md:text-base"
              activeClassName="active"
              onClick={toggleMenu}
            >
              Achievements
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Netwoking_Opportunities"
              className="nav-link flex px-2 sm:text-sm md:text-base"
              activeClassName="active"
              onClick={toggleMenu}
            >
              Networking
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className="nav-link flex px-2 sm:text-sm md:text-base"
              activeClassName="active"
              onClick={toggleMenu}
            >
              Contact Us
            </NavLink>
          </li>

          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="nav-link flex items-center px-2 sm:text-sm md:text-base"
            >
              Resources
              <svg
                className="h-4 w-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <ul className="absolute bg-white shadow-lg rounded-md mt-1 py-1 w-40">
                <li>
                  <NavLink
                    to="/interview-experience"
                    className="dropdown-link block px-4 py-2 text-sm text-gray-700"
                    activeClassName="active"
                    onClick={toggleMenu}
                  >
                    Interview Experience
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Student_Registration"
                    className="dropdown-link block px-4 py-2 text-sm text-gray-700"
                    activeClassName="active"
                    onClick={toggleMenu}
                  >
                    Students
                  </NavLink>
                </li>
                <li className="relative">
                  <NavLink
                    to="/JobRankForm"
                    className="dropdown-link block px-4 py-2 text-sm text-gray-700"
                    activeClassName="active"
                    onClick={toggleMenu}
                  >
                    Job Posting
                  </NavLink>
                </li>
                <li className="relative">
                  <NavLink
                    to="/JobRanklist"
                    className="dropdown-link block px-4 py-2 text-sm text-gray-700"
                    activeClassName="active"
                    onClick={toggleMenu}
                  >
                    Ranklist
                  </NavLink>
                </li>
                <li className="relative">
                  <NavLink
                    to="/gallery"
                    className="dropdown-link block px-4 py-2 text-sm text-gray-700"
                    activeClassName="active"
                    onClick={toggleMenu}
                  >
                    Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    className="dropdown-link block px-4 py-2 text-sm text-gray-700"
                    activeClassName="active"
                    onClick={toggleMenu}
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            {account ? (
              <div className="nav-link flex flex-col items-center">
                <div className="flex items-center">
                  <img
                    src={`https://www.gravatar.com/avatar/${account.id}?d=identicon`}
                    alt="User Avatar"
                    className="h-6 w-6 rounded-full"
                  />
                  <span className="ml-2">{account.name}</span>
                </div>
                <button onClick={handleLogout} className="mt-1 text-sm text-blue-600">
                  Logout
                </button>
              </div>
            ) : (
              <NavLink
              to="/login"
              className="dropdown-link block px-4 py-2 text-sm text-gray-700"
              activeClassName="active"
            >
              Login
            </NavLink>
            )}
          </li>
        </ul>
      </div>
      <div className="main-content">{/* Main content goes here */}</div>
    </>
  );
};

export default NavBar;
