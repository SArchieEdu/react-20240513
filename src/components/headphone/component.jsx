/* eslint-disable react/jsx-key */
import { useState } from "react";
import { Codecs } from "../codecs/component";
import { Reviews } from "../reviews/component";

export const Headphone = ({ headphone }) => {
  const [count, setCount] = useState(0);

  if (!headphone) {
    return <div>No Headphone</div>;
  }

  const { name, codecs, reviews } = headphone;

  const increment = () => {
    if (count < 6) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

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
