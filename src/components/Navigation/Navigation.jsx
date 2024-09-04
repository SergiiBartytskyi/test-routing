import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const getNavLinkClass = (props) => {
  return clsx(css.link, props.isActive && css.active);
};

const Navigation = () => {
  return (
    <header>
      <ul className={css.container}>
        <li>
          <NavLink to="/" className={getNavLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/payments" className={getNavLinkClass}>
            Payments
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Navigation;
