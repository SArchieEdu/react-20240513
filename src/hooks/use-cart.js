import { useCallback } from "react";
import { useSelector } from "react-redux";
import { selectHeadphoneCount } from "../redux/ui/cart/selectors";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/ui/cart";

export const useCart = (productId) => {
  const count = useSelector((state) => selectHeadphoneCount(state, productId));
  const dispatch = useDispatch();

  const incrementCallback = useCallback(() => {
    dispatch(increment(productId));
  }, [dispatch, productId]);

  const decrementCallback = useCallback(
    () => dispatch(decrement(productId)),
    [dispatch, productId]
  );

  return { count, increment: incrementCallback, decrement: decrementCallback };
};
