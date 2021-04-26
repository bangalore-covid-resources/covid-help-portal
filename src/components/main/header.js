import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useLocation } from "react-router";
import APPLICATION_URL from "../../constants/application-routes";
import { MENUS } from "../../constants/constants";

function Header() {
  const location = useLocation();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav activeKey={location.pathname}>
          <Nav.Link href={APPLICATION_URL.HOME}>{MENUS.HOME}</Nav.Link>
          <Nav.Link href={APPLICATION_URL.OXYGEN}>{MENUS.OXYGEN}</Nav.Link>
          <Nav.Link href={APPLICATION_URL.AMBULANCE}>
            {MENUS.AMBULANCE}
          </Nav.Link>
          <Nav.Link href={APPLICATION_URL.PLASMA}>{MENUS.PLASMA}</Nav.Link>
          <NavDropdown title={MENUS.MEDICINES}>
            <NavDropdown.Item href={APPLICATION_URL.REMDESIVIR}>
              {MENUS.REMDESIVIR}
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={MENUS.OTHERS}>
            <NavDropdown.Item href={APPLICATION_URL.MEALS}>
              {MENUS.MEALS}
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
