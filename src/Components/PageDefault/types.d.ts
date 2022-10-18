import { JSXElementConstructor, ReactElement, ReactFragment } from "react";

export interface IProps {
  userData: { name: string };
  children:
  | ReactElement<any, string | JSXElementConstructor<any>>
  | ReactFragment;
  callbackKeydown?: (event: any) => any;
  callbackClick?: (event: any) => any;
  pageTitle?: string;
}