import { ThemeToggler, Sidenav, LogoText } from "@/components";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

const BodyOverlay = ({ showSidenav, closeSidenav }) => {
  return (
    <div
      className={`${
        showSidenav ? "opacity-70 block" : "hidden"
      } w-full h-screen md:hidden fixed top-0 left-0 bg-slate-950 z-20`}
      onClick={closeSidenav}
    ></div>
  );
};

const ToggleBar = ({ toggleSidenav, showSidenav }) => {
  return (
    <button
      className="md:hidden flex items-center justify-center outline-none w-[27px] h-8"
      onClick={toggleSidenav}
    >
      <div
        className={`toggle-bar ${showSidenav ? "toggle-bar-active" : ""}`}
      ></div>
    </button>
  );
};

const Header = () => {
  const [scrollActive, setScrollActive] = useState(false);
  const [showSidenav, setShowSidenav] = useState(false);
  const closeSidenav = useCallback(() => setShowSidenav(false), []);
  const toggleSidenav = useCallback(() => setShowSidenav((prev) => !prev), []);

  useEffect(() => {
    const handleScroll = () => {
      closeSidenav();
      setScrollActive(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [closeSidenav]);

  return (
    <header className="fixed top-0 left-0 w-full z-10">
      <Sidenav showSidenav={showSidenav} closeSidenav={closeSidenav} />
      <BodyOverlay showSidenav={showSidenav} closeSidenav={closeSidenav} />

      <div className="header-glossy-bg shadow-sm">
        <div
          className={`${
            scrollActive ? "py-2.5" : "lg:py-5"
          } flex-between py-3.5 px-4 lg:px-7 wrapper`}
        >
          <LogoText closeSidenav={closeSidenav} />

          <ul className="md:flex-center space-x-5 hidden">
            <li className="nav-link-text text-lg hover:underline">
              <Link to="/archive">archive</Link>
            </li>
            <li className="nav-link-text text-lg hover:underline">
              <Link to="/resume">resume</Link>
            </li>

            <ThemeToggler />
          </ul>

          <ToggleBar showSidenav={showSidenav} toggleSidenav={toggleSidenav} />
        </div>
      </div>
    </header>
  );
};

export default Header;
