import { useGetReviewsByProductIdQuery } from "../../redux/service/api";
import { Review } from "../review/component";

/* eslint-disable react/jsx-key */
export const Reviews = ({ headphoneId }) => {
  const { data: reviews, isLoading } =
    useGetReviewsByProductIdQuery(headphoneId);

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <ul>
      {reviews.map((review) => (
        <li>
          <Review review={review} />
        </li>
      ))}
    </ul>
  );
};
