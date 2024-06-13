import classNames from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

export const Tab = ({ title, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(styles.root, {
          [styles.active]: isActive,
        })
      }
    >
      {({ isActive }) =>
        `${isActive ? "<<" : ""}${title}${isActive ? ">>" : ""}`
      }
    </NavLink>
  );
};
