import FormControl from "./Style/FormControl";
import Input from "./Style/Input";
import Label from "./Style/Label";

export function FormControlInput(props: {
  stateName: string;
  label: string;
  inputType: string;
  stateValue: string;
  stateHandle: (event: { target: { name: string; value: string } }) => void;
  minLength?: string;
  required?: boolean;
  autoFocus?: boolean;
}) {
  return (
    <FormControl>
      <Label htmlFor={props.stateName}>{props.label}</Label>
      <Input
        type={props.inputType || "text"}
        id={props.stateName}
        name={props.stateName}
        value={props.stateValue}
        onInput={props.stateHandle}
        {...props}
      />
    </FormControl>
  );
}
