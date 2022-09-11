import { useState } from "react";
import GameHeader from "./Style/GameHeader";
import LogoTop from "./LogoTop";
import MenuFloating from "./MenuFloating";
import MenuFloatingTrigger from "./MenuFloatingTrigger";
import MenuFloatingWrapper from "./Style/MenuFloatingWrapper";

export default function Menu(props: { user_name: string }) {
  const [openedMenu, setOpenedMenu] = useState(false);

  return (
    <GameHeader>
      <LogoTop />
      <MenuFloatingWrapper>
        <MenuFloatingTrigger
          currentState={openedMenu}
          handleOpenMenu={setOpenedMenu}
          user_name={props.user_name}
        />
        <MenuFloating openedMenu={openedMenu} user_name={props.user_name} />
      </MenuFloatingWrapper>
    </GameHeader>
  );
}
