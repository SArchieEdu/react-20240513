/* eslint-disable react/jsx-key */

import { HeadphoneTabContainer } from "../headphone-tab/container";

export const HeadphoneTabs = ({
  headphoneIds,
  onTabClick,
  activeHeadphoneId,
}) => {
  return (
    <div>
      {headphoneIds.map((id) => (
        <HeadphoneTabContainer
          id={id}
          onClick={() => onTabClick(id)}
          isActive={activeHeadphoneId === id}
        />
      ))}
    </div>
  );
};
