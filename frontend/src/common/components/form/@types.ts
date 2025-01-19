import { InputHTMLAttributes, LegacyRef, PropsWithChildren, PropsWithRef, ReactElement } from "react";

export interface IRadioInput extends InputHTMLAttributes<HTMLInputElement> {
  strongText?: boolean;
  inputName: string;
  text: string;
}

export interface IInputWrapper {
  children: Array<ReactElement>
}

export interface ICheckerInput extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  ref?: LegacyRef<HTMLInputElement>
}

export interface ITextInput extends InputHTMLAttributes<HTMLInputElement> {
  ref?: LegacyRef<HTMLInputElement>
}
