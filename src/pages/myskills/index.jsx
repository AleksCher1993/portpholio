import s from "./myskills.module.scss";
import { changeOffsetContentTop } from "./../../widgets/header/model/headerSlice";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useRef } from "react";
import { SkillsList } from "../../widgets/skillsList/ui";
import { skills } from "../../widgets/skillsList/model/uttils";
import { SelectSkillsState } from "../../widgets/skillsList/model/selectors";
export const MySkills = () => {
  const refskills = useRef(null);
const skillsState = useSelector(SelectSkillsState).skills;
  const skillsList=skills(skillsState).map(item=>{
    return <SkillsList key={item.id} title={item.title} skillsArr={item.skillsTitle}/>
  })



  const dispatch = useDispatch();
  const changeOffsetClientTopHandler = useCallback(() => {
    dispatch(
      changeOffsetContentTop({
        id: refskills.current.id,
        offset: refskills.current.offsetTop - 50,
      })
    );
  }, [dispatch]);
  useEffect(() => {
    changeOffsetClientTopHandler();
    window.addEventListener("resize", changeOffsetClientTopHandler);
    return () => {
      window.removeEventListener("resize", changeOffsetClientTopHandler);
    };
  }, [changeOffsetClientTopHandler]);
  return (
    <section ref={refskills} className={s.skills} id="skills">
      <div className={s.wrapper}>
        <div className={`${s.description} topline`}>
          <h3 className="section__title">
            My <span className="section__title--span">Skill</span>
          </h3>
        </div>
        <div className={`${s.body} bottomline`}>
        {skillsList}
        </div>
      </div>
    </section>
  );
};
