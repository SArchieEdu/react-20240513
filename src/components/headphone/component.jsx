/* eslint-disable react/jsx-key */
import { useCount } from "../../hooks/use-count";
import { Codecs } from "../codecs/component";
import { Reviews } from "../reviews/component";
import { useEffect } from "react";

export const Headphone = ({ headphone }) => {
  const { count, increment, decrement, result } = useCount();

  useEffect(() => {
    increment();
  }, [increment, result]);

  if (!headphone) {
    return <div>No Headphone</div>;
  }

  const { name, codecs, reviews } = headphone;

  return (
    <div>
      <h3>{name}</h3>
      <div>
        <button onClick={decrement}>-</button>
        {count}
        <button onClick={increment}>+</button>
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
      </div>
    </div>
  );
};
