/* eslint-disable react/jsx-key */
import { NewReviewForm } from "../new-review-form/component";
import { Reviews } from "../reviews/component";
import { Counter } from "../counter/component";
import { CodecsContainer } from "../codecs/container";
import { useGetHeadphonesQuery } from "../../redux/service/api";
import { selectHeadphoneFromResult } from "../../redux/service/api/selectors";
import { useParams } from "react-router-dom";
import { useCart } from "../../hooks/use-cart";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Headphone = () => {
  const { headphoneId } = useParams();
  const { data: headphone } = useGetHeadphonesQuery(undefined, {
    skip: !headphoneId,
    selectFromResult: selectHeadphoneFromResult(headphoneId),
  });
  const navigate = useNavigate();

  const { count, increment, decrement } = useCart(headphoneId);

  useEffect(() => {
    if (count === 5) {
      navigate("/promo", { replace: true });
    }
  }, [count, navigate]);

  if (!headphone) {
    return <div>No Headphone</div>;
  }

  const { name } = headphone;

  return (
    <div>
      <h3>{name}</h3>
      <Counter value={count} increment={increment} decrement={decrement} />
      <div>
        <h4>Codecs</h4>
        <CodecsContainer headphoneId={headphoneId} />
      </div>
      <div>
        <h4>Reviews</h4>
        <Reviews headphoneId={headphoneId} />
        <NewReviewForm headphoneId={headphoneId} />
      </div>
    </div>
  );
};
