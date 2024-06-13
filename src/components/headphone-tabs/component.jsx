/* eslint-disable react/jsx-key */

import { useSearchParams } from "react-router-dom";
import { Tab } from "../tab/component";
import styles from "./styles.module.css";

export const HeadphoneTabs = ({ headphones }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("search") || "";

  return (
    <div className={styles.root}>
      <input
        value={searchValue}
        onChange={(event) => setSearchParams({ search: event.target.value })}
      />
      {headphones
        .filter(
          ({ name }) =>
            name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
        )
        .map(({ id, name }) => (
          <Tab title={name} to={`${id}`} />
        ))}
    </div>
  );
};
