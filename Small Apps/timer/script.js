const timer = document.getElementById('timer');
let time = 0;
let interval;

function startTimer() {
  interval = setInterval(() => {
    time++;
    timer.innerHTML = time;
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  time = 0;
  timer.innerHTML = time;
}

function saveTimer() {
  localStorage.setItem('timer', time);
}

function loadTimer() {
  time = localStorage.getItem('timer');
  timer.innerHTML = time;
}   

function clearTimer() {
  localStorage.removeItem('timer');
  time = 0;
  timer.innerHTML = time;
}