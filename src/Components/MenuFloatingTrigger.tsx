import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { IMenuFloatingTriggerProps } from "../adapters/interfaces";
import TriggerMenu from "./Style/TriggerMenu";

export default function MenuFloatingTrigger(props: IMenuFloatingTriggerProps) {
  return (
    <TriggerMenu onClick={() => props.handleOpenMenu(!props.currentState)}>
      {props.user_name}{" "}
      {!props.currentState ? <AiFillCaretDown /> : <AiFillCaretUp />}
    </TriggerMenu>
  );
}
