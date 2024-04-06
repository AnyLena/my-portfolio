import { FaArrowRight } from "react-icons/fa6";
import "../../styles/home.css"

const HomeEN = () => {

    const scrollTo = (e, id) => {
      e.preventDefault();
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };
    
    return (
      <section className="home" id="home">
        <h1>Hello, my name is <span className="color_berry">Lena Bultmann</span></h1>
        <h2>I am a full-stack web developer</h2>
        <a href="#projects" onClick={(e) => scrollTo(e, "projects")}><button>View my work <span><FaArrowRight/></span></button></a>
      </section>
    );
  };

export default HomeEN;
