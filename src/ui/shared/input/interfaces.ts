import { InputHTMLAttributes, ReactElement } from "react";

export interface ICheckbox extends InputHTMLAttributes<HTMLElement> {
}

export interface IInputComponents {
  Checkbox(props: ICheckbox): ReactElement
}