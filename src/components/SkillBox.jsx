const SkillBox = ({name, percent}) => {
  return (
    <div className="skillBox">
      <div className="skillText"><span>{name}</span></div>
      <div className="skillBar_color" style={{ width: percent }}></div>
      <div className="skillBar"></div>
    </div>
  );
};

export default SkillBox;
