import React, {
  useRef,
  useState,
  useEffect,
} from "https://esm.sh/react@18.2.0";
import ReactDom from "https://esm.sh/react-dom@18.2.0";

const useOnScreen = (ref) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observer = new IntersectionObserver(
    ([element]) => {
      setIsIntersecting(element.isIntersecting);
    },
    { threshold: 1.0 }
  );

  useEffect(() => {
    observer.observe(ref.current);

    () => {
      observer.unObserve(ref.current);
    };
  }, []);

  return isIntersecting;
};

const Element = ({ index }) => {
  const ref = useRef();
  const isInViewPort = useOnScreen(ref);

  if (isInViewPort) {
    console.log(index);
  }

  return /*#__PURE__*/ React.createElement(
    "div",
    { ref: ref, key: index, className: "block" },
    index
  );
};

const App = () => {
  const blocks = [];

  for (let i = 0; i < 20; i++) {
    blocks.push(/*#__PURE__*/ React.createElement(Element, { index: i + 1 }));
  }

  return /*#__PURE__*/ React.createElement(
    "div",
    { className: "wrapper" },
    blocks
  );
};

ReactDom.render(
  /*#__PURE__*/ React.createElement(App, null),
  document.getElementById("root")
);
