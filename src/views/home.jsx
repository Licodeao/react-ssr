import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { changeCounterAction } from "../store/modules/home";

const Home = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector(
    (state) => ({
      counter: state.home.counter,
    }),
    shallowEqual
  );

  function handleCounterClick() {
    dispatch(changeCounterAction(10));
  }

  return (
    <div>
      <h2>Home</h2>
      <h3>{counter}</h3>
      <button onClick={handleCounterClick}>+10</button>
    </div>
  );
};

export default Home;
