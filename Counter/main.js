const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const countdown = document.getElementById("countdown");
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
let check, time, defaultValue;
var isStopped = false;
//function to start time
// function start() {
//   isStopped = true;
//   startBtn.disabled = true;
//   var num = document.getElementById("number");
//   if (num.value == "") {
//     alert("error");
//   } else {
//     counter();
//   }
// }

//function to start time
function start() {
  isStopped = true;
  startBtn.disabled = true;
  var num = document.getElementById("number");
  if (num.value == "") {
    alert("error");
  } else {
    counter();
  }
}



// //function to stop time
// function stop() {
//   if (isStopped) {
//     clearInterval(check);
//     startBtn.disabled = false;
//     isStopped = false;
//     stopBtn.innerText = "Resume";
//   } else {
//     check = setInterval(updateCountDown, 1000);
//     startBtn.disabled = true;
//     isStopped = true;
//     stopBtn.innerText = "Pause";
//   }
// }

//function to display time
function counter() {
  const startingMinutes = document.getElementById("number").value;
  defaultValue = startingMinutes * 60;
  time = defaultValue;
  console.log(time);

  check = setInterval(updateCountDown, 1000);
}
function updateCountDown() {
  time--;

  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  countdown.innerHTML = `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;

  if (time <= 0) {
    stop();
    startBtn.disabled = false;
    time = defaultValue;
    alert("Time out");
  }
}
