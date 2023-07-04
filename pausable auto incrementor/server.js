const incrementor = (initial = 0, steps = 1) => {
  let value = initial;
  let isPaused = false;

  const intervalId = setInterval(() => {
    if (!isPaused) {
      value += steps;
      console.log(value);
    }
  }, 1000);

  return {
    pause: () => {
      isPaused = true;
    },
    resume: () => {
      isPaused = false;
    },
    stop: () => {
      clearInterval(intervalId);
    },
    value: value,
  };
};

const timer = incrementor(0, 5);
setTimeout(() => {
  timer.pause();
}, 5000);
setTimeout(() => {
  timer.resume();
}, 10000);
