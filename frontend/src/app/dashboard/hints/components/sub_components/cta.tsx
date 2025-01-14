import { ICta } from "../hints.interfaces";

const Cta = ({ children, ...buttonProps }: ICta) => {
  const hasClick = !!buttonProps.onClick || buttonProps.onDoubleClick;
  const classes = [
    "hints__cta",
    hasClick ? 'click' : undefined
  ].filter(className => typeof className === "string").join(" ");

  return (
    <button
      title={typeof children === 'string' && hasClick ? children : undefined}
      {...buttonProps} className={classes}
    >
      {children}
    </button>
  )
}

export default Cta;
