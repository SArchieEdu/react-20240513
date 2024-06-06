import { useSelector } from "react-redux";
import { Tab } from "../tab/component";
import { selectHeadphoneById } from "../../redux/entities/headphone/selectors";

export const HeadphoneTabContainer = ({ id, onClick, isActive }) => {
  const headphone = useSelector((state) => selectHeadphoneById(state, id));

  return <Tab title={headphone.name} onClick={onClick} isActive={isActive} />;
};
