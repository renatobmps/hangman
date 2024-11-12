import { JSXElementConstructor, ReactElement, ReactFragment } from "react";
import { SeoHead } from "../seo_head";

export interface IProps {
  userData: { name: string };
  children:
  | ReactElement<any, string | JSXElementConstructor<any>>
  | ReactFragment;
  callbackKeydown?: (event: any) => any;
  callbackClick?: (event: any) => any;
  pageTitle?: string;
  seoConfig?: SeoHead;
}