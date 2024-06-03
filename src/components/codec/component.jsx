import { useContext } from "react";
import { CountContext } from "../../contexts/count";
import { useSelector } from "react-redux";

export const Codec = ({ codecId }) => {
  const codec = useSelector((state) => state.codec.entities[codecId]);

  const count = useContext(CountContext);
  console.log("Codec: ", count);

  return (
    <span>
      {codec.type} - {count}
    </span>
  );
};
