import { FaArrowRight } from "react-icons/fa6";
import "../styles/home.css";

const Home = ({ lang }) => {
  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="home" id="home">
      <h1>
        {(lang === "de" ? "Hallo, ich bin " : "Hello, my name is ")}
        <span className="color_berry">Lena Bultmann</span>
      </h1>
      <h2>
        {
          (lang === "de"
            ? "Ich bin Full-Stack Webentwicklerin"
            : "I am a full-stack web developer")
        }
      </h2>
      <a href="#projects" onClick={(e) => scrollTo(e, "projects")}>
        <button>
          {(lang === "de" ? "Mehr über meine Arbeit" : "View my work")}
          <span>
            <FaArrowRight />
          </span>
        </button>
      </a>
    </section>
  );
};

export default Home;
