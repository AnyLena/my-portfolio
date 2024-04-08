import "./styles/section.css";
import { useEffect, useRef, useState, useMemo } from "react";

//COMPONENTS
import Home from "./views/Home";
import Projects from "./views/Projects";
import About from "./views/About";
import Navigation from "./components/Navigation";
import Contact from "./views/Contact";
import Footer from "./components/Footer";

function App() {
  const [lang, setLang] = useState("de");

  const useIsInViewport = (ref) => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
      () =>
        new IntersectionObserver(
          ([entry]) => setIsIntersecting(entry.isIntersecting),
          { threshold: 0.5 }
        ),
      []
    );

    useEffect(() => {
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);

    return isIntersecting;
  };

  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  let isInViewportProjects = false;
  let isInViewportAbout = false;
  let isInViewportContact = false;

  isInViewportProjects = useIsInViewport(projectsRef);
  isInViewportAbout = useIsInViewport(aboutRef);
  isInViewportContact = useIsInViewport(contactRef);

  return (
    <>
      <Navigation
        lang={lang}
        setLang={setLang}
        active={
          isInViewportProjects
            ? "projects"
            : isInViewportAbout
            ? "about"
            : isInViewportContact
            ? "contact"
            : "home"
        }
      />
      <div>
        <Home lang={lang} />
      </div>
      <div ref={projectsRef}>
        <Projects lang={lang} />
      </div>
      <div ref={aboutRef}>
        <About lang={lang} />
      </div>
      <div ref={contactRef}>
        <Contact lang={lang} />
      </div>
      <Footer />
    </>
  );
}

export default App;
