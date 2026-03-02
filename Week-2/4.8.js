/*.OTP Countdown Simulator (Console App)
------------------------------------
        
        Simulate OTP sending flow in Node.js:
        
        Show “OTP Sent Successfully”
        
        Start 10-second countdown
        
        Allow resend only after countdown ends*/
        let seconds=10;
        console.log("OTP Sent successfully");
        let intervalId=setInterval(()=>{
            seconds--;
            console.log(`Resend after ${seconds}`)
            if(seconds==0)
                console.log("Resend");
            clearInterval(intervalId)
        },1000)
        