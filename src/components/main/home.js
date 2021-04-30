import { Container, Badge, Row, Col, Image, Table } from "react-bootstrap";
import { useHistory } from "react-router";
import { MENUS } from "../../constants/constants";
import APPLICATION_URL from "../../constants/application-routes";

function Home() {
  const history = useHistory();
  const routeToHelp = (url) => {
    history.push(url);
  };

  const renderHelpRow = (imgUrl, title, routeUrl) => {
    return (
      <tr onClick={() => routeToHelp(routeUrl)}>
        <td>
          <Image
            src={imgUrl}
            style={{ width: "80px", height: "80px" }}
            className=" border-0"
            thumbnail
          />
          <h2 className="d-inline ml-5 ">{title}</h2>
        </td>
      </tr>
    );
  };

  return (
    <Container>
      <Table bordered hover size="sm">
        <tbody>
          {renderHelpRow(
            process.env.PUBLIC_URL + "/images/oxygen.jpg",
            MENUS.OXYGEN,
            APPLICATION_URL.OXYGEN
          )}
          {renderHelpRow(
            process.env.PUBLIC_URL + "/images/medicine.jpg",
            MENUS.REMDESIVIR,
            APPLICATION_URL.REMDESIVIR
          )}
          {renderHelpRow(
            process.env.PUBLIC_URL + "/images/ambulance.jpg",
            MENUS.AMBULANCE,
            APPLICATION_URL.AMBULANCE
          )}
          {renderHelpRow(
            process.env.PUBLIC_URL + "/images/plasma.jpg",
            MENUS.PLASMA,
            APPLICATION_URL.PLASMA
          )}
          {renderHelpRow(
            process.env.PUBLIC_URL + "/images/meals.jpg",
            MENUS.MEALS,
            APPLICATION_URL.MEALS
          )}
        </tbody>
      </Table>

      <Row className="mt-5">
        <Col>
          <p>
            <span>
              <Badge variant="danger">IMPORTANT</Badge>
            </span>
            <br />
            Please do not panic and source the help unless it is absolutely
            needed. This helps to reduce the burden on our Health care system
            and make the help available to the absolutely needed.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
