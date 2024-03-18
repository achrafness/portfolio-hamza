import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="grid md:grid-cols-2  py-20 md:px-36 px-8 mx-auto justify-start text-xl">
      <div className="flex items-center w-fit">
        {" "}
        <p>
          <span className="font-semibold">Hello 👋</span> , my name is
          <span className="block text-fourth text-8xl font-bold">HAMZA</span>
          a computer science student , <br />
          and a Python programmer.
          <div className="flex gap-12 mt-3">
            <Link to="https://www.linkedin.com/in/hamza-rouabah/">
              <img src="../images/linkedin.png" className="w-8" />
            </Link>
            <Link to="https://github.com/codingflake">
              <img src="../images/github.png" className="w-8" />
            </Link>
          </div>
        </p>
      </div>
      <div className="flex justify-center">
        <img className="w-3/4" src="../images/hero_image.png" alt="" />
      </div>
    </div>
  );
}
export default Hero;
