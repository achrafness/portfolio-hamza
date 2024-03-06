import Footer from "./components/Footer"
import HeroProject from "./components/HeroProject"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"
const Portfolio = () => {
  return (
    <div className="bg-third">
      <NavBar />
      <HeroProject />
      <Projects />
      <Footer />
    </div>
  );
};
export default Portfolio;