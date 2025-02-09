import { useContext } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import TriggerMenu from "../Style/TriggerMenu";
import { IProps } from "./types";
import { UserContext } from "../../stores/UserContext";

export default function MenuFloatingTrigger(props: IProps) {
  const userContext = useContext(UserContext);
  return (
    <TriggerMenu onClick={() => props.handleOpenMenu(!props.currentState)}>
      {userContext?.user?.username ?? "noname"}{" "}
      {!props.currentState ? <AiFillCaretDown /> : <AiFillCaretUp />}
    </TriggerMenu>
  );
}
