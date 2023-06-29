const dom = {
  type: "div",
  props: { id: "hello" },
  children: [{ type: "h1", children: "hello" }],
};

const dom1 = {
  type: "div",
  props: { id: "hello", class: "foo" },
  children: [
    { type: "h1", children: "HELLO" },
    {
      type: "p",
      children: [{ type: "span", props: { class: "bar" }, children: "World" }],
    },
  ],
};

const dom2 = {
  type: "section",
  props: { id: "hello-2", class: "foo-2" },
  children: [
    { type: "h1", children: "HELLO-2" },
    {
      type: "p",
      children: [
        { type: "span", props: { class: "bar-2" }, children: "World" },
      ],
    },
  ],
};

const generateDOM = (domObj, entry) => {
  const helper = (obj) => {
    const ele = document.createElement(obj.type);

    if (obj.props) {
      for (let attr in obj.props) {
        ele.setAttribute(attr, obj.props[attr]);
      }
    }

    if (typeof obj.children === "string") {
      ele.innerText = obj.children;
    } else {
      const fragment = document.createDocumentFragment();
      for (let child of obj.children) {
        fragment.appendChild(helper(child));
      }
      ele.appendChild(fragment);
    }
    return ele;
  };

  const generatedDOM = helper(domObj);
  entry.appendChild(generatedDOM);
};

const entry = document.getElementById("root");
generateDOM(dom2, entry);
