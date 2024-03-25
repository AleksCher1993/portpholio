import { useSelector } from "react-redux";
import s from "./worksList.module.scss";
import { selectWorksState } from "../model/selectors";
import { getContentWorksItem } from "../model/utills";
export const WorksList = () => {
  const works=useSelector(selectWorksState).works;
  const groupone=works.groupone;
  const grouptwo=works.grouptwo;

  return (
    <div className={`${s.list}`}>
      <div className={`${s.groupone} leftline`}>
        {getContentWorksItem(groupone,null,0)}
        <div className={s.content}>
        {getContentWorksItem(groupone,"content",null)}
        </div>
      </div>
      <div className={`${s.grouptwo} leftline`}>
      {getContentWorksItem(grouptwo,null,0)}
      <div className={s.content}>
      {getContentWorksItem(grouptwo,"content",null)}
      </div>
      {getContentWorksItem(grouptwo,null,3)}
      </div>

    </div>
  );
};
