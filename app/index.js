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
function hoursToCircles(hours, mins) { // used to display circles from hours
  if(hours == 12 || hours == 0) { // if midnight or 12 sets everyting to blank but top cirlce
     for(let j = 0; j < 48; j++) {
        if(j == 0) {
          console.log(" hour is 0 or 12 ");
          
        }
       else{
        let id2 = document.getElementById(circleIDArr[j]);
        id2.style.visibility = "hidden";
       }
        
      }
  }
  
  
  
  
  else { // otherwise will find the circle that matches to hour and then lights it up
     for(let i = 0; i < 49; i++) {
     let id = document.getElementById(circleIDArr[i]);
     if(circleIDArr[i] == String(hours)) {
       id.style.visibility = "visible";
       let tempmins = mins;
       let j = i;
       while(tempmins >= 15) {
             j += 1;
             let id2 = document.getElementById(circleIDArr[j]);
             id2.style.visibility = "visible";
             tempmins -= 15;
             }
       break;
     }
      id.style.visibility = "visible";
    
    
  }
  } 
}

// maybe a funciton minutes to cirlce that sees if less then or greater than 15
// if less than 15 nothing
// if greater than - 15 light up next bubble
// check if greater than 15 again
// if not do nothing
// if greate r than 15 lightnup next bullbe - 15

function updateClock() {
  let today = new Date();
  let hours = today.getHours() % 12;

  let mins = today.getMinutes();
  let secs = today.getSeconds();
  //console.log("hours is " + hours + " minutes is " + mins + " seconds is " + secs);
  hoursToCircles(hours, mins);
  
  
 /*
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
    
  */
}

// Update the clock every tick event
clock.addEventListener("tick", updateClock);
