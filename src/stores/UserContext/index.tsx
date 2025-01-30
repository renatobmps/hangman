import { createContext, Dispatch, SetStateAction, useState } from "react";
import { IUser, IProps } from "./types";

const initialValue = {
  username: "",
};

export const UserContext = createContext<{
  user: IUser,
  setUser?: Dispatch<SetStateAction<IUser>>,
}>({ user: initialValue });

export default function Provider(props: IProps): JSX.Element {
  const [user, setUser] = useState<IUser>(initialValue);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
