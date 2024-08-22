"use client";
import { useContext } from "react";
import {
  PagePresenceContext,
  PagePresenceContextProps,
} from "../pagePresenceProvider";

export const usePagePresence = (): PagePresenceContextProps => {
  const context = useContext(PagePresenceContext);
  if (!context) {
    throw new Error(
      "usePagePresence must be used within a PagePresenceProvider"
    );
  }
  return context;
};
