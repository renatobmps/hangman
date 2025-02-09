import { AnchorHTMLAttributes, HTMLAttributes, PropsWithChildren, ReactElement } from "react";
import { LinkProps } from "next/link";

export interface IMenuItemAsLink
  extends AnchorHTMLAttributes<HTMLAnchorElement> { }

export interface IMenuItemAsButton extends HTMLAttributes<HTMLButtonElement> { }

export type IMenuItem = IMenuItemAsLink | IMenuItemAsButton;

export interface ISectionAsText {
  title_as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  title: string;
}

export interface ISectionAsElement {
  title: ReactElement;
}

export type ISection = PropsWithChildren & (ISectionAsText | ISectionAsElement)

export interface ILayoutComponents {
  Root(props: PropsWithChildren): ReactElement;
  MenuItem(props: IMenuItem): ReactElement;
  Header(): ReactElement;
  Panel(props: PropsWithChildren): ReactElement;
  Section(props: ISection): ReactElement;
}

export default interface ILayout {
  Dashboard(props: PropsWithChildren): ReactElement;
}

