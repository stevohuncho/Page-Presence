"use client";
import { useState, createContext, ReactNode } from "react";

export interface PagePresenceContextProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

export const PagePresenceContext = createContext<
  PagePresenceContextProps | undefined
>(undefined);

export interface PagePresenceProviderProps {
  children: ReactNode;
}

export const PagePresenceProvider: React.FC<PagePresenceProviderProps> = ({
  children,
}) => {
  const [show, setShow] = useState<boolean>(false);

  const contextValue: PagePresenceContextProps = {
    show,
    setShow,
  };

  return (
    <PagePresenceContext.Provider value={contextValue}>
      {children}
    </PagePresenceContext.Provider>
  );
};
