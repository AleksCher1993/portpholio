import { SkillItem } from "../../../entities/skillItem/ui"
import s from "./skillsList.module.scss"
export const SkillsList=({title,skillsArr})=>{
  const skillsItems=skillsArr.map((item,index)=>{
    return <SkillItem key={index} widthBar={item.percent} title={item.title}/>
  })
    return <div className={s.box}>
      <h4 className={s.title}>{title}</h4>
      <div className={s.content}>

        {skillsItems}
      </div>
    </div>
    
  
}