import { Route, Switch } from "react-router-dom";

import Home from "../components/main/home";
import NotFound from "../components/main/not-found";
import HelpSummary from "../components/help/help-summary";
import HelpDetails from "../components/help/help-details";
import APPLICATION_URL from "../constants/application-routes";

import { HELP_CATEGORY } from "../constants/constants";

const RouterConfig = () => (
  <div id="page-body">
    <Switch>
      <Route exact path={APPLICATION_URL.HOME} component={Home} />
      <Route path={APPLICATION_URL.AMBULANCE}>
        <HelpSummary category={HELP_CATEGORY.AMBULANCE} />
      </Route>
      <Route path={APPLICATION_URL.MEDICINES}>
        <HelpSummary category={HELP_CATEGORY.MEDICINES} />
      </Route>
      <Route path={APPLICATION_URL.OTHERS}>
        <HelpSummary category={HELP_CATEGORY.OTHERS} />
      </Route>
      <Route path={APPLICATION_URL.OXYGEN}>
        <HelpSummary category={HELP_CATEGORY.OXYGEN} />
      </Route>
      <Route path={APPLICATION_URL.PLASMA}>
        <HelpSummary category={HELP_CATEGORY.PLASMA} />
      </Route>
      <Route exact path={APPLICATION_URL.DETAILS} component={HelpDetails} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default RouterConfig;
