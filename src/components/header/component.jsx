import { useState } from "react";
import { Modal } from "../modal/component";

export const Header = () => {
  const [isVisible, setIsVisible] = useState();

  return (
    <header>
      Header
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "close" : "open"}
      </button>
      {isVisible ? <Modal /> : null}
    </header>
  );
};
