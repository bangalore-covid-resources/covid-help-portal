import { Route, Switch } from "react-router-dom";

import Home from "../components/main/home";
import About from "../components/main/about";
import NotFound from "../components/main/not-found";
import HelpSummary from "../components/help/help-summary";
import APPLICATION_URL from "../constants/application-routes";

import { HELP_CATEGORY } from "../constants/constants";

const RouterConfig = () => (
  <div className="mt-3 mb-3">
    <Switch>
      <Route exact path={APPLICATION_URL.HOME} component={Home} />
      <Route path={APPLICATION_URL.OXYGEN}>
        <HelpSummary category={HELP_CATEGORY.OXYGEN} />
      </Route>
      <Route path={APPLICATION_URL.AMBULANCE}>
        <HelpSummary category={HELP_CATEGORY.AMBULANCE} />
      </Route>
      <Route path={APPLICATION_URL.PLASMA}>
        <HelpSummary category={HELP_CATEGORY.PLASMA} />
      </Route>
      <Route path={APPLICATION_URL.REMDESIVIR}>
        <HelpSummary category={HELP_CATEGORY.REMDESIVIR} />
      </Route>
      <Route path={APPLICATION_URL.MEALS}>
        <HelpSummary category={HELP_CATEGORY.MEALS} />
      </Route>
      <Route path={APPLICATION_URL.ABOUT}>
        <About />
      </Route>

      <Route component={NotFound} />
    </Switch>
  </div>
);

export default RouterConfig;
