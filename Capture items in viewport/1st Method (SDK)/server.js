const blocks = document.querySelectorAll(".block");

function isInViewPort(block) {
  const dimensions = block.getBoundingClientRect();

  const viewHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const viewWidth = window.innerWidth || document.documentElement.clientWidth;

  return (
    dimensions.top >= 0 &&
    dimensions.left >= 0 &&
    dimensions.right <= viewWidth &&
    dimensions.bottom <= viewHeight
  );
}

function detect() {
  const result = [];

  for (let block of blocks) {
    if (isInViewPort(block)) {
      result.push(block.textContent);
    }
  }

  console.log(result);
}

const debounce = (func, delay) => {
  let timerId;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timerId);
    timerId = setTimeout(() => func.apply(context, args), delay);
  };
};

const debounceDetect = debounce(detect, 1000);

window.addEventListener("scroll", debounceDetect, false);
