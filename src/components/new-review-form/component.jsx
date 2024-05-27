import { useReducer } from "react";

const DEFAULT_FORM_VALUE = {
  name: "",
  text: "",
  address: "",
  rating: 5,
};

// action - {type: 'setName', payload: ''}
function reducer(state, { type, payload } = {}) {
  switch (type) {
    case "setName":
      return { ...DEFAULT_FORM_VALUE, name: payload };
    case "setText":
      return { ...state, text: payload };
    case "setAddress":
      return { ...state, address: payload };
    case "setRating":
      return { ...state, rating: payload };
    default:
      return state;
  }
}

export const NewReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  return (
    <div>
      <div>
        <span>Name</span>
        <input
          type="text"
          value={form.name}
          onChange={(event) =>
            dispatch({ type: "setName", payload: event.target.value })
          }
        />
      </div>
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
        <span>Address</span>
        <input
          type="text"
          value={form.address}
          onChange={(event) =>
            dispatch({ type: "setAddress", payload: event.target.value })
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
    </div>
  );
};
