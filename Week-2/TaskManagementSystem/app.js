//import functions from task.js file
import {addTask,getAllTasks,completeTask} from './task.js';
//add new tasks
addTask("Mindset","high",'26-02-2026');
addTask("Psychology","xyz",'28-02-2026');
//get all tasks
let allTasks=getAllTasks();
//print all tasks
console.log(allTasks);
