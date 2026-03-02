function validateTitle(title)
{
  return title>=3;
}
function validatePriority(priority)
{
    if(priority!="low"&&priority!="high"&&priority!="medium")
      return false;
    else
      return true;
}
function  validateDueDate(date)
{
  let dueDate=new Date('2026-02-26');
  let today=new Date();
  if(dueDate>today)
    return true;
  else
    return false;
}
export {validateTitle,validatePriority,validateDueDate};