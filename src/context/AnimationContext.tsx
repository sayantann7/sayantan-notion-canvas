import { createContext, useContext, useEffect, useMemo, ReactNode } from 'react';

// Module-level flag persists across StrictMode remounts in dev
let hasAnimatedGlobal = false;

type AnimationContextValue = {
  shouldAnimate: boolean;
};

const AnimationContext = createContext<AnimationContextValue>({ shouldAnimate: true });

export function AnimationProvider({ children }: { children: ReactNode }) {
  const shouldAnimate = !hasAnimatedGlobal;

  useEffect(() => {
    if (!hasAnimatedGlobal) {
      hasAnimatedGlobal = true;
    }
  }, []);

  const value = useMemo(() => ({ shouldAnimate }), [shouldAnimate]);
  return <AnimationContext.Provider value={value}>{children}</AnimationContext.Provider>;
}

export function useAnimation() {
  return useContext(AnimationContext);
}
