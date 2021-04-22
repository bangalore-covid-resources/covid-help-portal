import { NavLink } from "react-router-dom";
import APPLICATION_URL from "../../constants/application-routes";

function Header() {
  return (
    <div>
      <NavLink to={APPLICATION_URL.HOME} activeClassName="active">
        Home
      </NavLink>
      <NavLink to={APPLICATION_URL.OXYGEN} activeClassName="active">
        Oxygen
      </NavLink>
      <NavLink to={APPLICATION_URL.MEDICINES} activeClassName="active">
        Medicines
      </NavLink>
      <NavLink to={APPLICATION_URL.AMBULANCE} activeClassName="active">
        Ambulance
      </NavLink>
      <NavLink to={APPLICATION_URL.PLASMA} activeClassName="active">
        Plasma
      </NavLink>
      <NavLink to={APPLICATION_URL.OTHERS} activeClassName="active">
        Others
      </NavLink>
    </div>
  );
}

export default Header;
