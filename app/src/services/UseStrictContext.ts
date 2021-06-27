import { createContext, useContext as reactUseContext } from "react";

/** Inspired by: https://juliangaramendy.dev/blog/strict-react-context. */
export function createStrictContext<T>(
  contextDisplayName: string
): readonly [React.Provider<T>, () => T] {
  const Context = createContext<T | null>(null);
  Context.displayName = contextDisplayName;

  function useContext() {
    const context = reactUseContext(Context);
    return context;
  }

  return [Context.Provider, useContext] as [React.Provider<T>, () => T];
}
