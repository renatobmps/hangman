import { HTMLAttributes, PropsWithChildren, ReactElement } from "react";
import { LinkProps } from 'next/link'

export interface IMenuItemAsLink extends HTMLAttributes<HTMLAnchorElement>, LinkProps {
}

export interface IMenuItemAsButton extends HTMLAttributes<HTMLButtonElement> {
}

export type IMenuItem = (IMenuItemAsLink | IMenuItemAsButton);

export interface ILayoutComponents {
  Root: (props: PropsWithChildren) => ReactElement;
  MenuItem: (props: IMenuItem) => ReactElement;
}

export default interface ILayout { }