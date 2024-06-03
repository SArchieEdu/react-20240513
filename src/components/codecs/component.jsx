import { Codec } from "../codec/component";

/* eslint-disable react/jsx-key */
export const Codecs = ({ codecIds }) => {
  return (
    <ul>
      {codecIds.map((id) => (
        <li>
          <Codec codecId={id} />
        </li>
      ))}
    </ul>
  );
};
