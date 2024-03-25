import { WorksItem } from "../../../entities/worksItem/ui";

export const getContentWorksItem=(state,type=null,index=null)=>{
    let worksItem=[];
    let arr=[]
    if (type&&type==="content") {
      worksItem=state.filter(item=>item.type===type)
    }else {
      if (index!==null) { 
        worksItem.push(state.find((item)=>item.id===index))
      }
    }
    arr= worksItem.map(item=>{
      return <WorksItem {...item}/>
    })
    return arr
  }