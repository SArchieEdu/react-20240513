/* eslint-disable react/jsx-key */

import { useSelector } from "react-redux";
import { HeadphoneTabs } from "./component";
import { selectHeadphoneIds } from "../../redux/entities/headphone/selectors";

export const HeadphoneTabsContainer = ({ onTabClick, activeHeadphoneId }) => {
  const headphoneIds = useSelector(selectHeadphoneIds);

  if (!headphoneIds) {
    return;
  }

  return (
    <HeadphoneTabs
      headphoneIds={headphoneIds}
      onTabClick={onTabClick}
      activeHeadphoneId={activeHeadphoneId}
    />
  );
};
