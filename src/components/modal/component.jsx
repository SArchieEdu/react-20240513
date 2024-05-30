import { createPortal } from "react-dom";

export const Modal = () => {
  return (
    <>
      {createPortal(
        <div style={{ position: "absolute", top: 0, left: 0 }}>Hello</div>,
        document.getElementById("modal")
      )}
    </>
  );
};
