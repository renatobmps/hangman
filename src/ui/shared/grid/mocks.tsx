import { HTMLAttributes } from "react";

export const Card = ({ $color = 'red', ...props }: HTMLAttributes<HTMLDivElement> & { $color?: string }) => (
  <div {...props} style={{ aspectRatio: '16/9', background: $color }} />
)
