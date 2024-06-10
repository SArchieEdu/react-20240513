import { useState } from "react";
import { Layout } from "./components/layout/component";
import { Headphone } from "./components/headphone/component";
import { HeadphoneTabsContainer } from "./components/headphone-tabs/container";

export const App = () => {
  const [activeHeadphoneId, setActiveHeadphoneId] = useState();

  return (
    <Layout>
      <HeadphoneTabsContainer
        activeHeadphoneId={activeHeadphoneId}
        onTabClick={setActiveHeadphoneId}
      />
      {activeHeadphoneId && <Headphone id={activeHeadphoneId} />}
    </Layout>
  );
};
