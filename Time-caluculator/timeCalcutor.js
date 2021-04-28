'use strict';

var totalHours = 0;
var totalMinutes = 0;
var totalTime = 0;
var historyTime = [];
const hourEle = document.querySelector('#hour');
const minuteEle = document.querySelector('#min');
const timeHistoryEle = document.querySelector('#time-history');
const totalTimeEle = document.querySelector('#total-time');
const calculateEle = document.querySelector('#calculate');
const clearEle = document.querySelector('#reset');

function addTime() {
  const hour = hourEle.value;
  const minutes = minuteEle.value;
  historyTime = [...historyTime, { hour, minutes }];
  calculateTime(hour, minutes);
  resetfeilds();
}

function resetfeilds() {
  hourEle.value = '';
  minuteEle.value = '';
  hourEle.focus();
}

function calculateTime(h, m) {
  totalHours += Number(h);
  totalMinutes += Number(m);
  if (totalMinutes >= 60) {
    totalHours += 1;
    totalMinutes -= 60;
  }
  totalTimeEle.textContent = `Total time: ${totalHours}:${totalMinutes} Hr`;
  let history = '';
  historyTime.forEach((element) => {
    history += `${element.hour}:${element.minutes} Hr, `;
  });
  timeHistoryEle.textContent = history;
  timeHistoryEle.style.padding = '10px';
}

function clear() {
  resetfeilds();
  timeHistoryEle.textContent = '';
  totalTimeEle.textContent = '';
}

clearEle.addEventListener('click', clear);
calculateEle.addEventListener('click', addTime);

function intial() {}
