import meerkat from "/meerkats.png";
import pokefight from "/pokefight.png";
import memegenerator from "/memegenerator.png";
import houseplants from "/houseplants.png";
import ProjectCard from "../components/ProjectCard";
import "../styles/projects.css";

const Projects = () => {
  return (
    <section className="projects dark" id="projects">
      <h2>Meine Projekte</h2>
      <div className="projects-container">

      <ProjectCard img={meerkat} title="Meerkats Event App" tools={["MongoDB","Express","React","Node"]} url="https://join-the-meerkats.netlify.app/"/>
      <ProjectCard img={pokefight} title="Pokéfighters" tools={["MongoDB","Express","React","Node"]} url="https://pokefighters.netlify.app/"/>
      <ProjectCard img={memegenerator} title="Random Meme Generator" tools={["React","Node"]} url="https://github.com/AnyLena/random-meme-generator"/>
      <ProjectCard img={houseplants} title="House Plants Care Guide" tools={["React","Node"]} url="https://github.com/AnyLena/house-plant-care-guide"/>
      </div>
    </section>
  );
};

export default Projects;
