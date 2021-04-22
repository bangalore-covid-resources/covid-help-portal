import { useLocation } from "react-router";
import { HELP_CATEGORY } from "../../constants/constants";

function renderOxygenDetails(provider) {
  return (
    <div>
      <label>Provider Name:</label>
      <h1>{provider.name}</h1>

      <label>Contact:</label>
      <h1>{provider.contact}</h1>

      <label>Alternate Contact:</label>
      <h1>{provider.alternateContact}</h1>

      <label>Address:</label>
      <h1>{provider.address}</h1>

      <label>Deposit:</label>
      <h1>{provider.deposit}</h1>

      <label>Status:</label>
      <h1>{provider.status}</h1>
    </div>
  );
}

function renderAmbulanceDetails(provider) {
  return (
    <div>
      <label>Provider Name:</label>
      <h1>{provider.name}</h1>

      <label>Contact:</label>
      <h1>{provider.contact}</h1>

      <label>Alternate Contact:</label>
      <h1>{provider.alternateContact}</h1>

      <label>Address:</label>
      <h1>{provider.address}</h1>

      <label>Status:</label>
      <h1>{provider.status}</h1>
    </div>
  );
}

function renderPlasmaDetails(provider) {
  return (
    <div>
      <label>Provider Name:</label>
      <h1>{provider.name}</h1>

      <label>Contact:</label>
      <h1>{provider.contact}</h1>

      <label>Alternate Contact:</label>
      <h1>{provider.alternateContact}</h1>

      <label>Blood Group:</label>
      <h1>{provider.bloodGroup}</h1>

      <label>Status:</label>
      <h1>{provider.status}</h1>
    </div>
  );
}

function renderMedicineDetails(provider) {
  return (
    <div>
      <label>Provider Name:</label>
      <h1>{provider.name}</h1>

      <label>Contact:</label>
      <h1>{provider.contact}</h1>

      <label>Status:</label>
      <h1>{provider.status}</h1>
    </div>
  );
}

function renderOtherDetails(provider) {
  return (
    <div>
      <label>Provider Name:</label>
      <h1>{provider.name}</h1>

      <label>Contact:</label>
      <h1>{provider.contact}</h1>

      <label>Status:</label>
      <h1>{provider.status}</h1>
    </div>
  );
}

function HelpDetails() {
  const location = useLocation();
  const { category, provider } = location.state;

  return (
    <div>
      {category === HELP_CATEGORY.OXYGEN && renderOxygenDetails(provider)}
      {category === HELP_CATEGORY.AMBULANCE && renderAmbulanceDetails(provider)}
      {category === HELP_CATEGORY.PLASMA && renderPlasmaDetails(provider)}
      {category === HELP_CATEGORY.MEDICINES && renderMedicineDetails(provider)}
      {category === HELP_CATEGORY.OTHERS && renderOtherDetails(provider)}
    </div>
  );
}

export default HelpDetails;
