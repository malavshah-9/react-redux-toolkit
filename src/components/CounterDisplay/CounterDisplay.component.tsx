import React from "react";

type CoutnerDisplay = {
  counter: number;
};

function CoutnerDisplay({ counter }: CoutnerDisplay): JSX.Element {
  return <div>Counter: {counter}</div>;
}

export default CoutnerDisplay;
