const root = document.getElementById("root");
let count = 0;

const add = () => {
  if (count === 0) {
    createProgressBar();
  }
  count += 1;
};

const createProgressBar = (time = 5) => {
  const progressBar = document.createElement("div");
  progressBar.classList.add("progressBar");
  progressBar.style.transition = `width ${time}s ease`;
  root.appendChild(progressBar);

  setTimeout(() => {
    progressBar.classList.add("finished");
  }, 50);

  progressBar.addEventListener("transitionend", () => {
    count -= 1;
    if (count >= 1) createProgressBar();
  });

  progressBar.removeEventListener("transitionend", () => {});
};
