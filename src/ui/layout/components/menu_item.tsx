import { IMenuItem, IMenuItemAsButton } from "../interfaces";
import * as S from "../styles";

const MenuItem = (props: IMenuItem) =>
  "href" in props ? (
    <S.NavigationMenuAsLink
      {...props}
      href={props.href!}
    />
  ) : (
    <S.NavigationMenuAsButton {...(props as IMenuItemAsButton)} />
  );

export default MenuItem;
