import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { changeCounterAction } from "../store/modules/home";

const Mine = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector(
    (state) => ({
      counter: state.home.counter,
    }),
    shallowEqual
  );

  function handleCounterClick() {
    dispatch(changeCounterAction(20));
  }
  return (
    <div>
      <h2>Mine</h2>
      <h3>{counter}</h3>
      <button onClick={handleCounterClick}>+20</button>
    </div>
  );
};

export default Mine;
