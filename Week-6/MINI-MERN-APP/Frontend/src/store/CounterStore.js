import {create} from "zustand"
//create new store
export const useCounterStore=create((set)=>({
    //state
    newCounter:0,
    newCounter1:100,
    //add user state
    user:{name:"Anitha",email:"anitha@gmail.com",age:19},
    //change email
    changeEmail:()=>set({...user,email:"anithadas@gmail.com"}),
    //change age
    changeAge:()=>set({...user,age:20}),
    //change Name
    changeName:()=>set({...user,name:"Anitha Das"}),
    //function to modify the state
    increementCounter:()=>set(state=>({newCounter:state.newCounter+1})),
    increementCounter1:()=>set(state=>({newCounter1:state.newCounter1+1})),
     decreementCounter:()=>set(state=>({newCounter:state.newCounter-1})),
    reset:()=>set({newCounter:0}),
    //function to change newCounter to 500
    reset:()=>set({newCounter:500}),
    //function to decreement newCounter by 20
    decreementCounter:()=>set(state=>({newCounter:state.newCounter-20}))

}))