/*
                        Goal: Learn object cloning & adding new property
                        
                        You are given:
                                
                                let user = {
                                  name: "Ravi",
                                  city: "Hyderabad"
                                };
                        
                        
                        
                        Tasks
                        
                              -> Create a new object updatedUser
                              
                              -> Copy all properties from user
                              
                              -> Add a new property age: 25
                              
                              -> Print both objects
                        
                        
                        
                        ✅ Expected Output
                              { name: "Ravi", city: "Hyderabad" }
                              { name: "Ravi", city: "Hyderabad", age: 25 }
                        
                        👉 Original object should remain unchanged. */
 let user = {
 name: "Ravi",
 city: "Hyderabad"
};
//creating a new object
let updateUser={};
//use spread to copy user and add age
updateUser={...user,age:25};
console.log(user); //original object
console.log(updateUser); //updated object with age

 