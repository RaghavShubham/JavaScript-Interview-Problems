const cssGenerator = (source, target) => {
  const result = [];

  while (source != target) {
    const nth = Array.from(target.parentNode.children).indexOf(target) + 1;

    const selector = `${target.tagName.toLowerCase()}:nth-child(${nth})`;

    result.unshift(selector);

    target = target.parentNode;
  }

  result.unshift(`${target.tagName.toLowerCase()}[id="${target.id}"]`);

  return result.join(" > ");
};

const source = document.getElementById("root");
const target = document.getElementById("target");

console.log(cssGenerator(source, target));
