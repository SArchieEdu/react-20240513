import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./redux";
import { Layout } from "./components/layout/component";
import { Headphone } from "./components/headphone/component";

export const App = () => {
  const [activeHeadphoneId, setActiveHeadphoneId] = useState("MLXJ2LLA");

  return (
    <Provider store={store}>
      <Layout>
        {/* Tabs */}
        <Headphone headphoneId={activeHeadphoneId} />
      </Layout>
    </Provider>
  );
};
