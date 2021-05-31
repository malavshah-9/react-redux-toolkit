import React, { useState } from "react";
import { Columns } from "react-bulma-components";
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
        <Columns>
          <Columns.Column size={2}>
            <Button buttonTxt="Increase" onClick={handleClick} />
          </Columns.Column>
          <Columns.Column size={2}>
            <Button
              buttonTxt="Decresess"
              onClick={() => setCounter((counter) => counter - 1)}
            />
          </Columns.Column>
        </Columns>
      </div>
    </div>
  );
}

export default Counter;
