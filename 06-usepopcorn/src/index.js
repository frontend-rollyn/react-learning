import React, { useReducer, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));

//export default function Test() {
//  const [myRating, setMyRating] = useState(0);
//  return (
//    <div>
//      <StarRating color="red" maxRating={20} />
//      <h1>Rating is {myRating}</h1>
//    </div>
//  );
//}

const ACTIONS = {
  INC: "increment",
  DEC: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INC:
      return { count: state.count > 5 ? state.count : state.count + 1 };
    case ACTIONS.DEC:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export function Counter() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });

  function handleInc() {
    dispatch({ type: ACTIONS.INC });
  }
  function handleDec() {
    dispatch({ type: ACTIONS.DEC });
  }

  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <div>
        <button onClick={handleInc}>Increment</button>
        <button onClick={handleDec}>Decrement</button>
      </div>
    </div>
  );
}

root.render(
  <React.StrictMode>
    {/*<Counter />*/}
    <App />
    {/*<Test />*/}
  </React.StrictMode>
);
