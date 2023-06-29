import React, {
useState,
useCallback } from
"https://esm.sh/react@18.2.0";
import ReactDom from "https://esm.sh/react-dom@18.2.0";

const useToggle = (arr, index = 0) => {
  const [currentIndex, setCurrentIndex] = useState(index);

  const toggle = useCallback(() => {
    return setCurrentIndex(prev => prev >= arr.length - 1 ? 0 : prev + 1);
  }, [arr]);

  return [toggle, arr[currentIndex]];
};

const App = () => {
  //Use Toggle should return a function toggle(to increment the index when called) and the current value at that index
  const [toggle, value] = useToggle([1, 2, 3, 4, 5], 1);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/
  React.createElement("h2", null, "Current Value: "), /*#__PURE__*/
  React.createElement("h1", null, value), /*#__PURE__*/
  React.createElement("button", { onClick: toggle }, "Toggle"));

};

ReactDom.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));