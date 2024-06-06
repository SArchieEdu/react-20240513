import { useEffect } from "react";
import { Codecs } from "./component";
import { getCodecsByHeadphoneId } from "../../redux/entities/codec/thunks/get-codecs-by-headphone-id";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectHeadphoneCodecIds } from "../../redux/entities/headphone/selectors";

export const CodecsContainer = ({ headphoneId }) => {
  const dispatch = useDispatch();

  const codecIds = useSelector((state) =>
    selectHeadphoneCodecIds(state, headphoneId)
  );

  console.log(codecIds);

  useEffect(() => {
    dispatch(getCodecsByHeadphoneId(headphoneId));
  }, [dispatch, headphoneId]);

  if (!codecIds) {
    return;
  }

  return <Codecs codecIds={codecIds} />;
};
