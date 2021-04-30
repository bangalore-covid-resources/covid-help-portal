import React from "react";
import { withRouter } from "react-router-dom";
import ReactGA from "react-ga";

function RouteChangeTracker({ history }) {
  history.listen((location) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });

  return <div></div>;
}

export default withRouter(RouteChangeTracker);
