import { InputHTMLAttributes, ReactElement } from 'react';

export type ICheckbox = InputHTMLAttributes<HTMLElement>;

export interface IInputComponents {
  Checkbox(props: ICheckbox): ReactElement;
}
