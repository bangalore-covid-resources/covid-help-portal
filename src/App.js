import { BrowserRouter as Router } from "react-router-dom";
import ReactGA from "react-ga";

import Header from "./components/main/header";
import Footer from "./components/main/footer";
import RouterConfig from "./router/routerConfig";
import RouteChangeTracker from "./router/routeChangeTracker";
import "./content/styles/App.scss";

ReactGA.initialize("UA-195969077-1");

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <RouteChangeTracker />
        <RouterConfig />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
