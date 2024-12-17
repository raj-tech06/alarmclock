// // let now = new Date();
// // if (alarm <= now) {
// //   alarm.setDate(alarm.getDate() + 1); // Set it for the next day
// // }
// if (currentHour === alarmHour && currentMinute === alarmMinute) {
//     triggerAlarm();
// }




    let setAlarm=()=> {
        let alTime = document.querySelector("#alarm-time").value;

            
        // Convert it to Date object
        let alarm = new Date();
        let timeParts = alTime.split(':');

        alarm.setHours(timeParts[0]);
        alarm.setMinutes(timeParts[1]);
        alarm.setSeconds(0);
    
    
        let now = new Date();
      
        let Alarmtime = alarm - now;
    
        // ==========================Set the alarm=======================
        setTimeout(()=> {
        //   alert("Alarm ringing!");
        let audio = new Audio('mixkit-repeating-arcade-beep-1084.wav'); 
        audio.play();
    
        }, Alarmtime);
    
        // alert("Alarm set for " + alarmTime);
      }

