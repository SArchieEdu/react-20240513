/* eslint-disable react/jsx-key */

import { Tab } from "../tab/component";

export const HeadphoneTabs = ({
  headphones,
  onTabClick,
  activeHeadphoneId,
}) => {
  return (
    <div>
      {headphones.map(({ id, name }) => (
        <Tab
          title={name}
          onClick={() => onTabClick(id)}
          isActive={activeHeadphoneId === id}
        />
      ))}
    </div>
  );
};
