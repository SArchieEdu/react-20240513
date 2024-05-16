/* eslint-disable react/jsx-key */
/* eslint-disable react/no-children-prop */
import React from "react";
import { createRoot } from "react-dom/client";
import { headphones } from "./constants/mock";
import { Button } from "./components/button/component";
import { Headphone } from "./components/headphone/component";

const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <Button onClick={() => console.log("Buy All")}>Buy All</Button>
    {headphones.map((headphone) => (
      <Headphone headphone={headphone} />
    ))}
  </div>
);

// root.render(
//   React.createElement("div", {
//     children: [
//       React.createElement("ul", {
//         children: headphones[0].codecs.map((codec) =>
//           React.createElement("li", { children: codec })
//         ),
//       }),
//     ],
//   })
// );
