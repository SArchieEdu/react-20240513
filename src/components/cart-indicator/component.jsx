import { Button } from "../button/component";

export const CartIndicator = ({ count, onClearClick }) => {
  return (
    <div>
      <span>Cart: {count}</span>
      {count > 0 && <Button onClick={onClearClick}>Clear</Button>}
    </div>
  );
};
