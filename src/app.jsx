import React, { useState } from "react";
import { Link, useRoutes } from "react-router-dom";
import routes from "./router";

const App = () => {
  const [counter, setCounter] = useState(0);

  function add() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h2>App</h2>
      <div>{counter}</div>
      <button onClick={add}>+1</button>
      {useRoutes(routes)}
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/mine">
          <button>Mine</button>
        </Link>
      </div>
    </div>
  );
};

export default App;
