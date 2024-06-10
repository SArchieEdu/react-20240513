export const Codec = ({ codec }) => {
  if (!codec) {
    return;
  }

  return <span>{codec.type}</span>;
};
