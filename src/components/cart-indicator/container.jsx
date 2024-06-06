import { useSelector } from "react-redux";
import { selectCartCount } from "../../redux/ui/cart/selectors";
import { CartIndicator } from "./component";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { clear } from "../../redux/ui/cart";

export const CartIndicatorContainer = () => {
  const count = useSelector(selectCartCount);

  const dispatch = useDispatch();

  const handleClearClick = useCallback(() => {
    dispatch(clear());
  }, [dispatch]);

  return <CartIndicator count={count} onClearClick={handleClearClick} />;
};
