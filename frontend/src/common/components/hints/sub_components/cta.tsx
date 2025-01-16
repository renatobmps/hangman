import './cta.css'
import { ICta } from "../hints.interfaces";
import Button from '@/common/components/button';

const Cta = ({ children, ...buttonProps }: ICta) => {
  const hasClick = 'href' in buttonProps || (!!buttonProps.onClick || buttonProps.onDoubleClick);

  const classes = [
    "hints__cta",
    hasClick ? 'click' : undefined
  ].filter(className => typeof className === "string").join(" ");

  return (
    <span className={classes}>
      <Button.Primary
        title={typeof children === 'string' && hasClick ? children : undefined}
        {...buttonProps}
        autoFocus
      >
        {children}
      </Button.Primary>
    </span>
  )
}

export default Cta;
