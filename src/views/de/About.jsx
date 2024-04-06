import lena from "../../assets/me.png";
import SkillBox from "../../components/SkillBox";
import "../../styles/about.css";

const About = ({lang}) => {
  return (
    <section className="about" id="about">
      <h2>{lang = "de" ? "Über mich" : "About Me"}</h2>
      <div className="aboutContainer">
        <div>
          <img src={lena} alt="" />
          <p className="aboutText">
            {lang = "de" ? "Durch meine Arbeit als Projektmanagerin habe ich meine Leidenschaft für das Programmieren entdeckt. Teamwork und sich stetig, gemensam weiterzuentwickeln stehen für mich dabei im Mittelpunkt. Lasst und gemeinsam großartige Projekte umsetzen!" : "EN"}
          </p>
        </div>
        <div className="aboutSkills">
          <SkillBox name="CSS" percent="80%"/>
          <SkillBox name="HTML" percent="80%"/>
          <SkillBox name="React" percent="60%"/>
          <SkillBox name="JavaScript" percent="60%"/>
          <SkillBox name="Node.js" percent="40%"/>
          <SkillBox name="Git/GitHub" percent="40%"/>
          <SkillBox name="SQL" percent="40%"/>
          <SkillBox name="MongoDB" percent="50%"/>
          <SkillBox name="Photoshop" percent="70%"/>
          <SkillBox name="Excel" percent="70%"/>
        </div>
      </div>
    </section>
  );
};

export default About;
