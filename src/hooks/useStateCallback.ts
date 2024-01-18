import { useCallback, useEffect, useRef, useState } from "react";

export type CallbackType<T> = (state: T) => void;
export type StateCallbackType<T> = (state: T, cb?: CallbackType<T>) => void;

export const useStateCallback = <T>(
  initialState: T
): [T, StateCallbackType<T>] => {
  const [state, setState] = useState(initialState);
  const callbackRef = useRef<CallbackType<T> | null>(null);

  const setStateCallback = useCallback((_state: T, cb?: CallbackType<T>) => {
    callbackRef.current = cb || null;
    setState(_state);
  }, []);

  useEffect(() => {
    if (callbackRef.current) {
      callbackRef.current(state);
      callbackRef.current = null;
    }
  }, [state]);

  return [state, setStateCallback];
};
