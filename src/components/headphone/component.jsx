/* eslint-disable react/jsx-key */
import { useRef } from "react";
import { useCount } from "../../hooks/use-count";
import { Codecs } from "../codecs/component";
import { NewReviewForm } from "../new-review-form/component";
import { Reviews } from "../reviews/component";
import { useEffect } from "react";
import { useCallback } from "react";

const useTimeout = () => {
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

const useConditionTimeout = ({ cancelAction, checkCanStop, timeout }) => {
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

export const Headphone = ({ headphone }) => {
  const { count, increment, decrement, reset } = useCount();
  const checkCanStopTimer = useCallback(() => count > 3, [count]);
  const containerRef = useRef();

  useConditionTimeout({
    cancelAction: reset,
    checkCanStop: checkCanStopTimer,
    timeout: 5000,
  });

  useEffect(() => {}, []);

  if (!headphone) {
    return <div>No Headphone</div>;
  }

  const { name, codecs, reviews } = headphone;

  return (
    <div ref={containerRef}>
      <h3>{name}</h3>
      <div>
        <button
          onClick={() => {
            decrement();
          }}
        >
          -
        </button>
        {count}
        <button
          onClick={() => {
            increment();
          }}
        >
          +
        </button>
      </div>
      {!!codecs?.length && (
        <div>
          <h4>Codecs</h4>
          <Codecs codecs={codecs} />
        </div>
      )}
      <div>
        <h4>Reviews</h4>
        <Reviews reviews={reviews} />
        <NewReviewForm />
      </div>
    </div>
  );
};
