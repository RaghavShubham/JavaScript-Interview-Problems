const getComputedColor = (colorCode) => {
  const div = document.createElement("div");
  div.style.color = colorCode;
  document.body.appendChild(div);
  const { color } = window.getComputedStyle(div);
  document.body.removeChild(div);
  return color;
};

//Find all elements in the DOM Tree that have the same attribute for eg:
// findEleAll("color", "#fff")

const findEleAll = (root, colorCode) => {
  const standardColor = getComputedColor(colorCode);

  const output = [];

  const search = (element) => {
    const eleColor = element?.style?.color;

    const eleComputedColor = getComputedColor(eleColor);

    if (eleComputedColor === standardColor) {
      output.push(element.textContent);
    }

    for (let child of element.children) {
      search(child);
    }
  };
  search(root);

  return output;
};

const root = document.getElementById("root");
console.log(findEleAll(root, "red"));
