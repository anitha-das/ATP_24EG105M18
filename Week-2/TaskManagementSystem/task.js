//import validation functions
import { validateTitle, validatePriority, validateDueDate } from "./validator.js";

let tasks = []; //array to store tasks
//function to add task
function addTask(title, priority, dueDate) {
    //check if inputs are valid
    if (!validateTitle(title) && !validatePriority(priority) && !validateDueDate(dueDate)) {
        return "Invalid Task"; //return if invalid
    }
    else {
        //add task to array
        tasks.push({ title, priority, dueDate });
    }
}
//function to get all tasks
function getAllTasks() {
    return tasks; //return all tasks
}
//function to complete task
function completeTask(taskId) {
    return "complete"; //dummy return
}
//export functions
export { addTask, getAllTasks, completeTask };