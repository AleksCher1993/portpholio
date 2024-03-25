export const skills = (skillsState) => {
  const skillsList = skillsState.skillsList;
  const skillsItem = skillsState.skillsItem;

  const toDictionary = skillsItem.reduce((acc, item) => {
    return { ...acc, [item.id]: item.items };
  }, {});
  return skillsList.map(item=>{
    return {id:item.id,title:item.title,skillsTitle:toDictionary[item.skillsItemId]}
  });
};
