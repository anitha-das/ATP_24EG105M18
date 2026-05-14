/*Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
-------------------------------------------------------
🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

🎯 Task
    1. Create a shallow copy of user
    2. Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t"*/
let user = {
                id: 101,
                name: "Ravi",
                preferences: {
                        theme: "dark",
                        language: "en"
                      }
              };
 //creating copy of user
let copy={...user};
//changing the name in copied object
copy.name="Anitha";
// changing  the theme in the copied object
copy.preferences.theme="light";
// printing both copied and original object
console.log(copy,user);
//Observation:
//shallow copy only creates the copy of top elements.it doesn't have the copy of nested object or array
//name has been copied but whereas nested object i.e theme has not been copied 
// ,therefore when making changes in the copy object reflecting in the original object 






