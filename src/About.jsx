import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Achievements from "./components/Achievements";
const About = () => {
  return (
    <div className="w-full bg-third">
      <NavBar />
      <AboutMe />
      <Achievements />
      <Footer />
    </div>
  );
}
export default About