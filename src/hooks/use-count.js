import { useCallback } from "react";
import { useState } from "react";

export const useCount = ({ initialValue = 0, min = 0, max = 6 } = {}) => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount((currentCount) =>
      currentCount === max ? currentCount : currentCount + 1
    );
  }, [max]);

  const decrement = useCallback(() => {
    setCount((currentCount) =>
      currentCount === min ? currentCount : currentCount - 1
    );
  }, [min]);

  const set = useCallback(
    (value) => {
      setCount(Math.max(Math.min(value, max), min));
    },
    [min, max]
  );
  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  return { count, increment, decrement, set, reset };
};
