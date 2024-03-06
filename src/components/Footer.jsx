import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-first text-center py-5">
      <p className="text-fourth">&copy; {new Date().getFullYear()}</p>
      <p className="text-white">
        designed by{" "}
        <Link to="https://github.com/codingflake" className="hover:text-fourth">
          Hamza Rouabah
        </Link>{" "}
        & developed{" "}
        <Link to="https://github.com/achrafness" className="hover:text-fourth">
          Achraf Nessighaoui
        </Link>
      </p>
    </div>
  );
};
export default Footer;
