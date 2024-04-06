import "../styles/navigation.css";

const Navigation = ({ lang, setLang, active }) => {
  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
        <div className="logo">portfolio_lena</div>
      <a href="/#home" onClick={(e) => scrollTo(e, "home")} className={active === "home" ? "active" : null}>
        home
      </a>
      <a href="/#projects" onClick={(e) => scrollTo(e, "projects")} className={active === "projects" ? "active" : null}>
        {lang === "de" ? "projekte" : "projects"}
      </a>
      <a href="/#about" onClick={(e) => scrollTo(e, "about")} className={active === "about" ? "active" : null}>
        {lang === "de" ? "über mich" : "about me"}
      </a>
      <a href="/#contact" onClick={(e) => scrollTo(e, "about")} className={active === "contact" ? "active" : null}>
        {lang === "de" ? "kontakt" : "contact"}
      </a>
      <select
        name="lang"
        id="langSelect"
        onChange={(e) => {
          setLang(e.target.value);
        }}
      >
        <option value="de">🇩🇪</option>
        <option value="en">🇬🇧</option>
      </select>
    </nav>
  );
};

export default Navigation;
