import { Codecs } from "./component";
import { useGetCodecsByProductIdQuery } from "../../redux/service/api";

export const CodecsContainer = ({ headphoneId }) => {
  const { data: codecs, isFetching } =
    useGetCodecsByProductIdQuery(headphoneId);

  if (isFetching) {
    return <div>Loading</div>;
  }

  if (!codecs) {
    return;
  }

  return <Codecs codecs={codecs} />;
};
