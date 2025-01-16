import { LinkProps } from "next/link";
import { HTMLAttributes, PropsWithChildren } from "react";

export interface IHint {
  isLoading?: boolean,
  title?: string,
  isActive?: boolean,
  total_words?: number,
}

export interface ILoading {
  delay_ms?: number
}

export type ICta = HTMLAttributes<HTMLButtonElement> | LinkProps & PropsWithChildren