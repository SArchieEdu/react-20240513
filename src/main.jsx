/* eslint-disable react/jsx-key */
/* eslint-disable react/no-children-prop */
import { createRoot } from "react-dom/client";
import { headphones } from "./constants/mock";
import { Headphone } from "./components/headphone/component";
import { Layout } from "./components/layout/component";

const root = createRoot(document.getElementById("root"));

root.render(
  <Layout>
    {headphones.map((headphone) => (
      <Headphone headphone={headphone} />
    ))}
  </Layout>
);
