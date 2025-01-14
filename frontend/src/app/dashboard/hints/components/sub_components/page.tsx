import { PropsWithChildren } from "react";
import '../style.css';

const Page = ({ children }: PropsWithChildren) => (
  <div className="hints__page">{children}</div>
)

export default Page;