import { useState } from "react";
import { SectionSkillsListLink } from "./SectionSkillsListLink";

export const SectionSkillsList = ({
  id,
  name,
  desc,
  isEdit,
  changeHandler,
}) => {
  let links = desc.map((item, index) => {
    return (
      <SectionSkillsListLink
        key={index}
        shortName={item.shortName}
        percent={item.percent}
      />
    );
  });

  return (
    <>
      <li
        className={
          !isEdit ? "accordion__link" : "accordion__link accordion__link-active"
        }
        onClick={() => changeHandler(id)}
      >
        <p>{name}</p>
        <div className="accordion__sub">{links}</div>
      </li>
    </>
  );
};
