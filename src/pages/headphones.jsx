import { HeadphoneTabsContainer } from "../components/headphone-tabs/container";
import { Outlet } from "react-router-dom";

export const HeadphonesPage = () => {
  return (
    <div>
      <HeadphoneTabsContainer />
      <Outlet />
    </div>
  );
};
