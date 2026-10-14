import { PropsWithChildren } from 'react';

export const _Title = ({ children }: PropsWithChildren) => {
  return (
    <h1 className="p-[0.4rem] text-center w-full font-title text-[2rem] font-bold tracking-widest">
      {children}
    </h1>
  );
};
