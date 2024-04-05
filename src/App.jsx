import { useState } from "react";
import Home from "./views/Home";
import Projects from "./views/Projects";
import About from "./views/About";
import Navigation from "./components/Navigation";
import HomeEN from "./views/Home_en";
import ProjectsEN from "./views/Projects_en";
import AboutEN from "./views/About_en";

function App() {
  const [lang, setLang] = useState("de");

  return (
    <>
          <Navigation lang={lang} setLang={setLang} />
      {lang === "de" ? (
        <>
          <Home lang={lang} />
          <Projects lang={lang} />
          <About lang={lang} />
        </>
      ) : null}
      {lang === "en" ? (
        <>
          <HomeEN lang={lang} />
          <ProjectsEN lang={lang} />
          <AboutEN lang={lang} />
        </>
      ) : null}
    </>
  );
}

export default App;
