//function to validate title
function validateTitle(title) {
  return title >= 3; //check length (should be >=3)
}
//function to validate priority
function validatePriority(priority) {
  //check valid priority values
  if (priority != "low" && priority != "high" && priority != "medium")
    return false;
  else
    return true;
}
//function to validate due date
function validateDueDate(date) {
  let dueDate = new Date('2026-02-26'); //set due date
  let today = new Date(); //current date
  //check if due date is future date
  if (dueDate > today)
    return true;
  else
    return false;
}
//export all functions
export { validateTitle, validatePriority, validateDueDate };