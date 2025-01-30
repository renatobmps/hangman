import { useContext, useEffect, useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import TriggerMenu from "../Style/TriggerMenu";
import { IProps } from "./types";
import { UserContext } from "../../stores/UserContext";

export default function MenuFloatingTrigger(props: IProps) {
  const [currentUsername, setUsername] = useState<string>('no_name');
  const userContext = useContext(UserContext);

  useEffect(() => {
    setUsername(userContext.user.username);
  }, [userContext])

  return (
    <TriggerMenu onClick={() => props.handleOpenMenu(!props.currentState)}>
      {currentUsername}{" "}
      {!props.currentState ? <AiFillCaretDown /> : <AiFillCaretUp />}
    </TriggerMenu>
  );
};
