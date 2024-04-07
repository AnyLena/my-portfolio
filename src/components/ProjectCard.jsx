const ProjectCard = ({ img, title, tools, url }) => {
  return (
    <div className="project-container">
      <div
        className="project-img"
        style={{ background: `url(${img}) center center/cover` }}
      ></div>
      <div className="project-text">
        <h3>{title}</h3>
        <p>
          {tools.map((tool, index, array) =>
            index === array.length - 1 ? `${tool}` : `${tool} | `
          )}
        </p>

        <a href={url}></a>
        <button>Read more</button>
      </div>
    </div>
  );
};

export default ProjectCard;
