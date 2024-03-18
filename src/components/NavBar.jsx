import {Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="w-full bg-transparent pb-5 pt-8">
      <ul className="flex md:gap-16 gap-8 items-center justify-center text-first ">
        <li>
          <Link to="/about" className="font-semibold hover:text-fourth">
            About
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="../images/Hamza.svg" alt="Hamza" className="w-28" />
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className="font-semibold hover:text-fourth">
            Portfolio
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default NavBar;
