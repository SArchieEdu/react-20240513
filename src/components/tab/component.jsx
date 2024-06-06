import { Button } from "../button/component";

export const Tab = ({ title, onClick, isActive }) => {
  return (
    <Button onClick={onClick} disabled={isActive}>
      {title}
    </Button>
  );
};
