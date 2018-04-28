import * as React from "react";
import Button from "../atoms/button";
import Input from "../atoms/input";
import Output from "../atoms/output";

interface IFormProps {
  hello: string;
}
interface IFormState {
  inputValue: string;
  outputValue: string;
}
class Form extends React.Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);
    this.state = {
      inputValue: "",
      outputValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  public handleChange(e: any): void {
    this.setState({
      inputValue: e.target.value,
    });
  }
  public handleClick(): void {
    this.setState({
      inputValue: "",
      outputValue: this.state.inputValue,
    });
  }
  public render() {
    return (
      <div>
        <Input value={this.state.inputValue} handleChange={this.handleChange} />
        <Button handleClick={this.handleClick} />
        <Output hello="Hello" value={this.state.outputValue} />
      </div>
    );
  }
}

export default Form;
