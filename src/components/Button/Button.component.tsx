import React from "react";

type ButtonComponentProps = {
  buttonTxt: String | JSX.Element;
  onClick: React.MouseEventHandler;
};
function ButtonComponent({ buttonTxt, onClick }: ButtonComponentProps) {
  return (
    <button
      className="button is-rounded is-success is-inverted is-outlined"
      onClick={onClick}
    >
      {buttonTxt}
    </button>
  );
}

export default ButtonComponent;
