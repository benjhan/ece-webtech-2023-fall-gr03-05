"use client";

import { ContextProvider } from "./components/UserContext";

export function Providers({ children }) {
  return <ContextProvider>{children}</ContextProvider>;
}