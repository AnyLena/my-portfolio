const ProjectCard = ({ img, title, tools, url, lang }) => {
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

        <a href={url} rel="nofollow noopener" target="_blank">
          <button>{lang === "de" ? "Schau's dir an" : "Have a look"}</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
