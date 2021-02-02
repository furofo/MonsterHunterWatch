import clock from "clock";
import document from "document";

// Tick every second
clock.granularity = "seconds";

let circleIDArr = ["12", "1215", "1230", "1245", "1", "115", "130", "145", "2", "215", "230", "245", "3", "315", "330", "345", "4",
                  "415", "430", "445", "5", "515", "530", "545", "6", "615", "630", "645", "7", "715", "730", "745", "8", "815", "830",
                  "845", "9", "915", "930", "945", "10", "1015", "1030", "1045", "11", "1115", "1130", "1145"];
/*
let hourHand = document.getElementById("hours");
let minHand = document.getElementById("mins");
let secHand = document.getElementById("secs");
//23
// Returns an angle (0-360) for the current hour in the day, including minutes
function hoursToAngle(hours, minutes) {
  let hourAngle = (360 / 12) * hours;
  let minAngle = (360 / 12 / 60) * minutes;
  return hourAngle + minAngle;
}

// Returns an angle (0-360) for minutes
function minutesToAngle(minutes) {
  return (360 / 60) * minutes;
}

// Returns an angle (0-360) for seconds
function secondsToAngle(seconds) {
  return (360 / 60) * seconds;
}

*/
// Rotate the hands every tick
function updateClock() {
  let today = new Date();
  let hours = today.getHours() % 12;
  let mins = today.getMinutes();
  let secs = today.getSeconds();
  console.log("hours is " + hours + " minutes is " + mins + " seconds is " + secs);
 
  for(let i = 0; i < 49; i++) {
     let id = document.getElementById(circleIDArr[i]);
    
    if(i == 48) {
      for(let j = 0; j < 48; j++) {
       
        let id2 = document.getElementById(circleIDArr[j]);
        id2.style.visibility = "hidden"
        
      }
      
     break;
    }
    
    let id = document.getElementById(circleIDArr[i]);
    if(id.style.visibility == "hidden") {
       id.style.visibility = "visible";
       break;
    }
  } 
    
  
}

// Update the clock every tick event
clock.addEventListener("tick", updateClock);
