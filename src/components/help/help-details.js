import { HELP_CATEGORY, NOT_AVAILABLE } from "../../constants/constants";
import helpers from "../../helpers/helpers";

function HelpDetails(props) {
  const { category, provider } = props;

  const renderDetailRow = (title, value) => {
    return (
      <div className="d-flex justify-content-between">
        <span className="font-weight-bold">
          {title}:
        </span>
        {title === "Contact" ?
          <a style={{ color: "blue" }} href={"tel:+91" + helpers.getStringValue(value)}>
            <u>{helpers.getStringValue(value)}</u>
          </a>
          :
          <span className="text-black-50">{helpers.getStringValue(value)}</span>
        }
      </div>
    );
  };

  const renderDetailArrayRow = (title, value) => {
    return (
      <>
        <div className="d-flex justify-content-between">
          <span className="font-weight-bold">
            {title}:
        </span>
          <br />
        </div>
        <div>
          {value?.length === 0 && <span className="text-black-50">{NOT_AVAILABLE}</span>}
          {
            value?.length !== 0 &&
            value?.map((v) => {
              return (
                <div>
                  <span className="text-black-50">{v}</span>
                  <br />
                </div>
              );
            })
          }
        </div>
      </>
    );
  }
  const renderStatusBadge = (status) => {
    return (
      <div className="d-flex justify-content-between">
        <span className="font-weight-bold">
          Contact Status:
      </span>
        {helpers.getStatusBadgeVariant(status)}
      </div>
    );
  };

  const renderOxygenDetails = () => {
    return (
      <div className="my-4 font-size-sm p-3 bg-secondary rounded-sm">
        {renderDetailRow("Location", provider.location)}
        {renderDetailRow("Address", provider.address)}
        {renderDetailRow("Deposit", provider.deposit)}
        {renderDetailRow("Charge", provider.charge)}
        {renderDetailArrayRow("Other details", provider.otherDetails)}
        {renderDetailArrayRow("Alternate Contacts", provider.alternateContacts)}
        {renderDetailRow("Contact", provider.contact)}
        {renderStatusBadge(provider.status)}
      </div>
    );
  };

  const renderAmbulanceDetails = () => {
    return (
      <div className="my-4 font-size-sm p-3 bg-secondary rounded-sm">
        {renderDetailRow("Location", provider.location)}
        {renderDetailRow("Provider Type", provider.providerType)}
        {renderDetailRow("Cost", provider.cost)}
        {renderDetailArrayRow("Other Details", provider.otherDetails)}
        {renderDetailArrayRow("Alternate Contacts", provider.alternateContacts)}
        {renderDetailRow("Contact", provider.contact)}
        {renderStatusBadge(provider.status)}
      </div>
    );
  };

  const renderPlasmaDetails = () => {
    return (
      <div className="my-4 font-size-sm p-3 bg-secondary rounded-sm">
        {renderDetailRow("Location", provider.location)}
        {renderDetailRow("Blood Group", provider.bloodGroup)}
        {renderDetailArrayRow("Other Details", provider.otherDetails)}
        {renderDetailRow("Contact", provider.contact)}
        {renderStatusBadge(provider.status)}
      </div>
    );
  };

  const renderRemdesivirDetails = () => {
    return (
      <div className="my-4 font-size-sm p-3 bg-secondary rounded-sm">
        {renderDetailRow("Location", provider.location)}
        {renderDetailArrayRow("Other Details", provider.otherDetails)}
        {renderDetailArrayRow("Alternate Contacts", provider.alternateContacts)}
        {renderDetailRow("Contact", provider.contact)}
        {renderStatusBadge(provider.status)}
      </div>
    );
  };

  const renderMealsDetails = () => {
    return (
      <div className="my-4 font-size-sm p-3 bg-secondary rounded-sm">
        {renderDetailRow("Location", provider.location)}
        {renderDetailRow("Provider Type", provider.providerType)}
        {renderDetailRow("Service Areas", provider.serviceAreas)}
        {renderDetailRow("Service Hours", provider.serviceHours)}
        {renderDetailRow("Delivery Option", provider.deliveryOption)}
        {renderDetailRow("Cost", provider.cost)}
        {renderDetailArrayRow("Other Details", provider.otherDetails)}
        {renderDetailArrayRow("Alternate Contacts", provider.alternateContacts)}
        {renderDetailRow("Contact", provider.contact)}
        {renderStatusBadge(provider.status)}
      </div>
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
