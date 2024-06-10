/* eslint-disable react/jsx-key */
import { NewReviewForm } from "../new-review-form/component";
import { Reviews } from "../reviews/component";
import { useSelector } from "react-redux";
import { Counter } from "../counter/component";
import { selectHeadphoneCount } from "../../redux/ui/cart/selectors";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/ui/cart";
import { useCallback } from "react";
import { CodecsContainer } from "../codecs/container";
import { useGetHeadphonesQuery } from "../../redux/service/api";
import { selectHeadphoneFromResult } from "../../redux/service/api/selectors";
import { Button } from "../button/component";

export const Headphone = ({ id }) => {
  const { data: headphone, refetch } = useGetHeadphonesQuery(undefined, {
    skip: !id,
    selectFromResult: selectHeadphoneFromResult(id),
  });

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
      <Button onClick={refetch}>refresh</Button>
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
        <Reviews headphoneId={id} />
        <NewReviewForm headphoneId={id} />
      </div>
    </div>
  );
};
