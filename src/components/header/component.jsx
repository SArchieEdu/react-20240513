import { Link } from "react-router-dom";
import { CartIndicatorContainer } from "../cart-indicator/container";

export const Header = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/headphones">Headphones</Link>
      <CartIndicatorContainer />
    </header>
  );
};
