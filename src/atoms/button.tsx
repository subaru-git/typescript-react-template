import * as React from "react";

interface IButtonProps {
  handleClick(): void;
}
const Button: React.StatelessComponent<IButtonProps> = (props) => {
  return (
    <button onClick={props.handleClick}>Send</button>
  );
};

export default Button;
