import "./styles.css";

let timers = [];
let timerName = 0;

(() => {
  var _setTimeout = window.setTimeout; // <-- Reference
  window.setTimeout = function () {
    const timer = _setTimeout.apply(this, arguments);
    timers.push(timer);
    return timer; // Suits for this case
  };
})();

const createTimer = () => {
  const printValue = ++timerName;
  setTimeout(() => {
    console.log(printValue);
  }, 2000);
};

const clear = () => {
  timers.forEach((id) => {
    clearTimeout(id);
    timers = [];
  });
};

document.getElementById("create-timer").addEventListener("click", createTimer);
document.getElementById("clear-timers").addEventListener("click", clear);
