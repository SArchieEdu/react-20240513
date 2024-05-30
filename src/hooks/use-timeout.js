import { useEffect } from "react";
import { useCallback } from "react";
import { useRef } from "react";

export const useTimeout = () => {
  const timerRef = useRef(null);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(
    (callback, timeout) => {
      stopTimer();

      timerRef.current = setTimeout(callback, timeout);
    },
    [stopTimer]
  );

  return { timerRef, stopTimer, startTimer };
};

export const useConditionTimeout = ({
  cancelAction,
  checkCanStop,
  timeout,
}) => {
  const { startTimer, stopTimer } = useTimeout();

  useEffect(() => {
    if (checkCanStop()) {
      stopTimer();
    }
  }, [checkCanStop, stopTimer]);

  useEffect(() => {
    startTimer(() => cancelAction(), timeout);

    return stopTimer;
  }, [cancelAction, stopTimer, startTimer, timeout]);
};
