/* eslint-disable react/jsx-key */

import { HeadphoneTabs } from "./component";
import { useGetHeadphonesQuery } from "../../redux/service/api";

export const HeadphoneTabsContainer = ({ onTabClick, activeHeadphoneId }) => {
  const { data: headphones, isLoading, isFetching } = useGetHeadphonesQuery();
  console.log(headphones);

  return (
    <>
      {isLoading && <div>Loading</div>}
      {isFetching && <div>isFetching</div>}
      {headphones?.length > 0 && (
        <HeadphoneTabs
          headphones={headphones}
          onTabClick={onTabClick}
          activeHeadphoneId={activeHeadphoneId}
        />
      )}
    </>
  );
};
