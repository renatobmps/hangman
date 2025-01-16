import { LinkProps } from "next/link";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

export type IPrimary = ButtonHTMLAttributes<HTMLButtonElement> | LinkProps & PropsWithChildren
