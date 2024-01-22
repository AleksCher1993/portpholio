import { useState } from "react";
import progimg from "../../../imgs/meatcomputer.png";
import { SectionSkillsList } from "./SectionSkillsList";
let initNotes = [
  {
    id: 112,
    name: "Hyper text markup language",
    desc: [{ shortName: "HTML", percent: 85 }],
    isEdit: false,
  },
  {
    id: 252,
    name: "Cascading Style Sheets",
    desc: [
      { shortName: "CSS", percent: 85 },
      { shortName: "SCSS", percent: 85 },
    ],
    isEdit: false,
  },
  {
    id: 312,
    name: "Java Script",
    desc: [
      { shortName: "JS", percent: 80 },
      { shortName: "React", percent: 70 },
      { shortName: "Node", percent: 60 },
    ],
    isEdit: true,
  },
  {
    id: 415,
    name: "Other",
    desc: [
      { shortName: "Bootstrap", percent: 50 },
      { shortName: "Photoshop", percent: 50 },
      { shortName: "Vigma", percent: 50 },
    ],
    isEdit: false,
  },
];
export const SectionSkills = () => {
  const [notes, setNotes] = useState(initNotes);
  let lis = notes.map((note, index) => {
    return (
      <SectionSkillsList
        key={index}
        id={note.id}
        name={note.name}
        desc={note.desc}
        isEdit={note.isEdit}
        changeHandler={changeHandler}
      />
    );
  });

  function changeHandler(id) {
    setNotes(
      notes.map((note) => {
        if (note.id === id) {
          return { ...note, isEdit: !note.isEdit };
        } else return { ...note, isEdit: false };
      })
    );
  }
  return (
    <section id="section_skills" className="section__skills skills">
      <div className="aboutself__head head">
        <div className="head__name">
          <h3>Скилл</h3>
        </div>
        <div className="aboutself__empty"></div>
      </div>
      <div className="skills__body">
        <div className="skills__img">
          <img src={progimg} alt="Картинка программиста" />
        </div>

        <div className="skills__raiting">
          <ul className="accordion__list">{lis}</ul>
        </div>
      </div>
    </section>
  );
};
