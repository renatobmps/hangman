import { PropsWithChildren } from "react";
import './header_actions.css';

const HeaderActions = ({ children }: PropsWithChildren) => (
  <header className="hints__header-actions">{children}</header>
)

export default HeaderActions;