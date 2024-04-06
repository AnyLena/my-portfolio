import { FaArrowRight } from "react-icons/fa6";
import "../../styles/home.css"

const Home = () => {

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <section className="home" id="home">
      <h1>Hallo, ich bin <span className="color_berry">Lena Bultmann</span></h1>
      <h2>Ich bin Full-Stack Webentwicklerin</h2>
      <a href="#projects" onClick={(e) => scrollTo(e, "projects")}><button>Mehr über meine Arbeit <span><FaArrowRight/></span></button></a>
    </section>
  );
};

export default Home;
