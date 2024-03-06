import NavBar from "../src/components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import FieldsOfInterest from "./components/FieldsOfInterest.jsx";
import Footer from "./components/Footer.jsx";
const Home = () => {
  return (
    <div className="w-full bg-third">
      <NavBar />
      <Hero />
      <Skills />
      <FieldsOfInterest />
      <Footer />
    </div>
  );
};

export default Home;
