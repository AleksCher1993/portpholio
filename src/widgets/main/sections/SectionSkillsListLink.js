export const SectionSkillsListLink = ({ shortName, percent }) => {
  return (
    <>
      <div className="flex">
        <p>{shortName}</p>
        <p>{percent}%</p>
      </div>
      <input className="" type="range" disabled name="" value={percent} id="" />
    </>
  );
};
