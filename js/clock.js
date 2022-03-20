const clock = document.querySelector('#clock');
const message = document.querySelector('#login p');

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  // const seconds = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = `${hours}:${minutes}`;
  if (hours >= '00' && hours < '12') {
    message.innerText = 'Good morning,';
  } else if (hours >= 12 && hours < 18) {
    message.innerText = 'Good afternoon,';
  } else {
    message.innerText = 'Good evening,';
  }
}

getClock();
setInterval(getClock, 1000);
