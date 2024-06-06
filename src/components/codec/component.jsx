import { useSelector } from "react-redux";

export const Codec = ({ codecId }) => {
  const codec = useSelector((state) => state.codec.entities[codecId]);

  if (!codec) {
    return;
  }

  return <span>{codec.type}</span>;
};
