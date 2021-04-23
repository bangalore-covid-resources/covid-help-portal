import { useLocation } from "react-router";
import { HELP_CATEGORY } from "../../constants/constants";
import helpers from "../../helpers/helpers";

function renderOxygenDetails(provider) {
  return (
    <div class="card mb-3" style={{ width: "50%" }}>
      <div class="card-header text-white bg-info">{provider.name}</div>
      <div class="card-body">
        <div className="row card-text">
          <div className="col-sm-6">
            <label>Location:</label>
          </div>
          <div className="col-sm-6">
            <p>{provider.location}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <label>Contact:</label>
          </div>
          <div className="col-sm-6">
            <p>{provider.contact}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <label>Alternate Contact:</label>
          </div>
          <div className="col-sm-6">
            {provider.alternateContact?.map((ac) => {
              return <p>{ac}</p>;
            })}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <label>Address:</label>
          </div>
          <div className="col-sm-6">
            <p>{helpers.getStringValue(provider.address)}</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <label>Deposit:</label>
        </div>
        <div className="col-sm-6">
          <p>{helpers.getStringValue(provider.deposit)}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <label>Charge:</label>
        </div>
        <div className="col-sm-6">
          <p>{helpers.getStringValue(provider.charge)}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <label>Availability:</label>
        </div>
        <div className="col-sm-6">
          <p>{helpers.getStringValue(provider.availability)}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <label>Other Details:</label>
        </div>
        <div className="col-sm-6">
          <p>{helpers.getStringValue(provider.otherDetails)}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <label>Status:</label>
        </div>
        <div className="col-sm-6">
          <p>{provider.status}</p>
        </div>
      </div>
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
