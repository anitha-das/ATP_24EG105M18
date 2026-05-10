/*.OTP Countdown Simulator (Console App)
------------------------------------
        
        Simulate OTP sending flow in Node.js:
        
        Show “OTP Sent Successfully”
        
        Start 10-second countdown
        
        Allow resend only after countdown ends*/
       let seconds=10;
console.log("OTP Sent successfully"); //message when OTP sent

//run every 1 second
let intervalId=setInterval(()=>{
    seconds--; //decrease seconds
    console.log(`Resend after ${seconds}`)
    if(seconds==0)
        console.log("Resend"); //show resend message
    clearInterval(intervalId) //stop interval
},1000)