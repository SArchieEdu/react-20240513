/* eslint-disable react/jsx-key */
import { NewReviewForm } from "../new-review-form/component";
import { Reviews } from "../reviews/component";
import { useSelector } from "react-redux";
import { Counter } from "../counter/component";
import { selectHeadphoneCount } from "../../redux/ui/cart/selectors";
import { selectHeadphoneById } from "../../redux/entities/headphone/selectors";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/ui/cart";
import { useCallback } from "react";
import { CodecsContainer } from "../codecs/container";

export const Headphone = ({ id }) => {
  const headphone = useSelector((state) => selectHeadphoneById(state, id));
  const count = useSelector((state) => selectHeadphoneCount(state, id));
  const dispatch = useDispatch();

  const handleIncrement = useCallback(
    () => dispatch(increment(id)),
    [dispatch, id]
  );

  const handleDecrement = useCallback(
    () => dispatch(decrement(id)),
    [dispatch, id]
  );

  if (!headphone) {
    return <div>No Headphone</div>;
  }

  const { name, codecs, reviews } = headphone;

  return (
    <div>
      <h3>{name}</h3>
      <Counter
        value={count}
        increment={handleIncrement}
        decrement={handleDecrement}
      />
      {!!codecs?.length && (
        <div>
          <h4>Codecs</h4>
          <CodecsContainer headphoneId={id} />
        </div>
      )}
      <div>
        <h4>Reviews</h4>
        <Reviews reviewIds={reviews} />
        <NewReviewForm />
      </div>
    </div>
  );
};
