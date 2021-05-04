import { useState, useEffect } from "react";
import { Card, Paper, Button, Box, Grid, Fab, Tooltip } from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import Dropdown from "../custom/dropdown";

import useOxygenData from "../../services/useOxygenData";
import useAmbulanceData from "../../services/useAmbulanceData";
import usePlasmaData from "../../services/usePlasmaData";
import useMedicineData from "../../services/useMedicineData";
import useMealsData from "../../services/useMealsData";

import {
  HELP_CATEGORY,
  MEDICINES,
  OTHER_HELP,
} from "../../constants/constants";
import helpers from "../../helpers/helpers";
import HelpDetailsDialog from "../dialogs/help-details-dialog";

function HelpSummary(props) {
  const [ambulanceProviders] = useAmbulanceData();
  const [oxygenProviders] = useOxygenData();
  const [medicineProviders] = useMedicineData();
  const [plasmaProviders] = usePlasmaData();
  const [mealsProviders] = useMealsData();
  const [providers, setProviders] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState({});
  const [selectedState, setSelectedState] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("");
  const [selectedProviderType, setSelectedProviderType] = useState("");
  const [helpDetailsShow, setHelpDetailsShow] = useState(false);
  const [filteredProviders, setFilteredProviders] = useState(false);
  const { category } = props;

  useEffect(() => {
    if (ambulanceProviders || oxygenProviders || medicineProviders || plasmaProviders || mealsProviders) {
      loadHelpProviders();
    }
  }, [ambulanceProviders, oxygenProviders, medicineProviders, plasmaProviders, mealsProviders]);

  useEffect(() => {
    if (providers) {
      const filteredArray = providers.filter((item) => {
        let filterMatched = true;
        if (selectedState) {
          filterMatched = item.state === selectedState;
        }
        if (filterMatched && selectedLocation) {
          filterMatched = item.location === selectedLocation;
        }
        if (filterMatched && selectedBloodGroup) {
          filterMatched = item.bloodGroup === selectedBloodGroup;
        }
        if (filterMatched && selectedProviderType) {
          filterMatched = item.providerType === selectedProviderType;
        }
        return filterMatched;
      });
      setFilteredProviders(filteredArray)
    }
  }, [providers, selectedState, selectedLocation, selectedBloodGroup, selectedProviderType])

  const loadHelpProviders = () => {
    switch (category) {
      case HELP_CATEGORY.OXYGEN:
        setProviders(oxygenProviders);
        break;
      case HELP_CATEGORY.AMBULANCE:
        setProviders(ambulanceProviders);
        break;
      case HELP_CATEGORY.PLASMA:
        setProviders(plasmaProviders);
        break;
      case HELP_CATEGORY.REMDESIVIR:
        if (medicineProviders) {
          const remdesivir = medicineProviders.find(
            (m) => m.name === MEDICINES.REMDESIVIR
          );
          setProviders(medicineProviders);
        }
        break;
      case HELP_CATEGORY.MEALS:
        setProviders(mealsProviders);
        break;
      default:
    }
  };

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

  const renderViewDetailsButton = (provider) => {
    return (
      <Button
        variant="outlined"
        color="secondary"
        className="text-uppercase w-100 font-size-xs"
        onClick={() => {
          setSelectedProvider(provider);
          setHelpDetailsShow(true);
        }}>
        <small className="font-weight-bold">View Details</small>
      </Button>
    );
  };

  const renderOxygenProvider = (provider) => {
    return (
      <Grid key={provider.name} item xs={12} md={6} lg={4}>
        <Card className="card-box mb-4 p-4">
          <div className="d-flex align-items-center mb-3">
            <div className="w-100">
              <a href="#/" onClick={e => e.preventDefault()} className="font-weight-bold font-size-lg" title="...">
                {provider.name}
              </a>
            </div>
          </div>
          <div className="my-4 font-size-sm p-3 bg-secondary rounded-sm">
            {renderDetailRow("Location", provider.location)}
            {renderDetailRow("Contact", provider.contact)}
            {renderStatusBadge(provider.contactStatus)}
          </div>
          {renderViewDetailsButton(provider)}
        </Card>
      </Grid>
    );
  };

  const renderAmbulanceProvider = (provider) => {
    return (
      <Grid item xs={12} md={6} lg={4}>
        <Card className="card-box mb-4 p-4">
          <div className="d-flex align-items-center mb-3">
            <div className="w-100">
              <a href="#/" onClick={e => e.preventDefault()} className="font-weight-bold font-size-lg" title="...">
                {provider.name}
              </a>
            </div>
          </div>
          <div className="my-4 font-size-sm p-3 bg-secondary rounded-sm">
            {renderDetailRow("Location", provider.location)}
            {renderDetailRow("Provider Type", provider.providerType)}
            {renderDetailRow("Contact", provider.contact)}
            {renderStatusBadge(provider.contactStatus)}
          </div>
          {renderViewDetailsButton(provider)}
        </Card>
      </Grid>
    );
  };

  const renderPlasmaProvider = (provider) => {
    return (
      <Grid item xs={12} md={6} lg={4}>
        <Card className="card-box mb-4 p-4">
          <div className="d-flex align-items-center mb-3">
            <div className="w-100">
              <a href="#/" onClick={e => e.preventDefault()} className="font-weight-bold font-size-lg" title="...">
                {provider.name}
              </a>
            </div>
          </div>
          <div className="my-4 font-size-sm p-3 bg-secondary rounded-sm">
            {renderDetailRow("Location", provider.location)}
            {renderDetailRow("Blood Group", provider.bloodGroup)}
            {renderDetailRow("Contact", provider.contact)}
            {renderStatusBadge(provider.contactStatus)}
          </div>
          {renderViewDetailsButton(provider)}
        </Card>
      </Grid>
    );
  };

  const renderRemdesivirProvider = (provider) => {
    return (
      <Grid item xs={12} md={6} lg={4}>
        <Card className="card-box mb-4 p-4">
          <div className="d-flex align-items-center mb-3">
            <div className="w-100">
              <a href="#/" onClick={e => e.preventDefault()} className="font-weight-bold font-size-lg" title="...">
                {provider.name}
              </a>
            </div>
          </div>
          <div className="my-4 font-size-sm p-3 bg-secondary rounded-sm">
            {renderDetailRow("Location", provider.location)}
            {renderDetailRow("Contact", provider.contact)}
            {renderStatusBadge(provider.contactStatus)}
          </div>
          {renderViewDetailsButton(provider)}
        </Card>
      </Grid>
    );
  };

  const renderMealsProvider = (provider) => {
    return (
      <Grid item xs={12} md={6} lg={4}>
        <Card className="card-box mb-4 p-4">
          <div className="d-flex align-items-center mb-3">
            <div className="w-100">
              <a href="#/" onClick={e => e.preventDefault()} className="font-weight-bold font-size-lg" title="...">
                {provider.name}
              </a>
            </div>
          </div>
          <div className="my-4 font-size-sm p-3 bg-secondary rounded-sm">
            {renderDetailRow("Location", provider.location)}
            {renderDetailRow("Provider Type", provider.providerType)}
            {renderDetailRow("Service Hours", provider.serviceHours)}
            {renderDetailRow("Contact", provider.contact)}
            {renderStatusBadge(provider.contactStatus)}
          </div>
          {renderViewDetailsButton(provider)}
        </Card>
      </Grid>
    );
  };

  const renderFilters = () => {
    const uniqueLocations = [
      ...new Set(providers.map((provider) => provider.location)),
    ];
    const uniqueStates = [
      ...new Set(providers.map((provider) => provider.state)),
    ];
    const uniqueBloodGroups = [
      ...new Set(providers.map((provider) => provider.bloodGroup)),
    ];
    const uniqueProviderTypes = [
      ...new Set(providers.map((provider) => provider.providerType)),
    ];
    return (
      <Grid container spacing={2} className="mb-2">
        <Grid item xs={12} md={6} lg={4}>
          <Dropdown
            title="State"
            items={uniqueStates}
            setSelected={setSelectedState}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Dropdown
            title="City"
            items={uniqueLocations}
            setSelected={setSelectedLocation}
          />
        </Grid>
        { category === HELP_CATEGORY.PLASMA && (
          <Grid item xs={12} md={6} lg={4}>
            <Dropdown
              title="Blood Group"
              items={uniqueBloodGroups}
              setSelected={setSelectedBloodGroup}
            />
          </Grid>
        )}
        {category === HELP_CATEGORY.MEALS && (
          <Grid item xs={12} md={6} lg={4}>
            <Dropdown
              title="Provider Type"
              items={uniqueProviderTypes}
              setSelected={setSelectedProviderType}
            />
          </Grid>
        )}
      </Grid>
    );
  };

  return (
    <>
      <Paper
        square
        elevation={6}
        className="app-page-title app-page-title-alt-1">
        <div>
          <Box className="app-page-title--first mx-2">
            <div className="app-page-title--heading">
              <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Providers</h1>
            </div>
          </Box>
        </div>
        <div>
          <Tooltip title="Back to home">
            <Fab color="secondary" href="/">
              <ChevronLeftIcon fontSize="large" />
            </Fab>
          </Tooltip>
        </div>
      </Paper>
      {providers && renderFilters()}
      <Grid container spacing={2} >
        {category === HELP_CATEGORY.OXYGEN &&
          filteredProviders && filteredProviders.map((provider) => renderOxygenProvider(provider))}
        {category === HELP_CATEGORY.AMBULANCE && ambulanceProviders &&
          filteredProviders && filteredProviders.map((provider) =>
            renderAmbulanceProvider(provider)
          )}
        {category === HELP_CATEGORY.PLASMA &&
          filteredProviders && filteredProviders.map((provider) => renderPlasmaProvider(provider))}
        {category === HELP_CATEGORY.REMDESIVIR &&
          filteredProviders && filteredProviders.map((provider) =>
            renderRemdesivirProvider(provider)
          )}
        {category === HELP_CATEGORY.MEALS &&
          filteredProviders && filteredProviders.map((provider) => renderMealsProvider(provider))}
      </Grid>
      <HelpDetailsDialog
        category={category}
        provider={selectedProvider}
        show={helpDetailsShow}
        onHide={() => setHelpDetailsShow(false)}
      />
    </>
  );
}

export default HelpSummary;
