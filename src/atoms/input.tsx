import * as React from "react";

interface IInputProps {
  value: string;
  handleChange(e: any): void;
}
const Input: React.StatelessComponent<IInputProps> = (props) => {
  return (
    <input type="text" placeholder="Input Name" value={props.value} onChange={props.handleChange} />
  );
};

export default Input;
