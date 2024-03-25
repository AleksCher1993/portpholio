import { SectionSelf } from "./sections/SectionSelf";
import { SectionSkills } from "./sections/SectionSkills";
import { SectionWorks } from "./sections/SectionWorks";

export const Main = () => {
  return (
    <main>
      <div className="main__container">
        <SectionSelf />
        <SectionSkills />
        <SectionWorks />
      </div>
    </main>
  );
};
