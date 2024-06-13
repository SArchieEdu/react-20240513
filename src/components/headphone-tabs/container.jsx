/* eslint-disable react/jsx-key */

import { HeadphoneTabs } from "./component";
import { useGetHeadphonesQuery } from "../../redux/service/api";

export const HeadphoneTabsContainer = () => {
  const { data: headphones, isLoading, isFetching } = useGetHeadphonesQuery();

  return (
    <>
      {isLoading && <div>Loading</div>}
      {isFetching && <div>isFetching</div>}
      {headphones?.length > 0 && <HeadphoneTabs headphones={headphones} />}
    </>
  );
};
