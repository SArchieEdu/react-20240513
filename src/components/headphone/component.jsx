/* eslint-disable react/jsx-key */
import { useContext } from "react";
import { CountContext } from "../../contexts/count";
import { useCount } from "../../hooks/use-count";
import { Codecs } from "../codecs/component";
import { NewReviewForm } from "../new-review-form/component";
import { Reviews } from "../reviews/component";
import { useSelector } from "react-redux";

export const Headphone = ({ headphoneId }) => {
  const headphone = useSelector(
    (state) => state.headphone.entities[headphoneId]
  );
  const { count, increment, decrement } = useCount();

  if (!headphone) {
    return <div>No Headphone</div>;
  }

  const { name, codecs, reviews } = headphone;

  return (
    <CountContext.Provider value={count}>
      <div>
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
            <Codecs codecIds={codecs} />
          </div>
        )}
        <div>
          <h4>Reviews</h4>
          <Reviews reviewIds={reviews} />
          <NewReviewForm />
        </div>
      </div>
    </CountContext.Provider>
  );
};
