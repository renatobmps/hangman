import { useEffect } from "react";
import { IUseWindowResize } from "./interfaces";

const useWindowResize = ({ listener }: IUseWindowResize) => {
  useEffect(() => {
    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, []);
}

export default useWindowResize