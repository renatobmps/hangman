import { InputHTMLAttributes, PropsWithChildren } from "react";

export interface IRadioInput extends InputHTMLAttributes<HTMLInputElement> {
  strongText?: boolean;
  inputName: string;
  text: string;
}

export interface ISubmit extends PropsWithChildren {}