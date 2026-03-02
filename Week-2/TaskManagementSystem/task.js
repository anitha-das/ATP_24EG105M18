import {validateTitle,validatePriority,validateDueDate} from "./validator.js";
let  tasks=[];
function addTask(title,priority,dueDate)
{
    if(!validateTitle(title)&&!validatePriority(priority)&&!validateDueDate(dueDate))
    {
         return "Invalid Task";
    }
    else
    {
    tasks.push({title,priority,dueDate});
    }
}
function  getAllTasks()
{
    return  tasks;
}
function completeTask(taskId)
{
    return "complete";
}
export {addTask,getAllTasks,completeTask};
