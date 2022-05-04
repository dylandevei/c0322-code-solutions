let count = 3;
const countdown = setInterval(() => {
  if (count > 0) {
    console.log(count);
    count--;
  } else {
    console.log('Blast Off!');
    clearInterval(countdown);
  }
}, 1000);
