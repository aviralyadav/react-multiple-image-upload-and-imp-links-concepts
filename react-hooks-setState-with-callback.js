import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useStateCallbackWrapper = (initilValue, callBack) => {
  const [state, setState] = useState(initilValue);
  useEffect(() => callBack(state), [state]);
  return [state, setState];
};

const callBack = state => {
  console.log("---------------", state);
};
function App() {
  const [count, setCount] = useStateCallbackWrapper(0, callBack);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
