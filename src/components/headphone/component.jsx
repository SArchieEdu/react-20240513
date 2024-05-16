/* eslint-disable react/jsx-key */
import { Button } from "../button/component";
import { Codecs } from "../codecs/component";
import { Reviews } from "../reviews/component";

export const Headphone = ({ headphone }) => {
  return (
    <div>
      <h3>{headphone.name}</h3>
      <Button onClick={() => console.log("Buy: ", headphone.name)}>Buy</Button>
      <div>
        <h4>Codecs</h4>
        <Codecs codecs={headphone.codecs} />
      </div>
      <div>
        <h4>Reviews</h4>
        <Reviews reviews={headphone.reviews} />
      </div>
    </div>
  );
};
