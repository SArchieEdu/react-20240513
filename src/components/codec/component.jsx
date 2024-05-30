import { useContext } from "react";
import { CountContext } from "../../contexts/count";

export const Codec = ({ codec }) => {
  const count = useContext(CountContext);
  console.log("Codec: ", count);

  return (
    <span>
      {codec} - {count}
    </span>
  );
};
