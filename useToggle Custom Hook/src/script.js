import React, {
  useState,
  useCallback
} from "https://esm.sh/react@18.2.0";
import ReactDom from "https://esm.sh/react-dom@18.2.0";

const useToggle = (arr, index = 0) => {
  const [currentIndex, setCurrentIndex] = useState(index);
  
  const toggle = useCallback(() => {
    return setCurrentIndex(prev => prev >= arr.length -1 ? 0 : prev + 1)
  },[arr])
  
  return [toggle, arr[currentIndex]];
}

const App = () => {
  //Use Toggle should return a function toggle(to increment the index when called) and the current value at that index
  const [toggle, value] = useToggle([1,2,3,4,5], 1);
  return <div>
    <h2>Current Value: </h2>
    <h1>{value}</h1>
    <button onClick={toggle}>Toggle</button>
  </div>
}

ReactDom.render(<App />, document.getElementById("root"));