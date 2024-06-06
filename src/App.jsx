import { useState } from "react";
import { Layout } from "./components/layout/component";
import { Headphone } from "./components/headphone/component";
import { HeadphoneTabsContainer } from "./components/headphone-tabs/container";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getHeadphones } from "./redux/entities/headphone/thunks/get-headphones";

export const App = () => {
  const [activeHeadphoneId, setActiveHeadphoneId] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeadphones());
  }, [dispatch]);

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
