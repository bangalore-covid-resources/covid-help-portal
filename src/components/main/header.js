import { Navbar, Nav } from "react-bootstrap";
import APPLICATION_URL from "../../constants/application-routes";
import { MENUS } from "../../constants/constants";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      {/* <Navbar.Brand href={APPLICATION_URL.HOME}>
        Covid Resources India
      </Navbar.Brand> */}
      <Nav>
        <Nav.Link active href={APPLICATION_URL.HOME}>
          {MENUS.HOME}
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
