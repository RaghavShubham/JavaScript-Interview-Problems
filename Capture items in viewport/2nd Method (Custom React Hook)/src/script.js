import React, {
  useRef,
  useState,
  useEffect
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
      ovserver.unObserve(ref.current);
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

  return (
    <div ref={ref} key={index} className="block">
      {index}
    </div>
  );
};

const App = () => {
  const blocks = [];

  for (let i = 0; i < 20; i++) {
    blocks.push(<Element index={i + 1} />);
  }

  return <div className="wrapper">{blocks}</div>;
};

ReactDom.render(<App />, document.getElementById("root"));
