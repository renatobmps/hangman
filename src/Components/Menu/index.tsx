import { useState } from "react";
import * as S from "./style";
import LogoTop from "../LogoTop";
import MenuFloating from "../MenuFloating";
import MenuFloatingTrigger from "../MenuFloatingTrigger";
import MenuFloatingWrapper from "../Style/MenuFloatingWrapper";

export default function Menu() {
  const [openedMenu, setOpenedMenu] = useState(false);

  return (
    <S.GameHeader>
      <LogoTop />
      <MenuFloatingWrapper>
        <MenuFloatingTrigger
          currentState={openedMenu}
          handleOpenMenu={setOpenedMenu}
        />
        <MenuFloating openedMenu={openedMenu} />
      </MenuFloatingWrapper>
    </S.GameHeader>
  );
}
