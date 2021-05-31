import React, { useState } from "react";
import CounterDisplay from "../../components/CounterDisplay/CounterDisplay.component";
import Button from "../../components/Button/Button.component";
import "./Counter.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { increment } from "../../features/counter/counter-slice";

function Counter() {
  const value = useAppSelector((state) => state.counterSlice.value);
  const dispatch = useAppDispatch();
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    dispatch(increment());
  };
  return (
    <div className="hero is-fullheight isFlex is-align-items-center is-justify-content-center">
      <div>
        <CounterDisplay counter={value} />
        <div>
          <div>
            <Button buttonTxt="Increase" onClick={handleClick} />
          </div>
          <div>
            <Button
              buttonTxt="Decresess"
              onClick={() => setCounter((counter) => counter - 1)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
