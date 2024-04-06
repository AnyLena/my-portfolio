import "./styles/section.css";
import { useEffect, useRef, useState, useMemo } from "react";

//COMPONENTS
import Home from "./views/de/Home";
import Projects from "./views/de/Projects";
import About from "./views/de/About";
import Navigation from "./components/Navigation";
import HomeEN from "./views/en/Home_en";
import ProjectsEN from "./views/en/Projects_en";
import AboutEN from "./views/en/About_en";
import Contact from "./views/de/Contact";
import ContactEN from "./views/en/Contact_en";

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
  const projectsEnRef = useRef(null);
  const aboutEnRef = useRef(null);
  const contactEnRef = useRef(null);

  let isInViewportProjects = false;
  let isInViewportAbout = false;

  if (lang === 'de') {
    isInViewportProjects = useIsInViewport(projectsRef);
    isInViewportAbout = useIsInViewport(aboutRef);
    isInViewportAbout = useIsInViewport(contactRef);
  } else {
    isInViewportProjects = useIsInViewport(projectsEnRef);
    isInViewportAbout = useIsInViewport(aboutEnRef);
    isInViewportAbout = useIsInViewport(contactEnRef);
  }
 
  return (
    <>
      <Navigation lang={lang} setLang={setLang} active={isInViewportProjects ? "projects" : isInViewportAbout ? "about" : "home"} />
      {lang === "de" ? (
        <>
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
        </>
      ) : null}
      {lang === "en" ? (
        <>
          <div>
            <HomeEN lang={lang} />
          </div>
          <div ref={projectsEnRef}>
            <ProjectsEN lang={lang} />
          </div>
          <div ref={aboutEnRef}>
            <AboutEN lang={lang} />
          </div>
          <div ref={contactEnRef}>
            <Contact lang={lang} />
          </div>
        </>
      ) : null}
    </>
  );
}

export default App;
