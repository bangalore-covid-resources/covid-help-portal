import { BrowserRouter as Router } from "react-router-dom";
import ReactGA from "react-ga";

import Header from "./components/main/header";
import Footer from "./components/main/footer";
import RouterConfig from "./router/routerConfig";
import RouteChangeTracker from "./router/routeChangeTracker";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import '../src/assets/base.scss';
import MuiTheme from './theme';

ReactGA.initialize("UA-195969077-1");

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={MuiTheme}>
        <Router>
          <div className="app-wrapper">
            <Header />
            <div className="app-main">
              <div className="app-content">
                <div className="app-content--inner">
                  <div className="app-content--inner__wrapper">
                    <RouteChangeTracker />
                    <RouterConfig />
                    <Footer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
