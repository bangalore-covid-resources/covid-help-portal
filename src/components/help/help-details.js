import { Row, Col, Container, Badge } from "react-bootstrap";

import { HELP_CATEGORY, NOT_AVAILABLE } from "../../constants/constants";
import helpers from "../../helpers/helpers";

function HelpDetails(props) {
  const { category, provider } = props;

  const renderDetailRow = (title, value) => {
    return (
      <Row>
        <Col>
          <label className="font-weight-bold">{title}:</label>
        </Col>
        <Col>
          <p>{helpers.getStringValue(value)}</p>
        </Col>
      </Row>
    );
  };

  const renderDetailArrayRow = (title, value) => {
    return (
      <Row>
        <Col>
          <label className="font-weight-bold">{title}:</label>
        </Col>
        <Col>
          <p>
            {value?.length === 0 && NOT_AVAILABLE}
            {value?.length !== 0 &&
              value?.map((v) => {
                return (
                  <div>
                    {v}
                    <br />
                  </div>
                );
              })}
          </p>
        </Col>
      </Row>
    );
  };

  const renderStatusBadge = (status) => {
    return (
      <Row>
        <Col>
          {" "}
          <label className="font-weight-bold">Status:</label>
        </Col>
        <Col>
          <Badge variant={helpers.getStatusBadgeVariant(status)}>
            {status}
          </Badge>
        </Col>
      </Row>
    );
  };

  const renderOxygenDetails = () => {
    return (
      <Container className="text-left">
        {renderDetailRow("Location", provider.location)}
        {renderDetailRow("Contact", provider.contact)}
        {renderDetailArrayRow("Alternate Contacts", provider.alternateContacts)}
        {renderDetailRow("Address", provider.address)}
        {renderDetailRow("Deposit", provider.deposit)}
        {renderDetailRow("Charge", provider.charge)}
        {renderDetailRow("Availability", provider.availability)}
        {renderDetailRow("Other details", provider.otherDetails)}
        {renderStatusBadge(provider.status)}
      </Container>
    );
  };

  const renderAmbulanceDetails = () => {
    return (
      <Container className="text-left">
        {renderDetailRow("Location", provider.location)}
        {renderDetailRow("Contact", provider.contact)}
        {renderDetailRow("Provider Type", provider.providerType)}
        {renderDetailArrayRow("Alternate Contacts", provider.alternateContacts)}
        {renderDetailRow("Cost", provider.cost)}
        {renderDetailRow("Other Details", provider.otherDetails)}
        {renderStatusBadge(provider.status)}
      </Container>
    );
  };

  const renderPlasmaDetails = () => {
    return (
      <Container className="text-left">
        {renderDetailRow("Location", provider.location)}
        {renderDetailRow("Contact", provider.contact)}
        {renderDetailRow("Blood Group", provider.bloodGroup)}
        {renderDetailRow("Other Details", provider.otherDetails)}
        {renderStatusBadge(provider.status)}
      </Container>
    );
  };

  const renderRemdesivirDetails = () => {
    return (
      <Container className="text-left">
        {renderDetailRow("Location", provider.location)}
        {renderDetailRow("Contact", provider.contact)}
        {renderDetailArrayRow("Alternate Contacts", provider.alternateContacts)}
        {renderDetailRow("Availability", provider.availability)}
        {renderDetailRow("Other Details", provider.otherDetails)}
        {renderStatusBadge(provider.status)}
      </Container>
    );
  };

  const renderMealsDetails = () => {
    return (
      <Container className="text-left">
        {renderDetailRow("Location", provider.location)}
        {renderDetailRow("Contact", provider.contact)}
        {renderDetailRow("Provider Type", provider.providerType)}
        {renderDetailRow("Service Areas", provider.serviceAreas)}
        {renderDetailRow("Service Hours", provider.serviceHours)}
        {renderDetailRow("Delivery Option", provider.deliveryOption)}
        {renderDetailRow("Cost", provider.cost)}
        {renderDetailRow("Other Details", provider.otherDetails)}
        {renderStatusBadge(provider.status)}
      </Container>
    );
  };

  return (
    <div>
      {category === HELP_CATEGORY.OXYGEN && renderOxygenDetails()}
      {category === HELP_CATEGORY.AMBULANCE && renderAmbulanceDetails(provider)}
      {category === HELP_CATEGORY.PLASMA && renderPlasmaDetails(provider)}
      {category === HELP_CATEGORY.REMDESIVIR &&
        renderRemdesivirDetails(provider)}
      {category === HELP_CATEGORY.MEALS && renderMealsDetails(provider)}
    </div>
  );
}

export default HelpDetails;
