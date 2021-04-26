import { useState, useEffect } from "react";
import { Card, Button, Row, Col, Container, Badge } from "react-bootstrap";

import * as Oxygen from "../../content/data/oxygen.json";
import * as Ambulance from "../../content/data/ambulance.json";
import * as Plasma from "../../content/data/plasma.json";
import * as Medicines from "../../content/data/medicines.json";
import * as Others from "../../content/data/others.json";

import {
  HELP_CATEGORY,
  MEDICINES,
  OTHER_HELP,
} from "../../constants/constants";
import helpers from "../../helpers/helpers";
import HelpDetailsDialog from "../dialogs/help-details-dialog";

function HelpSummary(props) {
  const [helpDetailsShow, setHelpDetailsShow] = useState(false);
  const [helpProviders, setHelpProviders] = useState([]);
  const [provider, setProvider] = useState({});
  const { category } = props;

  useEffect(() => {
    loadHelpProviders();
  });

  const loadHelpProviders = () => {
    switch (category) {
      case HELP_CATEGORY.OXYGEN:
        setHelpProviders(Oxygen.providers);
        break;
      case HELP_CATEGORY.AMBULANCE:
        setHelpProviders(Ambulance.providers);
        break;
      case HELP_CATEGORY.PLASMA:
        setHelpProviders(Plasma.providers);
        break;
      case HELP_CATEGORY.REMDESIVIR:
        const remdesivir = Medicines.medicines.find(
          (m) => m.name === MEDICINES.REMDESIVIR
        );
        setHelpProviders(remdesivir.providers);
        break;
      case HELP_CATEGORY.MEALS:
        const meals = Others.helpCategories.find(
          (m) => m.name === OTHER_HELP.MEALS
        );
        setHelpProviders(meals.providers);
        break;
      default:
    }
  };

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

  const renderViewDetailsButton = (provider) => {
    return (
      <Button
        className="float-right"
        size="sm"
        variant="primary"
        onClick={() => {
          setProvider(provider);
          setHelpDetailsShow(true);
        }}
      >
        View details
      </Button>
    );
  };

  const renderOxygenProvider = (provider) => {
    return (
      <Container className="text-left" style={{ flexBasis: "25%" }}>
        <Card className="mb-3" style={{ maxWidth: "400px" }}>
          <Card.Header className="text-white bg-info text-center">
            {provider.name}
          </Card.Header>
          <Card.Body style={{ backgroundColor: "azure" }}>
            <Card.Text>
              {renderDetailRow("Location", provider.location)}
              {renderDetailRow("Contact", provider.contact)}
              {renderDetailRow("Availability", provider.availability)}
              {renderStatusBadge(provider.status)}
            </Card.Text>
            {renderViewDetailsButton(provider)}
          </Card.Body>
        </Card>
      </Container>
    );
  };

  const renderAmbulanceProvider = (provider) => {
    return (
      <Container className="text-left" style={{ flexBasis: "25%" }}>
        <Card className="mb-3" style={{ maxWidth: "400px" }}>
          <Card.Header className="text-white bg-info text-center">
            {provider.name}
          </Card.Header>
          <Card.Body style={{ backgroundColor: "azure" }}>
            <Card.Text>
              {renderDetailRow("Location", provider.location)}
              {renderDetailRow("Contact", provider.contact)}
              {renderDetailRow("Provider Type", provider.providerType)}
              {renderStatusBadge(provider.status)}
            </Card.Text>
            {renderViewDetailsButton(provider)}
          </Card.Body>
        </Card>
      </Container>
    );
  };

  const renderPlasmaProvider = (provider) => {
    return (
      <Container className="text-left" style={{ flexBasis: "25%" }}>
        <Card className="mb-3" style={{ maxWidth: "400px" }}>
          <Card.Header className="text-white bg-info text-center">
            {provider.name}
          </Card.Header>
          <Card.Body style={{ backgroundColor: "azure" }}>
            <Card.Text>
              {renderDetailRow("Location", provider.location)}
              {renderDetailRow("Contact", provider.contact)}
              {renderDetailRow("Blood Group", provider.bloodGroup)}
              {renderStatusBadge(provider.status)}
            </Card.Text>
            {renderViewDetailsButton(provider)}
          </Card.Body>
        </Card>
      </Container>
    );
  };

  const renderRemdesivirProvider = (provider) => {
    return (
      <Container className="text-left" style={{ flexBasis: "25%" }}>
        <Card className="mb-3" style={{ maxWidth: "400px" }}>
          <Card.Header className="text-white bg-info text-center">
            {provider.name}
          </Card.Header>
          <Card.Body style={{ backgroundColor: "azure" }}>
            <Card.Text>
              {renderDetailRow("Location", provider.location)}
              {renderDetailRow("Contact", provider.contact)}
              {renderDetailRow("Availability", provider.availability)}
              {renderStatusBadge(provider.status)}
            </Card.Text>
            {renderViewDetailsButton(provider)}
          </Card.Body>
        </Card>
      </Container>
    );
  };

  const renderMealsProvider = (provider) => {
    return (
      <Container className="text-left" style={{ flexBasis: "25%" }}>
        <Card className="mb-3" style={{ maxWidth: "400px" }}>
          <Card.Header className="text-white bg-info text-center">
            {provider.name}
          </Card.Header>
          <Card.Body style={{ backgroundColor: "azure" }}>
            <Card.Text>
              {renderDetailRow("Location", provider.location)}
              {renderDetailRow("Contact", provider.contact)}
              {renderDetailRow("Provider Type", provider.providerType)}
              {renderDetailRow("Service Hours", provider.serviceHours)}
              {renderStatusBadge(provider.status)}
            </Card.Text>
            {renderViewDetailsButton(provider)}
          </Card.Body>
        </Card>
      </Container>
    );
  };

  return (
    <Container fluid>
      <div
        className="mb-5 mt-5 text-center border"
        style={{ backgroundColor: "azure", height: "5%" }}
      >
        <h1>
          {category.charAt(0).toUpperCase() + category.slice(1)} Providers
        </h1>
      </div>
      <div className="d-flex flex-wrap">
        {category === HELP_CATEGORY.OXYGEN &&
          helpProviders.map((provider) => renderOxygenProvider(provider))}
        {category === HELP_CATEGORY.AMBULANCE &&
          helpProviders.map((provider) => renderAmbulanceProvider(provider))}
        {category === HELP_CATEGORY.PLASMA &&
          helpProviders.map((provider) => renderPlasmaProvider(provider))}
        {category === HELP_CATEGORY.REMDESIVIR &&
          helpProviders.map((provider) => renderRemdesivirProvider(provider))}
        {category === HELP_CATEGORY.MEALS &&
          helpProviders.map((provider) => renderMealsProvider(provider))}
      </div>
      <HelpDetailsDialog
        category={category}
        provider={provider}
        show={helpDetailsShow}
        onHide={() => setHelpDetailsShow(false)}
      />
    </Container>
  );
}

export default HelpSummary;
