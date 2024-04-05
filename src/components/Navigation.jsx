import { NavLink } from "react-router-dom";
import "../styles/navigation.css"

const Navigation = ({ lang, setLang }) => {
  return (
    <nav>
      <NavLink to="/">home</NavLink>
      <NavLink to="/projects">{lang === "de" ? "projekte" : "projects"}</NavLink>
      <NavLink to="/about">{lang ==="de" ? "über mich" : "about me"}</NavLink>
     
      <select name="lang" id="langSelect" onChange={(e) => setLang(e.target.value)}>
        <option value="de">🇩🇪</option>
        <option value="en">🇬🇧</option>
      </select>
    </nav>
  );
};

export default Navigation;
