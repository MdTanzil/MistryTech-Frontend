import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  //   const [homeDropdown, setHomeDropDown] = useState(false);
  const [homeFurnitureDropdown, setHomeFurnitureDropdown] = useState(false);
  const [officeFurnitureDropdown, setOfficeFurnitureDropDown] = useState(false);
  const [garmentsFurnitureDropDown, setGarmentsFurnitureDropDown] =
    useState(false);
  const [schoolFurnitureDropDown, setSchoolFurnitureDropDown] =
    useState(false);
  const [restaurantFurnitureDropDown, setRestaurantFurnitureDropDown] =
    useState(false);
  const [aboutUsDropDown, setAboutUsDropDown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col lg:flex-row items-center justify-center bg-primary ">
      <div className="flex items-center justify-between px-4 py-2 lg:p-0">
        <button
          className="block lg:hidden  items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6H20V7H4V6ZM4 11H20V12H4V11ZM4 16H20V17H4V16Z"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`lg:flex lg:flex-row lg:items-center lg:justify-between ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow flex flex-col lg:flex-row">
          <div className="relative inline">
            <NavLink
              onMouseEnter={() => setOfficeFurnitureDropDown(true)}
              onMouseLeave={() => setOfficeFurnitureDropDown(false)}
              to="/commercial"
              className="block mt-4 lg:inline-block lg:mt-0 text-white    p-2      text-base hover:bg-white hover:text-gray-900 mr-4"
            >
              <div className="flex items-center gap-1">
                Office Furniture
                {officeFurnitureDropdown ? (
                  <MdKeyboardArrowDown />
                ) : (
                  <MdKeyboardArrowUp />
                )}
              </div>
            </NavLink>
            {officeFurnitureDropdown && (
              <div
                onMouseEnter={() => setOfficeFurnitureDropDown(true)}
                onMouseLeave={() => setOfficeFurnitureDropDown(false)}
                className="absolute z-10 bg-white shadow-md py-2 rounded-sm text-sm w-96 left-0 top-full "
              >
                <div className="flex">
                  <div className="w-1/2">
                    <NavLink
                      to="/home-interior"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      CEO Desk
                    </NavLink>
                    <NavLink
                      to="/villa-interior"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Chair
                    </NavLink>
                    <NavLink
                      to="/duplex-house"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Coffee Table
                    </NavLink>
                    <NavLink
                      to="/luxury-pent-house"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Conference Table
                    </NavLink>
                    <NavLink
                      to="/luxury-pent-house"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Executive Desk
                    </NavLink>
                    <NavLink
                      to="/luxury-pent-house"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Reception Desk
                    </NavLink>
                    <NavLink
                      to="/luxury-pent-house"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Sofa
                    </NavLink>
                    <NavLink
                      to="/luxury-pent-house"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Storage
                    </NavLink>
                    <NavLink
                      to="/luxury-pent-house"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Workstation
                    </NavLink>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              </div>
            )}
          </div>
          <div className="relative inline">
            <NavLink
              onMouseEnter={() => setGarmentsFurnitureDropDown(true)}
              onMouseLeave={() => setGarmentsFurnitureDropDown(false)}
              to="/swimming-pool"
              className="block mt-4 lg:inline-block lg:mt-0 text-white    p-2      text-base hover:bg-white hover:text-gray-900 mr-4"
            >
              <div className="flex items-center gap-1">
                Garments Furniture
                {garmentsFurnitureDropDown ? (
                  <MdKeyboardArrowDown />
                ) : (
                  <MdKeyboardArrowUp />
                )}
              </div>
            </NavLink>
            {garmentsFurnitureDropDown && (
              <div
                onMouseEnter={() => setGarmentsFurnitureDropDown(true)}
                onMouseLeave={() => setGarmentsFurnitureDropDown(false)}
                className="absolute z-10 bg-white shadow-md py-2 rounded-sm text-sm w-[450px] left-0 top-full"
              >
                <div className="flex">
                  <div className="w-1/2">
                    <NavLink
                      to="/indoor-swimming-pool"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Display Rack
                    </NavLink>
                    <NavLink
                      to="/outdoor-swimming-pool"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Storage Rack
                    </NavLink>
                    <NavLink
                      to="/outdoor-swimming-pool"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Trolley
                    </NavLink>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              </div>
            )}
          </div>
          <div className="relative inline-block">
            <NavLink
              onMouseEnter={() => setHomeFurnitureDropdown(true)}
              onMouseLeave={() => setHomeFurnitureDropdown(false)}
              to="/"
              className=" block mt-4 lg:inline-block lg:mt-0 text-white p-2 text-base hover:bg-white hover:text-gray-900 mr-4"
            >
              <div className="flex items-center gap-1">
                Home Furniture{" "}
                {homeFurnitureDropdown ? (
                  <MdKeyboardArrowDown />
                ) : (
                  <MdKeyboardArrowUp />
                )}
              </div>
            </NavLink>
            {homeFurnitureDropdown && (
              <div
                onMouseEnter={() => setHomeFurnitureDropdown(true)}
                onMouseLeave={() => setHomeFurnitureDropdown(false)}
                className="absolute z-10 bg-white shadow-md py-2 rounded-sm text-sm w-full lg:w-[1400px] justify-center top-full left-[-420px]"
              >
                <div className="container mx-auto px-4 lg:px-0">
                  <div className="grid grid-cols-6 gap-4">
                    <div>
                      <NavLink
                        to="/home-interior"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Beds
                      </NavLink>
                      <NavLink
                        to="/villa-interior"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Wardrobe
                      </NavLink>
                      <NavLink
                        to="/duplex-house"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Dressing Table
                      </NavLink>
                      <NavLink
                        to="/luxury-pent-house"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Dinning Table
                      </NavLink>
                      <NavLink
                        to="/luxury-pent-house"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Coffee Table
                      </NavLink>
                      <NavLink
                        to="/luxury-pent-house"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Sofa
                      </NavLink>
                      <NavLink
                        to="/luxury-pent-house"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Showcase/TV unit
                      </NavLink>
                      <NavLink
                        to="/luxury-pent-house"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        chair
                      </NavLink>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="relative inline">
            <NavLink
              onMouseEnter={() => setSchoolFurnitureDropDown(true)}
              onMouseLeave={() => setSchoolFurnitureDropDown(false)}
              to="/healthcare"
              className="block mt-4 lg:inline-block lg:mt-0 text-white    p-2      text-base hover:bg-white hover:text-gray-900 mr-4"
            >
              <div className="flex items-center gap-1">
                School Furniture{" "}
                {schoolFurnitureDropDown ? (
                  <MdKeyboardArrowDown />
                ) : (
                  <MdKeyboardArrowUp />
                )}
              </div>
            </NavLink>
            {schoolFurnitureDropDown && (
              <div
                onMouseEnter={() => setSchoolFurnitureDropDown(true)}
                onMouseLeave={() => setSchoolFurnitureDropDown(false)}
                className="absolute z-10 bg-white shadow-md py-2 rounded-lg text-sm w-96 left-0 top-full"
              >
                <div className="flex">
                  <div className="w-1/2">
                    <NavLink
                      to="/hospital-space-interior"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Bench Set
                    </NavLink>
                    <NavLink
                      to="/dental-clinic"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Dental Clinic Interior
                    </NavLink>
                    <NavLink
                      to="/rehabilitation-clinic"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Desk
                    </NavLink>
                    <NavLink
                      to="/healthcare-center"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Teacher&apos;s Desk
                    </NavLink>
                    <NavLink
                      to="/healthcare-center"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Chair
                    </NavLink>
                    <NavLink
                      to="/healthcare-center"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Storage
                    </NavLink>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              </div>
            )}
          </div>
          <div className="relative inline">
            <NavLink
              onMouseEnter={() => setRestaurantFurnitureDropDown(true)}
              onMouseLeave={() => setRestaurantFurnitureDropDown(false)}
              to="/healthcare"
              className="block mt-4 lg:inline-block lg:mt-0 text-white    p-2      text-base hover:bg-white hover:text-gray-900 mr-4"
            >
              <div className="flex items-center gap-1">
                Restaurant Furniture{" "}
                {restaurantFurnitureDropDown ? (
                  <MdKeyboardArrowDown />
                ) : (
                  <MdKeyboardArrowUp />
                )}
              </div>
            </NavLink>
            {restaurantFurnitureDropDown && (
              <div
                onMouseEnter={() => setRestaurantFurnitureDropDown(true)}
                onMouseLeave={() => setRestaurantFurnitureDropDown(false)}
                className="absolute z-10 bg-white shadow-md py-2 rounded-lg text-sm w-96 left-0 top-full "
              >
                <div className="flex">
                  <div className="w-1/2">
                    <NavLink
                      to="/hospital-space-interior"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Sofa
                    </NavLink>
                    <NavLink
                      to="/dental-clinic"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Chair
                    </NavLink>
                    <NavLink
                      to="/rehabilitation-clinic"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Table
                    </NavLink>
                    <NavLink
                      to="/healthcare-center"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Deli Table
                    </NavLink>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              </div>
            )}
          </div>

          <div className="relative inline">
            <NavLink
              to=""
              className="block mt-4 lg:inline-block lg:mt-0 text-white    p-2      text-base hover:bg-white hover:text-gray-900 mr-4"
            >
              Accessories
            </NavLink>
          </div>
          <div className="relative inline">
            <NavLink
              to=""
              className="block mt-4 lg:inline-block lg:mt-0 text-white    p-2      text-base hover:bg-white hover:text-gray-900 mr-4"
            >
              Combo
            </NavLink>
          </div>
          <div className="relative inline">
            <NavLink
              onMouseEnter={() => setAboutUsDropDown(true)}
              onMouseLeave={() => setAboutUsDropDown(false)}
              to="/about-us"
              className="block mt-4 lg:inline-block lg:mt-0 text-white    p-2      text-base hover:bg-white hover:text-gray-900 mr-4"
            >
              Interiors
            </NavLink>
            {aboutUsDropDown && (
              <div
                onMouseEnter={() => setAboutUsDropDown(true)}
                onMouseLeave={() => setAboutUsDropDown(false)}
                className="absolute z-10 bg-white shadow-md py-2 rounded-sm text-sm w-96 right-0 top-full"
              >
                <div className="flex">
                  <div className="w-1/2">
                    <NavLink
                      to="/jobs"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Completed Jobs
                    </NavLink>
                    <NavLink
                      to="/reviews"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Reviews
                    </NavLink>
                    <NavLink
                      to="/awards-affiliations"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Awards & Affiliations
                    </NavLink>
                  </div>
                  <div className="w-1/2">
                    <NavLink
                      to="/careers"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Careers
                    </NavLink>
                    <NavLink
                      to="/hours-location"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Hours & Location
                    </NavLink>
                    <NavLink
                      to="/contact-us"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Contact Us
                    </NavLink>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="relative inline">
            <NavLink
              to="/blog"
              className="block mt-4 lg:inline-block lg:mt-0 text-white    p-2      text-base hover:bg-white hover:text-gray-900 mr-4"
            >
              All Furniture
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
