import { createContext, useState } from "react";
import { IUser, IProps } from "./types";

const initialValue = {
  username: "",
};

export const UserContext = createContext<IUser | any>(initialValue);

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
