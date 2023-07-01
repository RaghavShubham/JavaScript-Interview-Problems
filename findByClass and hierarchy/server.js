const findByClass = (className) => {
  const root = document.getElementById("root");

  const searchElement = (node) => {
    let result = [];

    if (node.classList.contains(className)) result.push(node);

    for (const element of node.children) {
      const res = searchElement(element);
      result = [...result, ...res];
    }

    return result;
  };

  return searchElement(root);
};

const findByClassHierarchy = (hierarchy) => {
  const root = document.getElementById("root");

  const classes = hierarchy.split(">");

  const result = [];

  traverseDOM(root, classes, 0, result);

  return result;
};

const traverseDOM = (element, classes, index, result) => {
  const targetClass = classes[index];

  if (index === classes.length - 1 && element.classList.contains(targetClass)) {
    result.push(element);
    return;
  }

  for (let child of element.children) {
    if (element.classList.contains(targetClass)) {
      traverseDOM(child, classes, index + 1, result);
    } else {
      traverseDOM(child, classes, 0, result);
    }
  }
};

console.log(findByClass("c"));
console.log(findByClassHierarchy("b>c"));
