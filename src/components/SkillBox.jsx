const SkillBox = ({ name, percent }) => {
  return (
    <>
      <div className="skillBox">
        <div className="skillText">
          <span>{name}</span>
        </div>
        <div className="meter">
          <span style={{ width: percent }}>
            <span className="progress"></span>
          </span>
        </div>
      </div>
    </>
  );
};

export default SkillBox;
