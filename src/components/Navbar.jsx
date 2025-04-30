import React, { useEffect, useState } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation(); // Get current route

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section when the route changes
  useEffect(() => {
    const section = location.pathname.split("/")[1]; // Get section name from URL
    if (section) {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -70,
      });
      setActive(section);
    }
  }, [location.pathname]); // Run this when the path changes

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            navigate("/");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer">
            JSRAK SOFTWARE SOLUTION
          </p>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <NavLink
                to={`/${nav.id}`} // Update the URL without hash
                onClick={() => {
                  setActive(nav.id);
                  navigate(`/${nav.id}`); // Change URL
                }}
              >
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.id ? "text-white" : "text-secondary"
                  }`}
                >
                  <NavLink
                    to={`/${nav.id}`}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.id);
                      navigate(`/${nav.id}`);
                    }}
                  >
                    {nav.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
