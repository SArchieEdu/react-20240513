import { useReducer } from "react";
import { useCreateReviewMutation } from "../../redux/service/api";
import { Button } from "../button/component";

const DEFAULT_FORM_VALUE = {
  text: "",
  rating: 5,
};

// action - {type: 'setName', payload: ''}
function reducer(state, { type, payload } = {}) {
  switch (type) {
    case "setText":
      return { ...state, text: payload };
    case "setRating":
      return { ...state, rating: payload };
    case "clear":
      return { ...DEFAULT_FORM_VALUE };
    default:
      return state;
  }
}

export const NewReviewForm = ({ headphoneId }) => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  const [createReview, { isLoading }] = useCreateReviewMutation();

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <div>
        <span>Text</span>
        <input
          type="text"
          value={form.text}
          onChange={(event) =>
            dispatch({ type: "setText", payload: event.target.value })
          }
        />
      </div>
      <div>
        <span>Rating</span>
        <input
          type="number"
          min="1"
          max="5"
          value={form.rating}
          onChange={(event) =>
            dispatch({ type: "setRating", payload: Number(event.target.value) })
          }
        />
      </div>
      <Button
        onClick={() => {
          createReview({
            headphoneId,
            newReview: {
              ...form,
              user: "hr83h29h9h9u12h9213",
            },
          });
          dispatch({ type: "clear" });
        }}
      >
        Save
      </Button>
    </div>
  );
};
