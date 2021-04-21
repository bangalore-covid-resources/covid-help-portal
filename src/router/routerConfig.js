import { Route, Switch } from "react-router-dom";

import APPLICATION_URL from "../constants/application-routes";
import HelpSummary from "../components/help/help-summary";
import HelpDetails from "../components/help/help-details";
import NotFound from "../components/main/not-found";

const RouterConfig = () => (
  <div id="page-body">
    <Switch>
      <Route path={APPLICATION_URL.AMBULANCE} component={HelpDetails} />
      <Route path={APPLICATION_URL.MEDICINES} component={HelpDetails} />
      <Route path={APPLICATION_URL.OTHERS} component={HelpDetails} />
      <Route path={APPLICATION_URL.OXYGEN} component={HelpSummary} />
      <Route path={APPLICATION_URL.PLASMA} component={HelpDetails} />
      <Route path={APPLICATION_URL.DETAILS} component={HelpDetails} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default RouterConfig;
