import clock from "clock";
import document from "document";

clock.granularity = "minutes"; // seconds, minutes, or hours
let circle = document.getElementById("mins");
let switcher = 0;
clock.addEventListener("tick", (evt) => {
  console.log("before if statmetnt his goes");
  // tick every minute
  if(switcher == 0) {
    switcher = 1;
     console.log("switcher activated switch is ") + switcher;
   circle.style.visibility = "visible";
  }
  
    
    else {
       switcher = 0;
       console.log("switcher activated switch is ") + switcher;
       circle.style.visibility = "hidden";
    }
    
});