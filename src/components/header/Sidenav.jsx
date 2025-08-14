import { LogoText, ThemeToggler } from "@/components";
import { Link } from "react-router-dom";

const Sidenav = ({ showSidenav, closeSidenav }) => {
  return (
    <nav
      className={`md:hidden block fixed top-0 left-0 h-full z-30 ${
        !showSidenav && "-translate-x-full"
      }`}
    >
      <div className="h-full shadow-sm bg-light dark:bg-dark dark:shadow-transparent px-3 sm:px-5 py-5 ">
        <div className="h-full flex flex-col justify-between">
          <div className="space-y-7">
            <LogoText />

            <ul className="flex flex-col space-y-2">
              <li onClick={closeSidenav} className="nav-link-text">
                <Link to="/">home</Link>
              </li>
              <li onClick={closeSidenav} className="nav-link-text">
                <Link to="/archive">archieve</Link>
              </li>
              <li onClick={closeSidenav} className="nav-link-text">
                <Link to="/resume">resume</Link>
              </li>
            </ul>
          </div>

          <ThemeToggler includeText />
        </div>
      </div>
    </nav>
  );
};

export default Sidenav;
